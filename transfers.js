/* ═══════════════════════════════════════════════════════════════════════════
   VMS TRANSFERS & SIGNINGS
   • Team owners send signing / transfer requests with a shared owner code.
   • For a transfer, the team that currently has the driver must accept first.
   • FIA officials (shared FIA code) approve, reject or ask for changes.
   • Approved moves show in a public Transfer Log.
   • Drivers sign up publicly (Driver Sign-Up tab); an FIA official then sets each driver's price.
   Fully separate from app.js. Needs firebase-config.js + Firestore (see TRANSFERS-SETUP.md).
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var root = document.getElementById('view-transfers');
  if (!root) return;

  var SDK = 'https://www.gstatic.com/firebasejs/10.14.1/'; /* same version the Driver of the Day code in app.js uses */
  var cfg = window.VMS_FIREBASE || {};
  var configured = !!(cfg.apiKey && cfg.projectId && cfg.appId);

  var SERIES = ['f1', 'f2', 'f3'];
  var SNAME = { f1: 'Formula 1', f2: 'Formula 2', f3: 'Formula 3' };
  var STATUS = {
    awaiting_team:     ['Awaiting other team', 'amber'],
    pending_fia:       ['Awaiting FIA', 'blue'],
    approved:          ['Approved', 'green'],
    rejected:          ['Rejected by FIA', 'red'],
    declined:          ['Declined by team', 'red'],
    changes_requested: ['Changes requested', 'amber'],
    withdrawn:         ['Withdrawn', 'grey']
  };
  var ACTION = {
    submitted: 'submitted the request', accepted: 'accepted the transfer', declined: 'declined the transfer',
    withdrawn: 'withdrew the request', approved: 'approved', rejected: 'rejected',
    changes_requested: 'asked for changes', resubmitted: 'edited and resubmitted'
  };

  function pref(k, v) {
    try { if (v === undefined) return localStorage.getItem('vms_tr_' + k) || ''; localStorage.setItem('vms_tr_' + k, v); } catch (e) {}
    return '';
  }
  function blankForm() { return { type: 'transfer', from: '', driver: '', effective: '', notes: '' }; }

  var S = {
    tab: 'log', lineups: null, connecting: configured, restoring: false, loadErr: '', logErr: '',
    uid: null, role: null, locked: null, code: null,
    all: [], approved: [], logSeries: 'all',
    team: pref('team'), name: pref('name'),
    form: blankForm(), editId: null, busy: false,
    signups: [], suErr: '', suSeries: 'all', su: { name: '', series: 'f1', notes: '' }, suBusy: false
  };
  var db = null, fa = null, FV = null, unsubAll = null, unsubLog = null, unsubSU = null, msgTimer = null;

  /* ───────── tiny helpers ───────── */
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function ms(t) { return t && t.toMillis ? t.toMillis() : (typeof t === 'number' ? t : Date.now()); }
  function fmt(t) {
    return new Date(ms(t)).toLocaleString('en-CA', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
  }
  function fmtDay(t) { return new Date(ms(t)).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }); }
  function fail(msg) { var e = new Error(msg); e.friendly = true; return e; }
  function flash(text, kind) {
    var b = $('trMsg'); if (!b) return;
    b.className = 'tr-msg ' + (kind || 'ok'); b.textContent = text; b.style.display = text ? 'block' : 'none';
    clearTimeout(msgTimer);
    if (text) msgTimer = setTimeout(function () { b.style.display = 'none'; }, 7000);
  }
  function niceError(e) {
    if (e && e.friendly) return e.message;
    var c = e && e.code || '';
    if (c === 'permission-denied') return 'Not allowed. That code may have been removed, or the request has already moved on — refresh and try again.';
    if (c === 'unavailable') return 'Can’t reach the server right now. Check your connection and try again.';
    return 'Something went wrong' + (e && e.message ? ' (' + e.message + ')' : '') + '.';
  }

  /* ───────── lineups → team + driver lists ───────── */
  function teamsOf(s) { return ((S.lineups || {})[s] || []); }
  function allTeams() {
    var out = [];
    SERIES.forEach(function (s) {
      teamsOf(s).forEach(function (t) {
        out.push({ series: s, name: t.name, drivers: (t.drivers || []).map(function (d) { return d.name; }) });
      });
    });
    return out;
  }
  function teamInfo(name) { return allTeams().filter(function (t) { return t.name === name; })[0] || null; }
  function teamSelectHTML(id, sel, exclude, placeholder, attrs) {
    var h = '<select id="' + id + '" ' + (attrs || '') + '><option value="">' + esc(placeholder) + '</option>';
    SERIES.forEach(function (s) {
      var list = teamsOf(s).filter(function (t) { return t.name !== exclude; });
      if (!list.length) return;
      h += '<optgroup label="' + esc(SNAME[s]) + '">' + list.map(function (t) {
        return '<option value="' + esc(t.name) + '"' + (t.name === sel ? ' selected' : '') + '>' + esc(t.name) + '</option>';
      }).join('') + '</optgroup>';
    });
    return h + '</select>';
  }

  /* ───────── Firebase ───────── */
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = src; s.onload = res;
      s.onerror = function () { rej(new Error('Couldn’t load ' + src)); };
      document.head.appendChild(s);
    });
  }
  function initFirebase() {
    var ready = (window.firebase && firebase.firestore && firebase.auth)
      ? Promise.resolve()
      : loadScript(SDK + 'firebase-app-compat.js')
          .then(function () { return loadScript(SDK + 'firebase-auth-compat.js'); })
          .then(function () { return loadScript(SDK + 'firebase-firestore-compat.js'); });
    return ready.then(function () {
      /* The site's Driver of the Day code (app.js) runs its own Firebase project on this same page and may load
         its own copy of the SDK at any moment. So: use a NAMED app for transfers (never the default one), and keep
         hold of this copy's objects now instead of looking up the global `firebase` again later. */
      var sdk = window.firebase, app;
      try { app = sdk.app('vms-transfers'); } catch (e) { app = sdk.initializeApp(cfg, 'vms-transfers'); }
      db = app.firestore(); fa = app.auth(); FV = sdk.firestore.FieldValue;
    });
  }
  function stamp() { return FV.serverTimestamp(); }

  function startLogListener() {
    unsubLog = db.collection('requests').where('status', '==', 'approved').onSnapshot(function (snap) {
      S.approved = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); });
      S.logErr = ''; paintLog();
    }, function () {
      S.logErr = 'Couldn’t load the transfer log right now.'; paintLog();
    });
  }
  function startSignupListener() {
    unsubSU = db.collection('signups').onSnapshot(function (snap) {
      S.signups = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); });
      S.suErr = ''; paintSignupForm(); paintSignupList();
    }, function () {
      S.suErr = 'Couldn’t load the driver sign-ups right now.'; paintSignupList();
    });
  }
  function startPortalListener() {
    stopPortalListener();
    unsubAll = db.collection('requests').onSnapshot(function (snap) {
      S.all = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); });
      paintLog(); paintLists();
    }, function (err) {
      if (err && err.code === 'permission-denied') dropAccess('Your access was removed. Enter a new code.');
      else flash('Lost connection to the server. Refresh the page.', 'err');
    });
  }
  function stopPortalListener() { if (unsubAll) { unsubAll(); unsubAll = null; } S.all = []; }

  function setRole(code, data) {
    S.code = code; S.role = data.role; S.locked = data.team || null;
    if (S.locked) { S.team = S.locked; pref('team', S.team); }
    S.form = blankForm(); S.editId = null;
    startPortalListener(); paintPortal(); paintLog();
  }
  function restore() {
    if (S.role || S.restoring || !S.uid) return;
    S.restoring = true;
    db.collection('sessions').doc(S.uid).get().then(function (s) {
      if (!s.exists) return null;
      var code = s.data().code;
      return db.collection('codes').doc(code).get().then(function (c) { return c.exists ? { code: code, data: c.data() } : null; });
    }).then(function (r) {
      S.restoring = false; S.connecting = false;
      if (r && !S.role && (r.data.role === 'owner' || r.data.role === 'official')) setRole(r.code, r.data); else paintPortal();
    }).catch(function () { S.restoring = false; S.connecting = false; paintPortal(); });
  }
  function enterCode(raw) {
    var code = String(raw || '').replace(/\s+/g, '').toUpperCase();
    if (!/^[A-Z0-9-]{8,64}$/.test(code)) return Promise.reject(fail('That doesn’t look like a valid code. Check it and try again.'));
    var step = fa.currentUser ? Promise.resolve(fa.currentUser) : fa.signInAnonymously().then(function (c) { return c.user; });
    return step.then(function (u) {
      S.uid = u.uid;
      return db.collection('codes').doc(code).get();
    }).then(function (c) {
      if (!c.exists) throw fail('Code not recognised.');
      var d = c.data();
      if (d.role !== 'owner' && d.role !== 'official') throw fail('That code isn’t set up properly — ask the league admin.');
      return db.collection('sessions').doc(S.uid).set({ code: code }).then(function () { setRole(code, d); });
    });
  }
  function dropAccess(text) {
    stopPortalListener();
    S.role = null; S.code = null; S.locked = null;
    try { if (S.uid) db.collection('sessions').doc(S.uid).delete().catch(function () {}); } catch (e) {}
    paintPortal(); paintLog(); flash(text, 'err');
  }
  function signOut() {
    stopPortalListener();
    var p = S.uid ? db.collection('sessions').doc(S.uid).delete().catch(function () {}) : Promise.resolve();
    S.role = null; S.code = null; S.locked = null; S.editId = null; S.form = blankForm();
    return p.then(function () { paintPortal(); paintLog(); });
  }

  /* ───────── actions on requests ───────── */
  function needName() {
    if (!S.name.trim()) { flash('Type your name first — it’s shown on every action you take.', 'err'); var n = $('trName'); if (n) n.focus(); return false; }
    return true;
  }
  function hist(action, comment) {
    return { at: Date.now(), by: S.name.trim().slice(0, 40), role: S.role, team: S.role === 'owner' ? (S.team || null) : null, action: action, comment: String(comment || '').trim().slice(0, 500) };
  }
  function change(id, status, action, comment, extra) {
    var up = Object.assign({}, extra || {}, { status: status, updatedAt: stamp(), history: FV.arrayUnion(hist(action, comment)) });
    return db.collection('requests').doc(id).update(up);
  }
  function validateForm(f, type) {
    if (!S.team) return 'Choose your team first.';
    if (type === 'transfer') {
      if (!f.from) return 'Pick the driver’s current team.';
      if (f.from === S.team) return 'The driver is already on your team.';
    }
    if (!f.driver.trim()) return type === 'transfer' ? 'Pick the driver.' : 'Enter the driver’s name.';
    if (f.driver.trim().length > 60) return 'Driver name is too long.';
    if (f.effective.length > 80) return 'Keep “effective from” under 80 characters.';
    if (f.notes.length > 600) return 'Keep notes under 600 characters.';
    return '';
  }
  function submitForm() {
    if (!needName()) return;
    var f = S.form, ed = S.editId ? S.all.filter(function (r) { return r.id === S.editId; })[0] : null;
    var type = ed ? ed.type : f.type;
    var bad = validateForm(f, type); if (bad) { flash(bad, 'err'); return; }
    var fields = { driver: f.driver.trim(), fromTeam: type === 'transfer' ? f.from : null, effective: f.effective.trim(), notes: f.notes.trim() };
    S.busy = true; paintForm();
    var job;
    if (ed) {
      job = change(ed.id, type === 'transfer' ? 'awaiting_team' : 'pending_fia', 'resubmitted', '', fields);
    } else {
      var info = teamInfo(S.team);
      job = db.collection('requests').add({
        type: type, series: info ? info.series : 'f1', driver: fields.driver, fromTeam: fields.fromTeam, toTeam: S.team,
        effective: fields.effective, notes: fields.notes, requesterName: S.name.trim().slice(0, 40),
        status: type === 'transfer' ? 'awaiting_team' : 'pending_fia', createdAt: stamp(), updatedAt: stamp(), history: [hist('submitted', '')]
      });
    }
    job.then(function () {
      flash(ed ? 'Resubmitted.' : (type === 'transfer' ? 'Request sent to ' + f.from + ' for their answer.' : 'Request sent to the FIA.'), 'ok');
      S.form = blankForm(); S.form.type = type; S.editId = null;
    }).catch(function (e) { flash(niceError(e), 'err'); }).then(function () { S.busy = false; paintForm(); });
  }
  /* ───────── driver sign-ups ───────── */
  function myPrice(p) { return '$' + Number(p).toFixed(1) + 'M'; }
  function mySignup() { return S.uid ? S.signups.filter(function (x) { return x.id === S.uid; })[0] || null : null; }
  function submitSignup() {
    var f = S.su, name = f.name.trim();
    if (!name) { flash('Enter your driver name.', 'err'); return; }
    if (name.length > 60) { flash('Driver name is too long.', 'err'); return; }
    if (f.notes.length > 400) { flash('Keep the note under 400 characters.', 'err'); return; }
    S.suBusy = true; paintSignupForm();
    var step = fa.currentUser ? Promise.resolve(fa.currentUser) : fa.signInAnonymously().then(function (c) { return c.user; });
    step.then(function (u) {
      S.uid = u.uid;
      return db.collection('signups').doc(u.uid).set({ name: name, series: f.series, notes: f.notes.trim(), status: 'open', price: null, createdAt: stamp() });
    }).then(function () {
      flash('You’re signed up! The FIA will set your price.', 'ok'); S.su = { name: '', series: f.series, notes: '' };
    }).catch(function (e) {
      flash(e && e.code === 'permission-denied' ? 'You’ve already signed up from this browser, or the sign-up couldn’t be saved.' : niceError(e), 'err');
    }).then(function () { S.suBusy = false; paintSignupForm(); paintSignupList(); });
  }
  function setPrice(id) {
    if (!S.name.trim()) { flash('Type your name in the Owner / FIA Portal tab first — it’s recorded with the price.', 'err'); return; }
    var inp = root.querySelector('[data-k="p-' + id + '"]'), v = inp ? parseFloat(inp.value) : NaN;
    if (!(v > 0 && v <= 500)) { flash('Enter a price between 0.1 and 500 (in $M).', 'err'); if (inp) inp.focus(); return; }
    v = Math.round(v * 10) / 10;
    db.collection('signups').doc(id).update({ price: v, status: 'priced', pricedBy: S.name.trim().slice(0, 40), pricedAt: stamp() })
      .then(function () { flash('Price set to ' + myPrice(v) + '.', 'ok'); })
      .catch(function (e) { flash(niceError(e), 'err'); });
  }
  function removeSignup(id) {
    if (!window.confirm('Remove this sign-up?')) return;
    db.collection('signups').doc(id).delete().then(function () { flash('Sign-up removed.', 'ok'); }).catch(function (e) { flash(niceError(e), 'err'); });
  }
  function paintSignupForm() {
    var b = $('trSuForm'); if (!b) return;
    if (!configured) { b.innerHTML = ''; return; }
    var mine = mySignup();
    if (mine) {
      b.innerHTML = '<div class="tr-card"><h3>You’re signed up</h3><p class="tr-help"><b>' + esc(mine.name) + '</b> · ' + esc(SNAME[mine.series] || '') + ' · ' +
        (mine.status === 'priced' ? 'price set by the FIA: <b>' + esc(myPrice(mine.price)) + '</b>.' : 'waiting for the FIA to set your price.') + '</p>' +
        (mine.status === 'priced' ? '' : '<div class="tr-actions"><button type="button" class="btn alt" data-a="removesu" data-id="' + esc(mine.id) + '">Withdraw sign-up</button></div>') + '</div>';
      return;
    }
    var f = S.su;
    b.innerHTML = '<div class="tr-card"><h3>Driver sign-up</h3><p class="tr-help">Want to race in VMS? Sign up here. An FIA official will set your <b>price</b>, then team owners can sign you.</p><div class="tr-formgrid">' +
      '<label class="tr-f">Driver name<input data-s="name" maxlength="60" value="' + esc(f.name) + '" placeholder="Your racing name"></label>' +
      '<label class="tr-f">Series<select data-s="series">' + SERIES.map(function (s) { return '<option value="' + s + '"' + (s === f.series ? ' selected' : '') + '>' + esc(SNAME[s]) + '</option>'; }).join('') + '</select></label>' +
      '<label class="tr-f wide">About you <small>(optional)</small><textarea data-s="notes" maxlength="400" rows="3" placeholder="Experience, past teams, Discord name…">' + esc(f.notes) + '</textarea></label></div>' +
      '<div class="tr-actions"><button type="button" class="btn" data-a="submitsu"' + (S.suBusy ? ' disabled' : '') + '>' + (S.suBusy ? 'Signing up…' : 'Sign up') + '</button></div></div>';
  }
  function paintSignupList() {
    var b = $('trSuList'); if (!b) return;
    if (!configured) { b.innerHTML = notice('The transfer system isn’t connected yet.'); return; }
    if (S.suErr) { b.innerHTML = notice(esc(S.suErr)); return; }
    var kept = grabInputs(), isFia = S.role === 'official';
    var tabs = '<div class="tabs">' + [['all', 'All']].concat(SERIES.map(function (s) { return [s, s.toUpperCase()]; })).map(function (p) {
      return '<button type="button" class="tab ' + (S.suSeries === p[0] ? 'on' : '') + '" data-a="suSeries" data-v="' + p[0] + '">' + p[1] + '</button>';
    }).join('') + '</div>';
    var list = S.signups.filter(function (r) { return S.suSeries === 'all' || r.series === S.suSeries; }).sort(function (a, c) { return ms(c.createdAt) - ms(a.createdAt); });
    var cards = list.map(function (r) {
      var priced = r.status === 'priced';
      var ctl = '';
      if (isFia) {
        ctl = '<div class="tr-decide"><div class="tr-setprice"><input type="number" inputmode="decimal" step="0.1" min="0.1" max="500" data-k="p-' + esc(r.id) + '" placeholder="Price in $M" value="' + (priced ? esc(r.price) : '') + '">' +
          '<button type="button" class="btn" data-a="setprice" data-id="' + esc(r.id) + '">' + (priced ? 'Update price' : 'Set price') + '</button>' +
          '<button type="button" class="btn alt danger" data-a="removesu" data-id="' + esc(r.id) + '">Remove</button></div></div>';
      }
      return '<div class="tr-item"><div class="tr-top"><span class="tr-series">' + esc((r.series || '').toUpperCase()) + '</span>' +
        '<span class="tr-chip c-' + (priced ? 'green' : 'amber') + '">' + (priced ? 'Priced' : 'Awaiting price') + '</span></div>' +
        '<div class="tr-driver">' + esc(r.name) + '</div>' +
        (r.notes ? '<div class="tr-notes">' + esc(r.notes) + '</div>' : '') +
        (priced ? '<div class="tr-price"><small>Price</small>' + esc(myPrice(r.price)) + '</div>' : '') +
        '<div class="tr-meta">Signed up ' + esc(fmtDay(r.createdAt)) + (priced && r.pricedBy ? ' · priced by ' + esc(r.pricedBy) : '') + '</div>' + ctl + '</div>';
    }).join('');
    b.innerHTML = tabs + (list.length ? '<div class="tr-grid">' + cards + '</div>' : '<div class="empty">No drivers have signed up yet.</div>');
    putInputs(kept);
  }
  function decide(id, status, action, needReason) {
    if (!needName()) return;
    var ta = root.querySelector('[data-k="c-' + id + '"]'), comment = ta ? ta.value.trim() : '';
    if (needReason && !comment) { flash('Write a short reason for the team first.', 'err'); if (ta) ta.focus(); return; }
    change(id, status, action, comment).then(function () { flash('Done.', 'ok'); }).catch(function (e) { flash(niceError(e), 'err'); });
  }

  /* ───────── view pieces ───────── */
  function chip(st) { var s = STATUS[st] || [st, 'grey']; return '<span class="tr-chip c-' + s[1] + '">' + esc(s[0]) + '</span>'; }
  function moveHTML(r) {
    return r.type === 'transfer'
      ? '<span class="tr-from">' + esc(r.fromTeam) + '</span><i>→</i><b>' + esc(r.toTeam) + '</b>'
      : '<i>Signs for</i> <b>' + esc(r.toTeam) + '</b>';
  }
  function histHTML(r) {
    var h = (r.history || []).map(function (e) {
      var who = esc(e.by || '?') + ' <small>(' + (e.role === 'official' ? 'FIA' : esc(e.team || 'team owner')) + ')</small>';
      return '<li><span>' + esc(fmt(e.at)) + '</span> ' + who + ' ' + esc(ACTION[e.action] || e.action) + (e.comment ? ' — “' + esc(e.comment) + '”' : '') + '</li>';
    }).join('');
    return '<details class="tr-hist"><summary>History</summary><ol>' + h + '</ol></details>';
  }
  function reqCard(r, actions) {
    return '<div class="tr-item" data-id="' + esc(r.id) + '">' +
      '<div class="tr-top"><span class="tr-type">' + (r.type === 'transfer' ? 'Transfer' : 'Signing') + '</span><span class="tr-series">' + esc((r.series || '').toUpperCase()) + '</span>' + chip(r.status) + '</div>' +
      '<div class="tr-driver">' + esc(r.driver) + '</div><div class="tr-move">' + moveHTML(r) + '</div>' +
      (r.effective ? '<div class="tr-meta"><span>Effective</span> ' + esc(r.effective) + '</div>' : '') +
      (r.notes ? '<div class="tr-notes">' + esc(r.notes) + '</div>' : '') +
      '<div class="tr-meta">Requested by ' + esc(r.requesterName) + ' · ' + esc(fmt(r.createdAt)) + '</div>' +
      histHTML(r) + (actions || '') + '</div>';
  }
  function byNewest(a, b) { return ms(b.updatedAt) - ms(a.updatedAt); }
  function notice(t) { return '<div class="tr-note">' + t + '</div>'; }

  /* keep half-typed comments when a live update repaints a list */
  function grabInputs() {
    var m = {}; Array.prototype.forEach.call(root.querySelectorAll('[data-k]'), function (n) { if (n.value) m[n.getAttribute('data-k')] = n.value; }); return m;
  }
  function putInputs(m) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-k]'), function (n) { var v = m[n.getAttribute('data-k')]; if (v != null) n.value = v; });
  }

  /* ───────── painting ───────── */
  function build() {
    root.innerHTML =
      '<div class="page-hero"><div class="section-head"><div><div class="title">Transfers &amp; <span class="yellow">Signings</span></div><div class="line"></div></div><span class="sub">Owner requests · FIA approved</span></div></div>' +
      '<section class="st-subwrap"><nav class="st-sub" id="trSub" aria-label="Transfers sections"><button type="button" data-a="tab" data-v="log" class="on">Transfer Log</button><button type="button" data-a="tab" data-v="signup">Driver Sign-Up</button><button type="button" data-a="tab" data-v="portal">Owner / FIA Portal</button></nav></section>' +
      '<section class="tr-wrap"><div id="trMsg" class="tr-msg" style="display:none"></div><div id="trPaneLog" class="tr-pane on"></div>' +
      '<div id="trPaneSignup" class="tr-pane"><div id="trSuForm"></div><div id="trSuList"></div></div><div id="trPanePortal" class="tr-pane"></div></section>';
    paintLog(); paintPortal(); paintSignupForm(); paintSignupList();
  }
  function setTab(t) {
    S.tab = t;
    Array.prototype.forEach.call(root.querySelectorAll('#trSub button'), function (b) { b.classList.toggle('on', b.getAttribute('data-v') === t); });
    $('trPaneLog').classList.toggle('on', t === 'log'); $('trPaneSignup').classList.toggle('on', t === 'signup'); $('trPanePortal').classList.toggle('on', t === 'portal');
  }

  function paintLog() {
    paintSignupList();
    var box = $('trPaneLog'); if (!box) return;
    if (!configured) { box.innerHTML = notice('The transfer system isn’t connected yet. Approved signings and transfers will appear here.'); return; }
    if (S.logErr && !S.role) { box.innerHTML = notice(esc(S.logErr)); return; }
    var src = S.role ? S.all.filter(function (r) { return r.status === 'approved'; }) : S.approved;
    var list = src.filter(function (r) { return S.logSeries === 'all' || r.series === S.logSeries; }).sort(byNewest);
    var tabs = '<div class="tabs">' + [['all', 'All']].concat(SERIES.map(function (s) { return [s, s.toUpperCase()]; })).map(function (p) {
      return '<button type="button" class="tab ' + (S.logSeries === p[0] ? 'on' : '') + '" data-a="logSeries" data-v="' + p[0] + '">' + p[1] + '</button>';
    }).join('') + '</div>';
    var cards = list.map(function (r) {
      return '<div class="tr-item tr-pub"><div class="tr-top"><span class="tr-type">' + (r.type === 'transfer' ? 'Transfer' : 'Signing') + '</span><span class="tr-series">' + esc((r.series || '').toUpperCase()) + '</span><span class="tr-date">' + esc(fmtDay(r.updatedAt)) + '</span></div>' +
        '<div class="tr-driver">' + esc(r.driver) + '</div><div class="tr-move">' + moveHTML(r) + '</div>' +
        (r.effective ? '<div class="tr-meta"><span>Effective</span> ' + esc(r.effective) + '</div>' : '') + '</div>';
    }).join('');
    box.innerHTML = tabs + (list.length ? '<div class="tr-grid">' + cards + '</div>' : '<div class="empty">No approved signings or transfers yet.</div>');
  }

  function paintPortal() {
    var box = $('trPanePortal'); if (!box) return;
    if (!configured) { box.innerHTML = notice('The transfer system isn’t connected yet. The league admin needs to finish the Firebase setup (see TRANSFERS-SETUP.md).'); return; }
    if (S.loadErr) { box.innerHTML = notice(esc(S.loadErr)); return; }
    if (S.connecting) { box.innerHTML = notice('Connecting…'); return; }
    if (!S.role) {
      box.innerHTML = '<form class="tr-card tr-code" id="trCodeForm" autocomplete="off"><h3>Enter your access code</h3>' +
        '<p class="tr-help">Team owners use the owner code, FIA officials use the FIA code. Ask the league admin if you don’t have one.</p>' +
        '<div class="tr-row"><input id="trCode" type="password" placeholder="Access code" autocomplete="off" spellcheck="false" maxlength="64"><button class="btn" type="submit">Continue</button></div></form>';
      return;
    }
    box.innerHTML =
      '<div class="tr-bar"><span>Signed in as <b>' + (S.role === 'owner' ? 'Team owner' : 'FIA official') + '</b></span><button type="button" class="tr-link" data-a="signout">Sign out</button></div>' +
      '<div id="trIdent"></div>' +
      (S.role === 'owner' ? '<div id="trNeeds"></div><div id="trForm"></div><div id="trMine"></div>' : '<div id="trQueue"></div>');
    paintIdent(); paintForm(); paintLists();
  }

  function paintIdent() {
    var b = $('trIdent'); if (!b) return;
    var team = '';
    if (S.role === 'owner') {
      team = '<label class="tr-f">Acting as team' + (S.locked
        ? '<div class="tr-locked">' + esc(S.locked) + '</div>'
        : teamSelectHTML('trTeam', S.team, '', 'Choose your team')) + '</label>';
    }
    b.innerHTML = '<div class="tr-ident">' + team + '<label class="tr-f">Your name<input id="trName" maxlength="40" value="' + esc(S.name) + '" placeholder="Shown on everything you do"></label></div>';
  }

  function paintForm() {
    var b = $('trForm'); if (!b || S.role !== 'owner') return;
    if (!S.team) { b.innerHTML = notice('Choose your team above to send a request.'); return; }
    var f = S.form, ed = S.editId ? S.all.filter(function (r) { return r.id === S.editId; })[0] : null;
    if (S.editId && !ed) { S.editId = null; S.form = f = blankForm(); }
    var tr = (ed ? ed.type : f.type) === 'transfer';
    var h = '<div class="tr-card"><h3>' + (ed ? 'Edit &amp; resubmit' : 'New request') + '</h3>';
    if (!ed) {
      h += '<div class="tabs"><button type="button" class="tab ' + (tr ? 'on' : '') + '" data-a="ftype" data-v="transfer">Transfer</button>' +
           '<button type="button" class="tab ' + (!tr ? 'on' : '') + '" data-a="ftype" data-v="signing">Signing</button></div>';
    }
    h += '<p class="tr-help">' + (tr
      ? 'Ask to bring a driver to <b>' + esc(S.team) + '</b> from another team. The driver’s current team answers first, then the FIA decides.'
      : 'Sign a driver for <b>' + esc(S.team) + '</b>. This goes straight to the FIA.') + '</p><div class="tr-formgrid">';
    if (tr) {
      var info = teamInfo(f.from), drivers = info ? info.drivers : [];
      h += '<label class="tr-f">Driver’s current team' + teamSelectHTML('trFrom', f.from, S.team, 'Choose a team', 'data-f="from"') + '</label>';
      if (drivers.length) {
        h += '<label class="tr-f">Driver<select data-f="driver"><option value="">Choose a driver</option>' + drivers.map(function (d) {
          return '<option value="' + esc(d) + '"' + (d === f.driver ? ' selected' : '') + '>' + esc(d) + '</option>';
        }).join('') + '</select></label>';
      } else {
        h += '<label class="tr-f">Driver<input data-f="driver" maxlength="60" value="' + esc(f.driver) + '" placeholder="Driver name"></label>';
      }
    } else {
      h += '<label class="tr-f">Driver<input data-f="driver" maxlength="60" value="' + esc(f.driver) + '" placeholder="Driver name"></label>';
    }
    h += '<label class="tr-f">Effective from <small>(optional)</small><input data-f="effective" maxlength="80" value="' + esc(f.effective) + '" placeholder="e.g. before Round 8"></label>' +
         '<label class="tr-f wide">Notes <small>(optional)</small><textarea data-f="notes" maxlength="600" rows="3" placeholder="Anything the other team or the FIA should know">' + esc(f.notes) + '</textarea></label></div>' +
         '<div class="tr-actions"><button type="button" class="btn" data-a="submit"' + (S.busy ? ' disabled' : '') + '>' + (S.busy ? 'Sending…' : (ed ? 'Resubmit' : 'Send request')) + '</button>' +
         (ed ? '<button type="button" class="btn alt" data-a="cancelEdit">Cancel</button>' : '') + '</div></div>';
    b.innerHTML = h;
  }

  function paintLists() {
    var kept = grabInputs();
    if (S.role === 'owner') {
      var needs = $('trNeeds'), mine = $('trMine'); if (!needs || !mine) return;
      var team = S.team;
      var need = team ? S.all.filter(function (r) { return r.status === 'awaiting_team' && r.type === 'transfer' && r.fromTeam === team; }).sort(byNewest) : [];
      needs.innerHTML = need.length ? '<h3 class="tr-h">Needs your answer <span class="tr-count">' + need.length + '</span></h3><div class="tr-stack">' + need.map(function (r) {
        return reqCard(r, '<div class="tr-decide"><div class="tr-ask">' + esc(r.toTeam) + ' wants <b>' + esc(r.driver) + '</b> to leave your team.</div>' +
          '<textarea data-k="c-' + esc(r.id) + '" rows="2" maxlength="500" placeholder="Optional message"></textarea>' +
          '<div class="tr-actions"><button type="button" class="btn" data-a="accept" data-id="' + esc(r.id) + '">Accept</button><button type="button" class="btn alt" data-a="decline" data-id="' + esc(r.id) + '">Decline</button></div></div>');
      }).join('') + '</div>' : '';
      var needIds = {}; need.forEach(function (r) { needIds[r.id] = 1; });
      var list = team ? S.all.filter(function (r) { return (r.toTeam === team || r.fromTeam === team) && !needIds[r.id]; }).sort(byNewest) : [];
      mine.innerHTML = team ? '<h3 class="tr-h">Your team’s requests</h3>' + (list.length ? '<div class="tr-stack">' + list.map(function (r) {
        var open = r.status === 'awaiting_team' || r.status === 'pending_fia' || r.status === 'changes_requested';
        var mineReq = r.toTeam === team, a = '';
        if (r.status === 'changes_requested' && mineReq) a += '<button type="button" class="btn" data-a="edit" data-id="' + esc(r.id) + '">Edit &amp; resubmit</button>';
        if (open && mineReq) a += '<button type="button" class="btn alt" data-a="withdraw" data-id="' + esc(r.id) + '">Withdraw</button>';
        var last = (r.history || [])[(r.history || []).length - 1];
        var why = (r.status === 'changes_requested' || r.status === 'rejected' || r.status === 'declined') && last && last.comment ? '<div class="tr-why">“' + esc(last.comment) + '” — ' + esc(last.by || '') + '</div>' : '';
        return reqCard(r, why + (a ? '<div class="tr-actions">' + a + '</div>' : ''));
      }).join('') + '</div>' : '<div class="empty">No requests for your team yet.</div>') : '';
    } else if (S.role === 'official') {
      var q = $('trQueue'); if (!q) return;
      var pend = S.all.filter(function (r) { return r.status === 'pending_fia'; }).sort(function (a, b) { return ms(a.updatedAt) - ms(b.updatedAt); });
      var wait = S.all.filter(function (r) { return r.status === 'awaiting_team' || r.status === 'changes_requested'; }).sort(byNewest);
      var done = S.all.filter(function (r) { return ['approved', 'rejected', 'declined', 'withdrawn'].indexOf(r.status) > -1; }).sort(byNewest).slice(0, 20);
      q.innerHTML =
        '<h3 class="tr-h">Waiting for the FIA <span class="tr-count">' + pend.length + '</span></h3>' +
        (pend.length ? '<div class="tr-stack">' + pend.map(function (r) {
          return reqCard(r, '<div class="tr-decide"><textarea data-k="c-' + esc(r.id) + '" rows="2" maxlength="500" placeholder="Comment for the team (required to reject or ask for changes)"></textarea>' +
            '<div class="tr-actions"><button type="button" class="btn" data-a="approve" data-id="' + esc(r.id) + '">Approve</button>' +
            '<button type="button" class="btn alt" data-a="changes" data-id="' + esc(r.id) + '">Ask for changes</button>' +
            '<button type="button" class="btn alt danger" data-a="reject" data-id="' + esc(r.id) + '">Reject</button></div></div>');
        }).join('') + '</div>' : '<div class="empty">Nothing waiting — you’re all caught up.</div>') +
        (wait.length ? '<h3 class="tr-h">With the teams <span class="tr-count">' + wait.length + '</span></h3><div class="tr-stack">' + wait.map(function (r) { return reqCard(r, ''); }).join('') + '</div>' : '') +
        (done.length ? '<h3 class="tr-h">Recently closed</h3><div class="tr-stack">' + done.map(function (r) { return reqCard(r, ''); }).join('') + '</div>' : '');
    }
    putInputs(kept);
  }

  /* ───────── events ───────── */
  root.addEventListener('click', function (e) {
    var t = e.target.closest('[data-a]'); if (!t || !root.contains(t)) return;
    var a = t.getAttribute('data-a'), id = t.getAttribute('data-id'), v = t.getAttribute('data-v');
    if (a === 'tab') setTab(v);
    else if (a === 'logSeries') { S.logSeries = v; paintLog(); }
    else if (a === 'signout') signOut();
    else if (a === 'submitsu') submitSignup();
    else if (a === 'setprice') setPrice(id);
    else if (a === 'removesu') removeSignup(id);
    else if (a === 'suSeries') { S.suSeries = v; paintSignupList(); }
    else if (a === 'ftype') { S.form.type = v; S.form.from = ''; S.form.driver = ''; paintForm(); }
    else if (a === 'submit') submitForm();
    else if (a === 'cancelEdit') { S.editId = null; S.form = blankForm(); paintForm(); }
    else if (a === 'edit') {
      var r = S.all.filter(function (x) { return x.id === id; })[0]; if (!r) return;
      S.editId = id; S.form = { type: r.type, from: r.fromTeam || '', driver: r.driver, effective: r.effective || '', notes: r.notes || '' };
      paintForm(); var fb = $('trForm'); if (fb && fb.scrollIntoView) fb.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (a === 'withdraw') { if (needName()) change(id, 'withdrawn', 'withdrawn', '').then(function () { flash('Request withdrawn.', 'ok'); }).catch(function (er) { flash(niceError(er), 'err'); }); }
    else if (a === 'accept') decide(id, 'pending_fia', 'accepted', false);
    else if (a === 'decline') decide(id, 'declined', 'declined', false);
    else if (a === 'approve') decide(id, 'approved', 'approved', false);
    else if (a === 'changes') decide(id, 'changes_requested', 'changes_requested', true);
    else if (a === 'reject') decide(id, 'rejected', 'rejected', true);
  });
  root.addEventListener('submit', function (e) {
    if (e.target.id !== 'trCodeForm') return;
    e.preventDefault();
    var inp = $('trCode'), btn = e.target.querySelector('button'); btn.disabled = true;
    enterCode(inp.value).catch(function (er) { flash(niceError(er), 'err'); var c = $('trCode'); if (c) { c.value = ''; c.focus(); } }).then(function () { if (btn) btn.disabled = false; });
  });
  root.addEventListener('input', function (e) {
    var t = e.target;
    if (t.id === 'trName') { S.name = t.value; pref('name', S.name); }
    else if (t.getAttribute && t.getAttribute('data-s')) S.su[t.getAttribute('data-s')] = t.value;
    else if (t.getAttribute && t.getAttribute('data-f') && t.getAttribute('data-f') !== 'from') S.form[t.getAttribute('data-f')] = t.value;
  });
  root.addEventListener('change', function (e) {
    var t = e.target;
    if (t.getAttribute && t.getAttribute('data-s')) S.su[t.getAttribute('data-s')] = t.value;
    else if (t.id === 'trTeam') { S.team = t.value; pref('team', S.team); S.form.from = ''; S.form.driver = ''; paintForm(); paintLists(); }
    else if (t.getAttribute && t.getAttribute('data-f') === 'from') { S.form.from = t.value; S.form.driver = ''; paintForm(); }
    else if (t.getAttribute && t.getAttribute('data-f')) S.form[t.getAttribute('data-f')] = t.value;
  });

  /* ───────── start ───────── */
  build();
  var lineupsReady = window.VMS_LINEUPS ? Promise.resolve(window.VMS_LINEUPS)
    : fetch('data/lineups.json', { cache: 'no-store' }).then(function (r) { return r.json(); });
  lineupsReady.then(function (L) { S.lineups = L; paintIdent(); paintForm(); paintLists(); }).catch(function () {});

  if (configured) {
    initFirebase().then(function () {
      startLogListener(); startSignupListener();
      fa.onAuthStateChanged(function (u) {
        if (u) { S.uid = u.uid; restore(); paintSignupForm(); } else { S.connecting = false; paintPortal(); }
      });
    }).catch(function (e) {
      S.connecting = false; S.loadErr = 'Couldn’t connect to the transfer system. ' + (e && e.message ? e.message : ''); paintPortal(); paintLog();
    });
  }
})();
