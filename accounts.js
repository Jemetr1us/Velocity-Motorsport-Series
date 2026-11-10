/* ═══════════════════════════════════════════════════════════════════════════
   VMS ACCOUNTS
   • One email + password account per person. Same account on any device = same
     driver sign-up, same transfer offers, same bets & bankroll.
   • Re-uses the Firebase app that transfers.js already starts (window.VMS_FB), so
     there is only ever ONE login for the whole site.
   • "Create account" UPGRADES the current anonymous session (linkWithCredential), so
     the uid doesn't change: an existing driver sign-up and its offers stay attached.
   • Needs: Email/Password turned on in Firebase → Authentication → Sign-in method.
   • Load after transfers.js:   <script src="accounts.js?v=1" defer></script>
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var FB = null, btn = null, ov = null, tab = 'login', busy = false, msg = null;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function cur() { return FB && FB.fa ? FB.fa.currentUser : null; }
  function perm() { var u = cur(); return !!(u && !u.isAnonymous); }
  function fire() { try { document.dispatchEvent(new CustomEvent('vms-account-change')); } catch (e) {} }
  function offers() { return (window.VMS_TR_STATE && window.VMS_TR_STATE.offers) || 0; }

  function nice(e) {
    var c = (e && e.code) || '';
    if (c === 'auth/email-already-in-use' || c === 'auth/credential-already-in-use') return 'That email already has an account. Use “Log in” instead.';
    if (c === 'auth/invalid-email') return 'That doesn’t look like a valid email address.';
    if (c === 'auth/weak-password') return 'Pick a longer password (at least 6 characters).';
    if (c === 'auth/wrong-password' || c === 'auth/invalid-credential' || c === 'auth/user-not-found' || c === 'auth/invalid-login-credentials') return 'Wrong email or password.';
    if (c === 'auth/too-many-requests') return 'Too many attempts. Wait a few minutes and try again.';
    if (c === 'auth/network-request-failed') return 'Can’t reach the server. Check your connection and try again.';
    if (c === 'auth/operation-not-allowed') return 'Email/password sign-in isn’t switched on yet. The league admin needs to enable it in Firebase → Authentication → Sign-in method.';
    return 'Something went wrong' + (e && e.message ? ' (' + e.message + ')' : '') + '.';
  }

  /* ───────── actions ───────── */
  function createAccount(email, pw) {
    var u = cur(), cred = FB.sdk.auth.EmailAuthProvider.credential(email, pw);
    /* anonymous → link (keeps the uid, so an existing sign-up + offers stay yours); otherwise brand-new user */
    var p = (u && u.isAnonymous) ? u.linkWithCredential(cred) : FB.fa.createUserWithEmailAndPassword(email, pw);
    return p.then(function () { var x = cur(); return x ? x.getIdToken(true) : null; }).then(fire);
  }
  function logIn(email, pw) {
    var u = cur(), st = window.VMS_TR_STATE || {};
    if (u && u.isAnonymous && st.hasSignup &&
        !window.confirm('This browser has a driver sign-up that isn’t attached to any account yet. If you log in to a different account, it will be left behind.\n\nPress Cancel, then use “Create account” to attach it instead. Press OK to log in anyway.')) {
      return Promise.reject({ cancelled: true });
    }
    return FB.fa.signInWithEmailAndPassword(email, pw).then(fire);
  }
  function logOut() { return FB.fa.signOut().then(fire); }
  function resetPw(email) { return FB.fa.sendPasswordResetEmail(email); }

  /* ───────── styles + header button ───────── */
  var css = document.createElement('style');
  css.textContent =
    '#vx-acct-btn{background:none;border:1px solid #444;color:inherit;font:800 11px Arial,sans-serif;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;padding:6px 10px;margin-left:8px;white-space:nowrap;flex:0 0 auto;display:inline-flex;align-items:center;gap:6px}' +
    '#vx-acct-btn:hover{border-color:#e8186d;color:#fff}#vx-acct-btn.in{border-color:#e8186d}' +
    '#vx-acct-btn i{font-style:normal;background:#e8186d;color:#fff;border-radius:10px;padding:1px 7px;font-size:10px}' +
    '#vx-acct-ov{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.78);display:none;align-items:center;justify-content:center;padding:16px;font-family:Arial,sans-serif}' +
    '#vx-acct-ov.open{display:flex}#vx-acct-ov *{box-sizing:border-box}' +
    '.vxa-box{width:100%;max-width:400px;background:#0b0b0f;border:1px solid #2a2a35;border-top:3px solid #e8186d;color:#fff;padding:22px 22px 20px;position:relative;max-height:92vh;overflow:auto}' +
    '.vxa-x{position:absolute;top:6px;right:12px;background:none;border:0;color:#888;font:900 26px Arial;cursor:pointer}.vxa-x:hover{color:#fff}' +
    '.vxa-box h3{margin:0 0 6px;font:900 18px Arial;letter-spacing:1.5px;text-transform:uppercase}' +
    '.vxa-box p{margin:0 0 14px;font:600 13px/1.5 Arial;color:#9a9aa5}' +
    '.vxa-tabs{display:flex;gap:6px;margin:0 0 14px}.vxa-tabs button{flex:1;background:transparent;border:1px solid #333;color:#bbb;padding:9px;font:800 11px Arial;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.vxa-tabs button.on{background:#e8186d;border-color:#e8186d;color:#fff}' +
    '.vxa-box label{display:block;margin:0 0 10px;font:800 11px Arial;letter-spacing:1px;text-transform:uppercase;color:#888}' +
    '.vxa-box input{display:block;width:100%;margin-top:5px;background:#14141b;border:1px solid #333;color:#fff;padding:11px 12px;font:600 15px Arial;outline:0}.vxa-box input:focus{border-color:#e8186d}' +
    '.vxa-go{width:100%;margin-top:6px;padding:13px;background:linear-gradient(90deg,#e8186d,#ff6b00);border:0;color:#fff;font:900 12px Arial;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer}.vxa-go:disabled{opacity:.5;cursor:default}' +
    '.vxa-alt{width:100%;margin-top:8px;padding:11px;background:transparent;border:1px solid #444;color:#ddd;font:800 11px Arial;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.vxa-alt:hover{border-color:#e8186d;color:#fff}' +
    '.vxa-link{background:none;border:0;color:#9a9aa5;font:700 12px Arial;text-decoration:underline;cursor:pointer;padding:6px 0;margin-top:4px}.vxa-link:hover{color:#fff}' +
    '.vxa-msg{margin:0 0 12px;padding:9px 11px;font:700 12px/1.45 Arial}.vxa-msg.err{background:#2a0e10;border-left:3px solid #e5484d;color:#ffb4b6}.vxa-msg.ok{background:#0f2417;border-left:3px solid #22c55e;color:#bbf7d0}' +
    '.vxa-row{display:flex;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid #1e1e27;font:700 13px Arial;color:#ccc}.vxa-row b{color:#fff;text-align:right;overflow-wrap:anywhere}';
  document.head.appendChild(css);

  function mountButton() {
    if (btn) return;
    btn = document.createElement('button'); btn.type = 'button'; btn.id = 'vx-acct-btn';
    var nav = document.querySelector('header nav'), hub = $('hubWrap');
    if (nav) { if (hub && hub.parentNode === nav) nav.insertBefore(btn, hub); else nav.appendChild(btn); }
    else document.body.appendChild(btn);
    btn.addEventListener('click', function () { open(); });
    paintButton();
  }
  function paintButton() {
    if (!btn) return;
    var n = offers(), p = perm();
    btn.className = p ? 'in' : '';
    btn.id = 'vx-acct-btn';
    btn.innerHTML = (p ? 'Account' : 'Sign in') + (p && n ? '<i title="Offers waiting for you">' + n + '</i>' : '');
  }

  /* ───────── modal ───────── */
  function ensureOverlay() {
    if (ov) return;
    ov = document.createElement('div'); ov.id = 'vx-acct-ov'; document.body.appendChild(ov);
    ov.addEventListener('click', function (e) {
      if (e.target === ov || e.target.closest('[data-x]')) { close(); return; }
      var t = e.target.closest('[data-t]');
      if (t) { tab = t.getAttribute('data-t'); msg = null; paint(); return; }
      var a = e.target.closest('[data-a]'); if (!a) return;
      var act = a.getAttribute('data-a');
      if (act === 'out') { run(logOut(), 'Signed out.', true); }
      else if (act === 'offers') { close(); gotoOffers(); }
      else if (act === 'forgot') {
        var em = (($('vxaEmail') || {}).value || '').trim();
        if (!em) { setMsg('Type your email above first, then press “Forgot password?”.', 'err'); return; }
        run(resetPw(em), 'Password reset email sent. Check your inbox (and spam).');
      }
    });
    ov.addEventListener('submit', function (e) {
      if (e.target.id !== 'vxaForm') return; e.preventDefault();
      var email = $('vxaEmail').value.trim(), pw = $('vxaPw').value;
      if (!email || !pw) { setMsg('Enter your email and password.', 'err'); return; }
      if (tab === 'create') {
        if (pw.length < 6) { setMsg('Pick a password with at least 6 characters.', 'err'); return; }
        var pw2 = $('vxaPw2'); if (pw2 && pw2.value !== pw) { setMsg('The two passwords don’t match.', 'err'); return; }
        run(createAccount(email, pw), 'Account created. Your bets and driver offers now follow you to any device.');
      } else run(logIn(email, pw), 'Logged in.');
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
  function setMsg(text, kind) {
    msg = text ? { t: text, k: kind || 'ok' } : null;
    var m = $('vxaMsg'); if (m) { m.className = 'vxa-msg ' + (msg ? msg.k : ''); m.textContent = msg ? msg.t : ''; m.style.display = msg ? 'block' : 'none'; }
  }
  function run(promise, okText, keepOpen) {
    if (busy) return; busy = true; setBusy(true);
    promise.then(function () {
      busy = false; msg = { t: okText, k: 'ok' }; paint();
    }).catch(function (e) {
      busy = false; setBusy(false);
      if (e && e.cancelled) return;
      setMsg(nice(e), 'err');
    });
  }
  function setBusy(b) { var g = ov && ov.querySelector('.vxa-go'); if (g) g.disabled = b; }
  function gotoOffers() {
    function go(tries) {
      if (typeof window.go === 'function') window.go('transfers'); else { try { location.hash = '#transfers'; } catch (e) {} }
      if (typeof window.__vmsHubTab === 'function') window.__vmsHubTab('signup');
      else if ((tries || 0) < 20) setTimeout(function () { go((tries || 0) + 1); }, 150);
    }
    go(0);
  }
  function paint() {
    ensureOverlay();
    var u = cur(), h = '<div class="vxa-box"><button class="vxa-x" data-x="1" aria-label="Close">×</button>';
    var m = msg ? '<div class="vxa-msg ' + msg.k + '" id="vxaMsg">' + esc(msg.t) + '</div>' : '<div class="vxa-msg" id="vxaMsg" style="display:none"></div>';
    if (!FB) {
      h += '<h3>Account</h3><p>Connecting… try again in a moment.</p>';
    } else if (perm()) {
      var st = window.VMS_TR_STATE || {}, n = offers();
      h += '<h3>Your account</h3><p>One account for your bets and your driver offers, on every device.</p>' + m +
        '<div class="vxa-row"><span>Signed in as</span><b>' + esc(u.email || '') + '</b></div>' +
        '<div class="vxa-row"><span>Driver sign-up</span><b>' + (st.hasSignup ? 'Yes' : 'None yet') + '</b></div>' +
        '<div class="vxa-row"><span>Offers waiting</span><b>' + n + '</b></div>' +
        '<div class="vxa-row"><span>Bets &amp; bankroll</span><b>Synced to this account</b></div>' +
        '<button class="vxa-go" data-a="offers" type="button" style="margin-top:14px">' + (st.hasSignup ? 'Open Driver Hub' : 'Driver sign-up') + '</button>' +
        '<button class="vxa-alt" data-a="out" type="button">Sign out</button>';
    } else {
      var create = tab === 'create';
      h += '<h3>' + (create ? 'Create account' : 'Log in') + '</h3>' +
        '<p>' + (create ? 'Free. Needed to sign up as a driver, and it lets your bets and offers follow you to any device.' : 'Log in to see your offers and bets on this device.') + '</p>' + m +
        '<div class="vxa-tabs"><button type="button" data-t="login" class="' + (create ? '' : 'on') + '">Log in</button><button type="button" data-t="create" class="' + (create ? 'on' : '') + '">Create account</button></div>' +
        '<form id="vxaForm" novalidate>' +
        '<label>Email<input id="vxaEmail" type="email" autocomplete="email" inputmode="email" maxlength="120"></label>' +
        '<label>Password<input id="vxaPw" type="password" autocomplete="' + (create ? 'new-password' : 'current-password') + '" maxlength="128"></label>' +
        (create ? '<label>Repeat password<input id="vxaPw2" type="password" autocomplete="new-password" maxlength="128"></label>' : '') +
        '<button class="vxa-go" type="submit">' + (create ? 'Create account' : 'Log in') + '</button></form>' +
        (create ? '' : '<button class="vxa-link" type="button" data-a="forgot">Forgot password?</button>');
    }
    ov.innerHTML = h + '</div>';
    var f = $('vxaEmail'); if (f && ov.classList.contains('open')) f.focus();
  }
  function open(which) {
    if (which === 'create' || which === 'login') tab = which;
    ensureOverlay(); paint(); ov.classList.add('open');
  }
  function close() { if (ov) ov.classList.remove('open'); msg = null; }

  window.VMSAccount = {
    open: open, close: close,
    isSignedIn: perm,
    uid: function () { return perm() ? cur().uid : null; },
    email: function () { return perm() ? (cur().email || '') : ''; }
  };

  /* ───────── start: wait for transfers.js to bring Firebase up ───────── */
  function start() {
    FB = window.VMS_FB; if (!FB) return;
    mountButton();
    FB.fa.onAuthStateChanged(function () { paintButton(); if (ov && ov.classList.contains('open')) paint(); });
    document.addEventListener('vms-account-change', function () { paintButton(); });
    document.addEventListener('vms-tr-change', function () { paintButton(); if (ov && ov.classList.contains('open') && perm()) paint(); });
  }
  if (window.VMS_FB) start(); else document.addEventListener('vms-fb-ready', start, { once: true });
})();
