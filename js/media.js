/* Renders the Social Media and School Magazine sections on media.html from js/media-data.js.
   Cards are created after page load, so they do not use the scroll "reveal" class. */
(function () {
  "use strict";
  var DATA = window.MGGS_MEDIA;
  if (!DATA) return;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderMedia() {
  var sl = document.getElementById("social-list");
  if (sl) {
    var links = DATA.social.filter(function (s) { return s.url; });
    sl.innerHTML = links.length
      ? links.map(function (s) {
          return '<a class="social-link" href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
            '<span class="social-name">' + esc(s.platform) + "</span>" +
            '<span class="social-note">' + esc(s.note) + "</span></a>";
        }).join("")
      : '<p class="notice-meta">No social media links are available yet.</p>';
  }

  var ml = document.getElementById("magazine-list");
  if (ml) {
    ml.innerHTML = DATA.magazines.map(function (m) {
      var cover = m.cover
        ? '<figure class="mag-cover"><img src="' + esc(m.cover) + '" width="975" height="1425" loading="lazy" decoding="async" alt="Cover of ' + esc(m.title) + ' school magazine, session ' + esc(m.session) + '"></figure>'
        : "";
      var edition = m.edition ? "Edition " + esc(m.edition) + " · " : "";
      var pub = m.publisher ? '<dl class="mag-facts"><div><dt>Published by</dt><dd>' + esc(m.publisher) + "</dd></div></dl>" : "";
      return '<article class="mag-card' + (m.cover ? "" : " no-cover") + '" id="' + esc(m.id) + '">' + cover +
        '<div class="mag-body"><p class="eyebrow">' + edition + "Session " + esc(m.session) + "</p>" +
        "<h3>" + esc(m.title) + "</h3><p>" + esc(m.subtitle) + "</p>" + pub +
        '<a class="btn" href="' + esc(m.pdf) + '" download="' + esc(m.pdf.split("/").pop()) + '">DOWNLOAD MAGAZINE – ' + esc(m.session) + "</a>" +
        "</div></article>";
    }).join("");
  }
  }
  function mergeMedia(c, base) {
    var social = c && c.social && c.social.length ? c.social.map(function (x) { return { platform: x.platform, url: x.url, note: x.note }; }) : base.social;
    var magazines = c && c.magazine && c.magazine.length ? c.magazine.map(function (m) {
      return { id: m.id, title: m.title, subtitle: "School Magazine", edition: m.edition || null, session: m.session, publisher: m.publisher || null, cover: m.cover || null, pdf: m.pdf };
    }) : base.magazines;
    return { social: social, magazines: magazines };
  }
  renderMedia();
  Promise.resolve(window.MGGS_CMS_READY).then(function (c) {
    if (!c) return;
    DATA = mergeMedia(c, DATA);
    renderMedia();
  });
})();
