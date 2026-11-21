/* Renders the Donors and CSR Partners sections on donation.html from js/donors-data.js.
   Cards are created after page load, so they do not use the scroll "reveal" class
   (the reveal observer would not see them and they would stay hidden). */
(function () {
  "use strict";
  var DATA = window.MGGS_DONORS;
  if (!DATA) return;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function inr(n) { return "₹" + Number(n).toLocaleString("en-IN"); }

  function donorCard(d) {
    var total = d.items.reduce(function (sum, i) { return sum + i.amount; }, 0);
    var pw = d.photoW || 1600, ph = d.photoH || 900;
    var photo = d.photo
      ? '<figure class="dn-photo"><img src="' + esc(d.photo) + '" width="' + pw + '" height="' + ph + '" style="aspect-ratio:' + pw + ' / ' + ph + '" loading="lazy" decoding="async" alt="' + esc(d.photoAlt) + '"></figure>'
      : "";
    var rows = d.items.map(function (i) {
      return "<li><span>" + esc(i.item) + "</span><strong>" + inr(i.amount) + "</strong></li>";
    }).join("");
    return '<article class="dn-card' + (d.photo ? "" : " no-photo") + '">' + photo +
      '<div class="dn-body"><h3>' + esc(d.name) + '</h3><ul class="dn-items">' + rows + "</ul>" +
      '<p class="dn-total"><span>Total contribution</span><strong>' + inr(total) + "</strong></p></div></article>";
  }

  function csrCard(p) {
    var list = "";
    if (p.items && p.items.length) {
      list = '<ul class="dn-items">' + p.items.map(function (x) { return "<li><span>" + esc(x) + "</span></li>"; }).join("") + "</ul>";
    }
    var contribution = p.contribution ? '<p class="csr-line"><span>Contribution</span><strong>' + esc(p.contribution) + "</strong></p>" : "";
    var amount = p.amountLabel ? '<p class="csr-line"><span>Amount</span><strong>' + esc(p.amountLabel) + "</strong></p>" : "";
    return '<article class="csr-card"><h3>' + esc(p.name) + "</h3>" + contribution + amount + list + "</article>";
  }

  function fromCms(c) {
    var donors = c.donors && c.donors.length ? c.donors.map(function (d) {
      return {
        id: d.id, name: d.name, photo: d.photo || null, photoAlt: d.name,
        items: (c.donor_items || []).filter(function (i) { return i.donor_id === d.id; })
          .map(function (i) { return { item: i.item, amount: Number(i.amount) || 0 }; })
      };
    }) : DATA.donors;
    var csr = c.csr && c.csr.length ? c.csr.map(function (p) {
      return {
        id: p.id, name: p.name, contribution: p.contribution || null, amount: null,
        amountLabel: p.amount_label || null,
        items: String(p.items || "").split("\n").map(function (x) { return x.trim(); }).filter(Boolean)
      };
    }) : DATA.csr;
    return { donors: donors, csr: csr };
  }
  function renderAll(d) {
    var dg = document.getElementById("donor-grid");
    if (dg) dg.innerHTML = d.donors.map(donorCard).join("");
    var cg = document.getElementById("csr-grid");
    if (cg) cg.innerHTML = d.csr.map(csrCard).join("");
  }
  renderAll(DATA);
  Promise.resolve(window.MGGS_CMS_READY).then(function (c) {
    if (c) renderAll(fromCms(c));
  });
})();
