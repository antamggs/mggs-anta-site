/*
 * MGGS website behaviour (redesign).
 *  - Sticky header shadow on scroll
 *  - Mobile navigation toggle (Escape closes it)
 *  - Scroll reveal animations (JS only; content is visible without JS)
 *  - Animated counters, ONLY for elements with a verified data-count value
 *  - Notices list with search and category filter
 *  - Gallery filter and lightbox
 *  - Contact form validation (nothing is sent in this version)
 *
 * Pure functions are also exported on globalThis.MGGS for tests (tests/test-site.mjs).
 */
(function () {
  "use strict";

  // Verified notices only. Add approved entries here.
  // Shape: { date: "YYYY-MM-DD", title, summary, category, pdf (optional) }
  var NOTICES = [];

  var CATEGORIES = ["Circular", "Admission", "Event", "Other"];

  /** Notices matching a search term and optional category, newest first. */
  function filterNotices(notices, query, category) {
    var q = String(query || "").trim().toLowerCase();
    var list = (notices || []).filter(function (n) {
      var matchesCategory = !category || category === "all" || n.category === category;
      var haystack = (n.title + " " + n.summary).toLowerCase();
      var matchesQuery = !q || haystack.indexOf(q) !== -1;
      return matchesCategory && matchesQuery;
    });
    return list.slice().sort(function (a, b) {
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    });
  }

  /** Validate contact form values. Returns { field: message } for each problem. */
  function validateContact(values) {
    var errors = {};
    var name = String(values.name || "").trim();
    var contact = String(values.contact || "").trim();
    var message = String(values.message || "").trim();

    if (name.length < 2) {
      errors.name = "Please enter your name.";
    }
    var looksLikePhone = /^[+0-9 ()-]{7,15}$/.test(contact);
    var looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    if (!looksLikePhone && !looksLikeEmail) {
      errors.contact = "Please enter a valid phone number or email address.";
    }
    if (message.length < 10) {
      errors.message = "Please write a message of at least 10 characters.";
    }
    return errors;
  }

  var api = {
    NOTICES: NOTICES,
    CATEGORIES: CATEGORIES,
    filterNotices: filterNotices,
    validateContact: validateContact
  };
  if (typeof globalThis !== "undefined") {
    globalThis.MGGS = api;
  }

  if (typeof document === "undefined") {
    return; // Node test run: skip DOM wiring.
  }

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  }

  // ---- Header: shadow when scrolled ----
  function setupHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  // ---- Mobile navigation ----
  function setupNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close the menu after choosing a link on mobile.
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });
  }

  // ---- Scroll reveal ----
  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    root.classList.add("js-ready");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { observer.observe(el); });
  }

  // ---- Counters: only for elements with data-count (verified numbers) ----
  function setupCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    function animate(el) {
      var target = Number(el.getAttribute("data-count"));
      if (!isFinite(target)) return;
      if (reduceMotion) {
        el.textContent = target.toLocaleString("en-IN");
        return;
      }
      var duration = 1400;
      var start = null;
      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString("en-IN");
        if (progress < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animate);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { observer.observe(el); });
  }

  // ---- Card pointer glow (fine pointers only, throttled) ----
  function setupCardGlow() {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    document.querySelectorAll(".card").forEach(function (card) {
      var frame = false;
      card.addEventListener("pointermove", function (event) {
        if (frame) return;
        frame = true;
        window.requestAnimationFrame(function () {
          var rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", (event.clientX - rect.left) + "px");
          card.style.setProperty("--my", (event.clientY - rect.top) + "px");
          frame = false;
        });
      });
    });
  }

  // ---- Notices page ----
  function renderNotices() {
    var list = document.getElementById("notice-list");
    if (!list) return;
    var search = document.getElementById("notice-search");
    var filter = document.getElementById("notice-category");
    var count = document.getElementById("notice-count");

    function draw() {
      var results = filterNotices(NOTICES, search ? search.value : "", filter ? filter.value : "all");
      if (count) {
        count.textContent = results.length + " notice(s) shown";
      }
      if (results.length === 0) {
        var msg = NOTICES.length === 0
          ? "No notices have been posted yet. Notices will appear here once approved by the school."
          : "No notices match your search.";
        list.innerHTML = '<p class="empty-state">' + escapeHtml(msg) + "</p>";
        return;
      }
      list.innerHTML = results.map(function (n) {
        var pdf = n.pdf ? ' <a href="' + escapeHtml(n.pdf) + '">Download PDF</a>' : "";
        return '<article class="notice-item">' +
          '<p class="notice-meta">' + escapeHtml(formatDate(n.date)) + "</p>" +
          '<span class="badge">' + escapeHtml(n.category) + "</span>" +
          "<h3>" + escapeHtml(n.title) + "</h3>" +
          "<p>" + escapeHtml(n.summary) + pdf + "</p>" +
          "</article>";
      }).join("");
    }

    if (search) search.addEventListener("input", draw);
    if (filter) filter.addEventListener("change", draw);
    draw();
  }

  // ---- Press coverage archive ----
  // One entry per newspaper clipping (42). Publication, date and headline are null until they can be read from the clipping.
  // Category is a topic from the thumbnail and must be verified. Years are not shown: they cannot be read reliably.
  var PRESS = [
    { image: "assets/images/press/press-01.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0012" },
    { image: "assets/images/press/press-02.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0013" },
    { image: "assets/images/press/press-03.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0014" },
    { image: "assets/images/press/press-04.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0016" },
    { image: "assets/images/press/press-05.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0017" },
    { image: "assets/images/press/press-06.jpg", category: "Scouts & Guides", publication: null, date: null, headline: null, id: "MGGS-0018" },
    { image: "assets/images/press/press-07.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0019" },
    { image: "assets/images/press/press-08.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0020" },
    { image: "assets/images/press/press-09.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0021" },
    { image: "assets/images/press/press-10.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0022" },
    { image: "assets/images/press/press-11.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0024" },
    { image: "assets/images/press/press-12.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0025" },
    { image: "assets/images/press/press-13.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0027" },
    { image: "assets/images/press/press-14.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0028" },
    { image: "assets/images/press/press-15.jpg", category: "Achievements", publication: null, date: null, headline: null, id: "MGGS-0030" },
    { image: "assets/images/press/press-16.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0031" },
    { image: "assets/images/press/press-17.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0032" },
    { image: "assets/images/press/press-18.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0034" },
    { image: "assets/images/press/press-19.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0035" },
    { image: "assets/images/press/press-20.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0038" },
    { image: "assets/images/press/press-21.jpg", category: "Culture", publication: null, date: null, headline: null, id: "MGGS-0040" },
    { image: "assets/images/press/press-22.jpg", category: "Achievements", publication: null, date: null, headline: null, id: "MGGS-0041" },
    { image: "assets/images/press/press-23.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0042" },
    { image: "assets/images/press/press-24.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0044" },
    { image: "assets/images/press/press-25.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0049" },
    { image: "assets/images/press/press-26.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0050" },
    { image: "assets/images/press/press-27.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0051" },
    { image: "assets/images/press/press-28.jpg", category: "Scouts & Guides", publication: null, date: null, headline: null, id: "MGGS-0052" },
    { image: "assets/images/press/press-29.jpg", category: "Culture", publication: null, date: null, headline: null, id: "MGGS-0055" },
    { image: "assets/images/press/press-30.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0056" },
    { image: "assets/images/press/press-31.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0057" },
    { image: "assets/images/press/press-32.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0059" },
    { image: "assets/images/press/press-33.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0060" },
    { image: "assets/images/press/press-34.jpg", category: "Achievements", publication: null, date: null, headline: null, id: "MGGS-0061" },
    { image: "assets/images/press/press-35.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0062" },
    { image: "assets/images/press/press-36.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0063" },
    { image: "assets/images/press/press-37.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0064" },
    { image: "assets/images/press/press-38.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0065" },
    { image: "assets/images/press/press-39.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0066" },
    { image: "assets/images/press/press-40.jpg", category: "Science", publication: null, date: null, headline: null, id: "MGGS-0067" },
    { image: "assets/images/press/press-41.jpg", category: "Achievements", publication: null, date: null, headline: null, id: "MGGS-0068" },
    { image: "assets/images/press/press-42.jpg", category: "Other", publication: null, date: null, headline: null, id: "MGGS-0106" }
  ];

  function filterPress(items, category) {
    return (items || []).filter(function (p) {
      return !category || category === "all" || p.category === category;
    });
  }

  function renderPress() {
    var list = document.getElementById("press-list");
    if (!list) return;
    var catSel = document.getElementById("press-category");
    var count = document.getElementById("press-count");
    var dialog = document.getElementById("press-lightbox");
    var dialogImg = document.getElementById("press-lightbox-img");

    function draw() {
      var results = filterPress(PRESS, catSel ? catSel.value : "all");
      if (count) count.textContent = results.length + " of " + PRESS.length + " clipping(s) shown";
      list.innerHTML = results.map(function (p, i) {
        var n = PRESS.indexOf(p) + 1;
        // No "reveal" class here: these cards are created after the reveal observer is set up, so they would stay hidden.
        return '<article class="card press-item">' +
          '<button type="button" class="press-thumb" data-full="' + escapeHtml(p.image) + '" aria-label="Enlarge newspaper clipping ' + n + '">' +
          '<img src="' + escapeHtml(p.image) + '" alt="Newspaper clipping ' + n + ' (' + escapeHtml(p.category) + ')" decoding="async" width="1000" height="1000"></button>' +
          '<div class="press-meta">' +
          '<span class="badge">' + escapeHtml(p.category) + "</span>" +
          '<p class="notice-meta">Publication: ' + (p.publication ? escapeHtml(p.publication) : "not identified") + "</p>" +
          '<p class="notice-meta">Date: ' + (p.date ? escapeHtml(formatDate(p.date)) : "not identified") + "</p>" +
          "<h3>" + (p.headline ? escapeHtml(p.headline) : "Headline: to be read and verified") + "</h3>" +
          "</div></article>";
      }).join("");
    }

    list.addEventListener("click", function (event) {
      var btn = event.target.closest(".press-thumb");
      if (!btn || !dialog || typeof dialog.showModal !== "function") return;
      dialogImg.src = btn.getAttribute("data-full");
      dialogImg.alt = btn.getAttribute("aria-label").replace("Enlarge ", "");
      dialog.showModal();
    });
    if (dialog) {
      dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });
      var closeBtn = dialog.querySelector("[data-close]");
      if (closeBtn) closeBtn.addEventListener("click", function () { dialog.close(); });
    }
    if (catSel) catSel.addEventListener("change", draw);
    draw();
  }

  // ---- Gallery filter and lightbox ----
  function setupGallery() {
    var chips = document.querySelectorAll("[data-gallery-filter]");
    if (chips.length) {
      chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          var wanted = chip.getAttribute("data-gallery-filter");
          chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
          document.querySelectorAll("[data-gallery-category]").forEach(function (item) {
            var show = wanted === "all" || item.getAttribute("data-gallery-category") === wanted;
            item.hidden = !show;
          });
        });
      });
    }

    var dialog = document.getElementById("lightbox");
    if (!dialog || typeof dialog.showModal !== "function") return;
    var title = document.getElementById("lightbox-title");
    var body = document.getElementById("lightbox-body");
    document.addEventListener("click", function (event) {
      var item = event.target.closest ? event.target.closest("[data-gallery-category]") : null;
      if (!item) return;
      if (title) title.textContent = item.getAttribute("data-caption") || "Photo";
      if (body) body.textContent = item.getAttribute("data-note") || "Photo will be shown after the school approves it.";
      dialog.showModal();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  // ---- Contact form ----
  function setupContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var values = {
        name: form.elements.name.value,
        contact: form.elements.contact.value,
        message: form.elements.message.value
      };
      var errors = validateContact(values);
      var fields = ["name", "contact", "message"];
      fields.forEach(function (field) {
        var errorEl = document.getElementById(field + "-error");
        if (errorEl) errorEl.textContent = errors[field] || "";
        form.elements[field].setAttribute("aria-invalid", errors[field] ? "true" : "false");
      });

      if (Object.keys(errors).length > 0) {
        var first = fields.filter(function (f) { return errors[f]; })[0];
        form.elements[first].focus();
        if (status) {
          status.className = "form-status is-error";
          status.textContent = "Please correct the highlighted fields.";
        }
        return;
      }

      var consent = form.elements.consent;
      if (consent && !consent.checked) {
        var consentError = document.getElementById("consent-error");
        if (consentError) consentError.textContent = "Please read the privacy notice and tick the box to send your enquiry.";
        consent.focus();
        if (status) { status.className = "form-status is-error"; status.textContent = "Please tick the consent box to send your enquiry."; }
        return;
      }
      var consentOk = document.getElementById("consent-error");
      if (consentOk) consentOk.textContent = "";

      var cfg = window.MGGS_CMS_CONFIG || {};
      var button = document.getElementById("enquiry-submit");
      if (!cfg.enquiryEndpoint) {
        // Endpoint not switched on yet: nothing is sent.
        if (status) {
          status.className = "form-status is-error";
          status.textContent = "The online enquiry form is not active yet. Please contact the school office using the details on this page.";
        }
        return;
      }

      var payload = {
        action: "enquiry",
        name: values.name,
        contact: values.contact,
        subject: form.elements.subject ? form.elements.subject.value : "",
        message: values.message,
        website: form.elements.website ? form.elements.website.value : ""
      };
      if (button) { button.disabled = true; button.textContent = "Sending..."; }
      if (status) { status.className = "form-status"; status.textContent = "Sending your enquiry..."; }

      fetch(cfg.enquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.ok) {
            if (status) { status.className = "form-status is-ok"; status.textContent = "Thank you. Your enquiry was received. Reference: " + res.reference + "."; }
            form.reset();
          } else if (status) {
            status.className = "form-status is-error";
            status.textContent = (res && res.error) || "Your enquiry could not be sent. Please try again or call the school office.";
          }
        })
        .catch(function () {
          if (status) { status.className = "form-status is-error"; status.textContent = "Your enquiry could not be sent. Please check your connection and try again, or call the school office."; }
        })
        .then(function () {
          if (button) { button.disabled = false; button.textContent = "Send enquiry"; }
        });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".copy-year").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
    setupHeader();
    setupNav();
    setupReveal();
    setupCounters();
    setupCardGlow();
    renderNotices();
    renderPress();
    Promise.resolve(window.MGGS_CMS_READY).then(function (c) {
      if (!c) return;
      if (c.notices && c.notices.length) {
        NOTICES = c.notices.map(function (n) {
          return { date: n.date, title: n.title, summary: n.body || "", category: n.category, pdf: n.file || null };
        });
      }
      if (c && c.press && c.press.length) {
        PRESS = c.press.map(function (p) {
          return { image: p.photo, category: p.category || "Other", publication: p.publication || null, date: p.date || null, headline: p.headline || null, id: p.id };
        });
      }
      renderNotices();
      renderPress();
    });
    setupGallery();
    setupContactForm();
  });
})();
