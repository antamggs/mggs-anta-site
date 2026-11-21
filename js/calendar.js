/* Academic calendar: Monthly / Yearly views, Events / Holidays filter, and the home "THIS MONTH" block.
   All content comes from js/calendar-data.js (window.ACADEMIC_CALENDAR). Edit that file only. */
(function () {
  "use strict";
  var DATA = window.ACADEMIC_CALENDAR;
  if (!DATA) return;

  var MON = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var MON_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var L = DATA.labels;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function toDate(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function ymd(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function dayLabel(s) { var d = toDate(s); return String(d.getDate()).padStart(2, "0") + " " + MON_SHORT[d.getMonth()]; }
  function rangeLabel(e) { return e.end ? dayLabel(e.start) + " – " + dayLabel(e.end) : dayLabel(e.start); }

  /* Months of the session, derived from sessionStart/sessionEnd */
  function sessionMonths() {
    var out = [];
    var s = toDate(DATA.sessionStart), e = toDate(DATA.sessionEnd);
    var d = new Date(s.getFullYear(), s.getMonth(), 1);
    while (d <= e) {
      var key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
      out.push({
        key: key, year: d.getFullYear(), month: d.getMonth(),
        first: ymd(new Date(d.getFullYear(), d.getMonth(), 1)),
        last: ymd(new Date(d.getFullYear(), d.getMonth() + 1, 0))
      });
      d = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    }
    return out;
  }
  var MONTHS = sessionMonths();

  function entryEnd(e) { return e.end || e.start; }
  function inMonth(e, m) { return e.start <= m.last && entryEnd(e) >= m.first; }
  function matchesFilter(e, f) { return f === "all" || (f === "Event" && e.category === "Event") || (f === "Holiday" && e.category === "Holiday"); }
  function sorted(list) { return list.slice().sort(function (a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : (a.id < b.id ? -1 : 1); }); }
  function entriesFor(m, f) { return sorted(DATA.entries.filter(function (e) { return inMonth(e, m) && matchesFilter(e, f); })); }
  function notesFor(m) { return (DATA.monthNotes || []).filter(function (n) { return n.month === m.key; }); }
  function countsFor(m) {
    var ev = DATA.entries.filter(function (e) { return inMonth(e, m) && e.category === "Event"; }).length;
    var ho = DATA.entries.filter(function (e) { return inMonth(e, m) && e.category === "Holiday"; }).length;
    return { events: ev, holidays: ho };
  }

  function itemHtml(e) {
    var cat = e.category === "Holiday" ? "holiday" : "event";
    var sub = L.subcategory[e.subcategory] || e.subcategory;
    var st = L.status[e.status] || e.status;
    var html = '<li class="cal-item cat-' + cat + '" data-cat="' + esc(e.category) + '">' +
      '<div class="cal-date">' + esc(rangeLabel(e)) + "</div>" +
      '<div class="cal-body"><p class="cal-title">' + esc(e.title) + "</p>" +
      '<p class="cal-tags"><span class="cal-chip">' + esc(L.category[e.category] || e.category) + "</span>" +
      '<span class="cal-chip">' + esc(sub) + "</span>" +
      '<span class="cal-chip st-' + esc(e.status.toLowerCase()) + '">' + esc(st) + "</span></p>";
    if (e.description) html += '<p class="cal-note">' + esc(e.description) + "</p>";
    if (e.notes) html += '<p class="cal-note">' + esc(e.notes) + "</p>";
    html += "</div></li>";
    return html;
  }
  function listHtml(items, emptyText) {
    if (!items.length) return '<li class="cal-empty">' + esc(emptyText) + "</li>";
    return items.map(itemHtml).join("");
  }
  function notesHtml(m) {
    var n = notesFor(m);
    if (!n.length) return "";
    return '<div class="cal-notes"><h3>Notes / नोट्स</h3><ul>' +
      n.map(function (x) { return "<li>" + esc(x.text) + ' <span class="cal-chip st-' + esc(x.status.toLowerCase()) + '">' + esc(L.status[x.status] || x.status) + "</span></li>"; }).join("") +
      "</ul></div>";
  }
  var EMPTY = { all: "No entries for this selection.", Event: "No events in this selection.", Holiday: "No holidays in this selection." };

  /* ---------- Full page ---------- */
  function renderFullPage() {
    var root = document.getElementById("cal-app");
    if (!root) return;
    var today = new Date();
    var currentKey = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0");
    var state = { view: "month", filter: "all", month: null, yearOpen: {} };
    var startMonth = MONTHS.filter(function (m) { return m.key === currentKey; })[0] || MONTHS[0];
    state.month = startMonth.key;
    state.yearOpen[currentKey] = true;

    function seg(name, options, current, attr) {
      return '<div class="cal-seg" role="group" aria-label="' + esc(name) + '">' + options.map(function (o) {
        return '<button type="button" class="cal-seg-btn" ' + attr + '="' + o.v + '" aria-pressed="' + (current === o.v ? "true" : "false") + '">' + esc(o.t) + "</button>";
      }).join("") + "</div>";
    }

    function monthTabs() {
      return '<div class="cal-tabs" role="group" aria-label="Choose a month">' + MONTHS.map(function (m) {
        return '<button type="button" class="cal-tab' + (m.key === currentKey ? " is-current" : "") + '" data-month="' + m.key + '" aria-pressed="' + (state.month === m.key ? "true" : "false") + '">' +
          esc(MON_SHORT[m.month]) + "<span>" + m.year + "</span></button>";
      }).join("") + "</div>";
    }

    function render() {
      var views = seg("Calendar view", [{ v: "month", t: "Monthly" }, { v: "year", t: "Yearly" }], state.view, "data-view");
      var filters = seg("Category filter", [{ v: "all", t: "All" }, { v: "Event", t: "Events" }, { v: "Holiday", t: "Holidays" }], state.filter, "data-filter");
      var body = "";
      if (state.view === "month") {
        var m = MONTHS.filter(function (x) { return x.key === state.month; })[0];
        var c = countsFor(m);
        body = monthTabs() +
          '<div class="cal-head"><h3 class="cal-month-title">' + MON[m.month] + " " + m.year +
          ' <span class="cal-session">Session ' + esc(DATA.session) + '</span></h3>' +
          '<p class="cal-count">' + c.events + " events · " + c.holidays + " holidays</p></div>" +
          '<ul class="cal-list">' + listHtml(entriesFor(m, state.filter), EMPTY[state.filter]) + "</ul>" +
          notesHtml(m);
      } else {
        var tools = '<div class="cal-year-tools"><button type="button" class="cal-link" data-expand="all">Expand all</button>' +
          '<button type="button" class="cal-link" data-expand="none">Collapse all</button></div>';
        body = tools + '<div class="cal-year">' + MONTHS.map(function (m) {
          var items = entriesFor(m, state.filter);
          var cc = countsFor(m);
          var open = !!state.yearOpen[m.key];
          return '<details class="cal-month" data-key="' + m.key + '"' + (open ? " open" : "") + ">" +
            '<summary><span class="cal-sum-name">' + MON[m.month] + " " + m.year + '</span>' +
            '<span class="cal-sum-count">' + items.length + " shown · " + cc.events + " events · " + cc.holidays + " holidays</span></summary>" +
            '<ul class="cal-list">' + listHtml(items, EMPTY[state.filter]) + "</ul>" + notesHtml(m) + "</details>";
        }).join("") + "</div>";
      }
      root.innerHTML =
        '<div class="cal-controls">' + views + filters + "</div>" +
        '<div class="cal-view" aria-live="polite">' + body + "</div>";
    }

    root.addEventListener("click", function (ev) {
      var t = ev.target.closest("button");
      if (!t) return;
      if (t.hasAttribute("data-view")) { state.view = t.getAttribute("data-view"); render(); return; }
      if (t.hasAttribute("data-filter")) { state.filter = t.getAttribute("data-filter"); render(); return; }
      if (t.hasAttribute("data-month")) { state.month = t.getAttribute("data-month"); render(); return; }
      if (t.hasAttribute("data-expand")) {
        var all = t.getAttribute("data-expand") === "all";
        MONTHS.forEach(function (m) { state.yearOpen[m.key] = all; });
        root.querySelectorAll("details.cal-month").forEach(function (d) { d.open = all; });
      }
    });
    root.addEventListener("toggle", function (ev) {
      var d = ev.target;
      if (d && d.matches && d.matches("details.cal-month")) state.yearOpen[d.getAttribute("data-key")] = d.open;
    }, true);

    render();
  }

  /* ---------- Home: current month, compact interactive calendar ---------- */
  function renderHome() {
    var box = document.getElementById("this-month");
    if (!box) return;
    var today = new Date();
    var todayKey = ymd(today);
    var key = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0");
    var m = MONTHS.filter(function (x) { return x.key === key; })[0];
    var title = document.getElementById("this-month-title");
    var toggle = document.getElementById("mini-month-toggle");
    var panel = document.getElementById("mini-cal");
    if (title) title.textContent = MON[today.getMonth()] + " " + today.getFullYear();
    if (!m || !toggle || !panel) return;

    var built = false;
    function entriesOn(dateStr) {
      return sorted(DATA.entries.filter(function (e) { return e.start <= dateStr && entryEnd(e) >= dateStr; }));
    }
    function build() {
      var first = toDate(m.first), last = toDate(m.last);
      var lead = (first.getDay() + 6) % 7; // Monday-first grid
      var html = '<div class="mini-dow" aria-hidden="true">' +
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(function (d) { return "<span>" + d + "</span>"; }).join("") + "</div>";
      html += '<div class="mini-grid" role="group" aria-label="' + esc(MON[m.month] + " " + m.year) + ' calendar">';
      for (var i = 0; i < lead; i++) html += '<span class="mini-blank" aria-hidden="true"></span>';
      for (var day = 1; day <= last.getDate(); day++) {
        var ds = m.year + "-" + String(m.month + 1).padStart(2, "0") + "-" + String(day).padStart(2, "0");
        var list = entriesOn(ds);
        var hasE = list.some(function (e) { return e.category === "Event"; });
        var hasH = list.some(function (e) { return e.category === "Holiday"; });
        var cls = "mini-day" + (hasE ? " has-event" : "") + (hasH ? " has-holiday" : "") + (ds === todayKey ? " is-today" : "");
        var label = day + " " + MON[m.month] + (list.length ? ", " + list.length + (list.length === 1 ? " entry" : " entries") : "");
        html += '<button type="button" class="' + cls + '" data-date="' + ds + '" aria-pressed="false" aria-label="' + esc(label) + '"><span>' + day + "</span></button>";
      }
      html += "</div>";
      html += '<p class="mini-legend"><span class="lg lg-event" aria-hidden="true"></span>Events &amp; Activities <span class="lg lg-holiday" aria-hidden="true"></span>Holidays &amp; Vacations</p>';
      html += '<div class="mini-detail" id="mini-detail" aria-live="polite"><p class="mini-hint">Select a date to see its details.</p></div>';
      panel.innerHTML = html;
      built = true;
    }
    function select(ds, btn) {
      panel.querySelectorAll(".mini-day").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      if (btn) btn.setAttribute("aria-pressed", "true");
      var detail = document.getElementById("mini-detail");
      if (!detail) return;
      var list = entriesOn(ds);
      var d = toDate(ds);
      var heading = '<p class="mini-date">' + d.getDate() + " " + MON[d.getMonth()] + " " + d.getFullYear() + "</p>";
      detail.innerHTML = heading + (list.length
        ? '<ul class="cal-list">' + list.map(itemHtml).join("") + "</ul>"
        : '<p class="mini-hint">No event or holiday on this date.</p>');
    }
    toggle.addEventListener("click", function () {
      var willOpen = panel.hidden;
      if (willOpen && !built) build();
      panel.hidden = !willOpen;
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
    panel.addEventListener("click", function (ev) {
      var b = ev.target.closest(".mini-day");
      if (b) select(b.getAttribute("data-date"), b);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderFullPage();
    renderHome();
    Promise.resolve(window.MGGS_CMS_READY).then(function (c) {
      if (c && c.calendar && c.calendar.length) {
        DATA.entries = c.calendar;
        renderFullPage();
        renderHome();
      }
    });
  });
})();
