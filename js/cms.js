/* Public content loader.
   1. Fetches published rows once and exposes them as window.MGGS_CMS_READY (a promise).
      Resolves to null if there is no endpoint, the request fails, or it times out.
   2. Fills the sections that are rendered here (staff, gallery, welfare, facilities,
      achievements). A section is changed only when its collection has rows, so
      without backend data every page keeps its existing content.
   3. Fires "mggs:cms-rendered" on document after the sections are filled, so page
      scripts (for example the welfare filter) can refresh. */
(function () {
  "use strict";
  var cfg = window.MGGS_CMS_CONFIG || {};

  window.MGGS_CMS_READY = new Promise(function (resolve) {
    if (!cfg.endpoint) { resolve(null); return; }
    var settled = false;
    var timer = setTimeout(function () { if (!settled) { settled = true; resolve(null); } }, 20000);
    var url = cfg.endpoint + (cfg.endpoint.indexOf("?") === -1 ? "?" : "&") + "action=public";
    fetch(url, { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (data) {
        if (settled) return;
        settled = true; clearTimeout(timer);
        window.MGGS_CMS_DATA = data.collections || {};
        resolve(window.MGGS_CMS_DATA);
      })
      .catch(function () {
        if (settled) return;
        settled = true; clearTimeout(timer);
        resolve(null);
      });
  });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function byOrder(a, b) { return (Number(a.order) || 0) - (Number(b.order) || 0); }
  function whenDom(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  /* ---------- staff (team.html): teaching and non-teaching groups; principal stays as is ---------- */
  function staffCard(s) {
    return '<article class="card staff-card">' +
      (s.photo ? '<div class="staff-photo"><img src="' + esc(s.photo) + '" alt="Photo of ' + esc(s.name) + '" decoding="async"></div>' : "") +
      "<h4>" + esc(s.name) + "</h4>" +
      (s.designation ? '<p class="staff-role">' + esc(s.designation) + "</p>" : "") +
      (s.subject ? '<p class="staff-subject">Subject: ' + esc(s.subject) + "</p>" : "") +
      "</article>";
  }
  function staffGroup(title, list) {
    return '<div class="staff-group" data-live="1"><h3 class="staff-group-title">' + esc(title) + ' <span class="staff-count">' + list.length + '</span></h3>' +
      '<div class="grid cols-3 staff-grid">' + list.map(staffCard).join("") + "</div></div>";
  }
  function renderStaff(rows) {
    var teaching = rows.filter(function (r) { return r.group === "teaching"; }).sort(byOrder);
    var support = rows.filter(function (r) { return r.group === "nonteaching"; }).sort(byOrder);
    var first = document.querySelector(".staff-group:not([data-live])");
    if (!first || (!teaching.length && !support.length)) return;
    first.insertAdjacentHTML("beforebegin",
      (teaching.length ? staffGroup("Teaching staff", teaching) : "") +
      (support.length ? staffGroup("Non-teaching and support staff", support) : ""));
    document.querySelectorAll(".staff-group:not([data-live])").forEach(function (g) { g.remove(); });
  }

  /* ---------- gallery (gallery.html): same buttons, filter and lightbox as the static items ---------- */
  var GALLERY_CATS = ["campus", "classrooms", "events", "exhibitions", "sports"];
  function renderGallery(rows) {
    var items = document.querySelectorAll("[data-gallery-category]");
    if (!items.length) return;
    var parent = items[0].parentNode;
    var html = rows.map(function (r) {
      var tag = String(r.tag || "").toLowerCase();
      var cat = GALLERY_CATS.indexOf(tag) >= 0 ? tag : "other";
      return '<button type="button" class="gallery-item" data-gallery-category="' + cat + '" data-caption="' + esc(r.title) + '" data-note="' + esc(r.alt) + '">' +
        '<span class="photo"><img src="' + esc(r.photo) + '" width="1200" height="900" loading="lazy" decoding="async" alt="' + esc(r.alt) + '">' +
        '<span class="photo-tag">' + esc(r.tag || "School photo") + "</span></span></button>";
    }).join("");
    items.forEach(function (i) { i.remove(); });
    parent.insertAdjacentHTML("beforeend", html);
  }

  /* ---------- welfare (welfare-schemes.html): cards keep the data-cat filter attribute ---------- */
  var GROUP_LABELS = {
    A: "All eligible students", B: "Girls", C: "Economically weaker and reserved categories",
    D: "Meritorious students", E: "Students with special needs", F: "Other special eligibility"
  };
  function renderWelfare(rows) {
    var cards = document.querySelectorAll(".scheme-card");
    if (!cards.length) return;
    var parent = cards[0].parentNode;
    var html = rows.map(function (r) {
      return '<article class="card scheme-card" data-cat="' + esc(r.group) + '">' +
        '<p class="scheme-cat">' + esc(r.group + " · " + (GROUP_LABELS[r.group] || "")) + "</p>" +
        '<h2 class="scheme-name">' + esc(r.name) + "</h2>" +
        (r.hindi_name ? '<p class="scheme-hi" lang="hi">' + esc(r.hindi_name) + "</p>" : "") +
        (r.description ? "<p>" + esc(r.description) + "</p>" : "") +
        '<p class="scheme-status status-tbc">' + esc(r.status || "Details to be confirmed") + "</p>" +
        (r.link ? '<a class="card-link" href="' + esc(r.link) + '" target="_blank" rel="noopener">Official link</a>' : "") +
        "</article>";
    }).join("");
    cards.forEach(function (c) { c.remove(); });
    parent.insertAdjacentHTML("beforeend", html);
  }

  /* ---------- facilities and achievements: extra block below the existing content ---------- */
  function facilityCard(r) {
    return '<article class="card">' +
      (r.photo ? '<figure class="photo"><img src="' + esc(r.photo) + '" width="1200" height="900" loading="lazy" decoding="async" alt="' + esc(r.title) + '"><figcaption class="photo-tag">School photo</figcaption></figure>' : "") +
      "<h3>" + esc(r.title) + "</h3>" + (r.text ? "<p>" + esc(r.text) + "</p>" : "") + "</article>";
  }
  function achievementCard(r) {
    return '<article class="card">' +
      (r.year ? '<span class="ach-badge">' + esc(r.year) + "</span>" : "") +
      "<h3>" + esc(r.title) + "</h3>" + (r.description ? "<p>" + esc(r.description) + "</p>" : "") +
      (r.photo ? '<figure class="photo"><img src="' + esc(r.photo) + '" width="1200" height="900" loading="lazy" decoding="async" alt="' + esc(r.title) + '"><figcaption class="photo-tag">School photo</figcaption></figure>' : "") +
      "</article>";
  }
  function renderBlock(name, rows, cardFn) {
    var box = document.querySelector('[data-cms="' + name + '"]');
    if (!box) return;
    box.innerHTML = rows.map(cardFn).join("");
    var block = box.closest("[data-cms-block]");
    if (block) block.hidden = false;
  }

  window.MGGS_CMS_READY.then(function (c) {
    if (!c) return;
    whenDom(function () {
      if (c.staff && c.staff.length) renderStaff(c.staff);
      if (c.gallery && c.gallery.length) renderGallery(c.gallery);
      if (c.welfare && c.welfare.length) renderWelfare(c.welfare);
      if (c.facilities && c.facilities.length) renderBlock("facilities", c.facilities.slice().sort(byOrder), facilityCard);
      if (c.achievements && c.achievements.length) renderBlock("achievements", c.achievements, achievementCard);
      document.dispatchEvent(new Event("mggs:cms-rendered"));
    });
  });
})();
