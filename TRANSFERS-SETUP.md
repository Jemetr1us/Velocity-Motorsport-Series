# Transfers & Signings — setup

A new **Transfers** tab on the site.

- **Team owners** use one shared **owner code** to send a signing or transfer request.
- For a **transfer**, the owner of the team that currently has the driver must **accept** first.
- **FIA officials** use one shared **FIA code** to approve, reject, or ask for changes (a comment is required for reject / changes).
- **Approved** moves appear in a public **Transfer Log**. Nothing is posted to Discord.
- Rosters still update the way they do today (your lineup channel → the Discord sync). Approvals don't touch `data/lineups.json`.

Everything runs on Firebase's **free (Spark) plan**. No card needed.

---

## 1. Create a NEW Firebase project (about 5 minutes)

**Use a new project. Do not reuse `vms-dotd`.** That project already holds the Driver of the Day votes (`dotd_votes`),
and publishing the rules below would replace its rules and could break voting. The Transfers tab and Driver of the Day
run side by side on the site without affecting each other.

1. Go to <https://console.firebase.google.com> → **Add project** → name it (e.g. `vms-transfers`). You can switch Google Analytics off. Stay on the free **Spark** plan.
2. **Build → Firestore** (older consoles call it *Firestore Database*) → **Create database**. If it asks for an edition, choose **Standard**. Leave the ID as `(default)`, pick any location, and choose **production mode**.
3. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable → Save.**
   (Visitors are signed in anonymously behind the scenes. They never see a login screen; the codes are what matter.)
4. **Firestore → Rules** tab → delete what's there, paste the whole contents of **`firestore.rules`** from this repo → **Publish**.
   If Firebase shows a red error instead, copy the error message and send it to whoever is maintaining this.
5. **Project settings (gear icon) → General → Your apps → `</>` Web** → register an app (no hosting needed) → copy the `firebaseConfig` values (`apiKey`, `authDomain`, `projectId`, `appId`) into **`firebase-config.js`** in this repo. These values are safe to be public. The rules protect the data.

## 2. Create the two access codes

Codes are documents in a collection called `codes`. They can't be read or listed from the website, only created and deleted here in the Firebase console, so only you control them.

1. **Firestore → Data → Start collection** → Collection ID: `codes`.
2. First document — **Document ID** = your **owner code**, one field: `role` (string) = `owner`.
3. **Add document** — **Document ID** = your **FIA code**, one field: `role` (string) = `official`.

Rules for a good code:
- **Capital letters, digits and dashes only, 16–64 characters**, long and random, e.g. `VMS-7K2QX-9PD4M-R8TWB-3HNZ6`. Use a password generator and make it uppercase. The database can't rate-limit guessing, so length is your protection.
- Never reuse the owner code as the FIA code.

Handing out / changing codes:
- Give the owner code to team owners and the FIA code to officials (DM them, don't post it in a channel).
- **To cut a code off, delete its document.** It stops working immediately, even for people already signed in. To rotate, add a new document and delete the old one.
- *Optional:* add a second field `team` (string) = the exact team name (e.g. `Scuderia Ferrari`) to make a code that only works for that team. You can then give each team its own code later without changing any code on the site.

## 3. Put the files on the site

Upload / commit these to the repo root (same folder as `index.html`):

| File | What it is |
|---|---|
| `transfers.js`, `transfers.css` | the new tab (incl. Driver Sign-Up) |
| `firebase-config.js` | your four Firebase values (step 1.5) |
| `firestore.rules` | for reference (you already pasted it into Firebase) |
| `index.html` | updated: adds the Transfers link, the page and the script tags |
| `app.js` | updated: **one word** added to the `VIEWS` list |

If you'd rather not replace `app.js`, make the one-line change by hand. Find

```js
const VIEWS=['home', 'standings', 'calendar', 'results', 'news', 'teams', 'about', 'join'];
```

and add `'transfers', ` after `'teams', `.

## 4. Quick test (3 minutes)

1. Open the site → **Transfers → Owner / FIA Portal** → enter the **owner code**. Type your name, pick a team, and send a **Signing** request.
2. Sign out, enter the **FIA code**, and the request should be waiting. Try **Reject** with no comment (it should ask for a reason), then **Approve**.
3. Open the site in a private window with no code: the move should be visible in the **Transfer Log**.
4. Try a **Transfer**: send it as team A for a driver from team B, switch "Acting as team" to team B, and **Accept**. It should then show up in the FIA queue.
5. In the Firebase console delete the owner code document and refresh a signed-in owner's page. It should drop back to the code screen.

---

## 5. Driver sign-up and pricing

The **Driver Sign-Up** tab lets anyone sign up as a driver (name, series, optional note). No code is needed. An **FIA official** (signed in with the FIA code) then sees a price box on each sign-up and sets the price in $M; the price shows publicly next to the driver.

- After updating the files, **re-publish `firestore.rules`** in Firebase (Firestore → Rules → paste → Publish). The new `signups` rules are in it.
- One sign-up per browser (the document ID is the visitor's anonymous ID). A driver can withdraw until it's priced; FIA can remove or re-price any sign-up.
- Sign-ups and prices are **public**, so don't ask drivers to put private details (Discord handles etc.) in the note.
- FIA must type their name in the **Owner / FIA Portal** tab once; it's recorded with each price.

## Things worth knowing

- **One shared owner code means any owner can pick any team** in "Acting as team", including the team that has to accept a transfer. The name typed on each action is recorded in the history, but it's self-declared. If that matters, use team-locked codes (the optional `team` field above), one per team.
- **Names on actions** (owner and FIA) are typed by the person, since shared codes can't prove who someone is.
- **Approved moves are public**, including who requested them and any notes. Other requests are only visible to people with a valid code.
- Free-plan limits (50,000 reads / 20,000 writes per day) are far more than a league this size needs.
- Firebase is loaded from Google's CDN (`gstatic.com`); if it's blocked on someone's network the tab shows a "couldn't connect" message and the rest of the site works as normal.
