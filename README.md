# VMS website

    index.html   – page markup
    style.css    – styles
    app.js       – all site logic (standings, results, replay, heatmap, search…)
    data/lineups.json – team lineups (the only file the Discord sync rewrites)
    data/standings.json – standings read from an image (written by add-standings.html)
    data/fia.json, data/media.json + media/ – FIA announcements and media feed (written by the sync)
    data/name-map.json – Discord nickname → site name (e.g. "il predestinato" → "Nath")
    assets/logo.png
    scripts/update-lineups.mjs + lineup-parser.mjs + .github/workflows/update-lineups.yml – Discord → lineups sync
    (test the parser: node scripts/test-parser.mjs)

Host it on GitHub Pages (or any web server). Opening index.html by double-click won't work,
because the page loads data/lineups.json with fetch().

## Auto-updating from Discord
1. Create a Discord bot (discord.com/developers → New Application → Bot). On the Bot tab turn on
   **Message Content Intent**, then Reset Token and copy it. Invite it with the OAuth2 URL Generator
   (scope `bot`, permissions **View Channels** + **Read Message History**).
2. Repo → Settings → Secrets and variables → Actions:
   - secret   `DISCORD_BOT_TOKEN`
   - variable `LINEUPS_CHANNEL_ID`  – lineup channel id(s), comma separated (`111,222` or `f1:111,f2:222,f3:333`)
   - variable `FIA_CHANNEL_ID`      – FIA announcements channel (shown on the News → FIA tab)
   - variable `MEDIA_CHANNEL_ID`    – media channel (shown on the News → Media tab)
   (Channel id: Discord → User Settings → Advanced → Developer Mode, then right-click a channel → Copy Channel ID.)
3. The Action runs every hour (or run it by hand from the Actions tab) and commits any change.
   Open tabs reload when lineups change; the News tab refreshes itself every few minutes.

Media files are copied into /media (Discord links expire after about a day). Images up to 10 MB and
videos up to 25 MB are saved; anything bigger shows as an "Open on Discord" link. Posts that disappear
from Discord disappear from the site, and their files are deleted on the next run.

If a driver's Discord nickname isn't how the site spells them, add it to data/name-map.json.

## Adding race results (easy way)
Open **`add-result.html`** on your site (e.g. `yoursite.github.io/Velocity-Motorsport-Series/add-result.html`).
1. Pick the series and round (the next round without results is pre-selected).
2. Type the finishing order, or paste it from Discord with **Quick paste** (supports `DNF`, `DNS`, `DSq`, `pole`, `fl`, `- Team Name`).
   Driver/team suggestions come from the existing standings and lineups; points are filled in automatically (editable).
3. Click **Save this race to the list**, then **Publish to GitHub** (needs a fine-grained token with *Contents: read & write*
   on this repo – saved only in your browser), or use **Copy JSON / Download** and replace `data/new-results.json` by hand.

Results are stored in `data/new-results.json`. On load, `app.js` layers them on top of the built-in tables: the race
appears on the Results page, driver + constructor points are added, form dots are appended and standings are re-sorted.
A round that already has results hard-coded in `app.js` is skipped (and greyed out in the tool). To fix a mistake, open the
tool, hit **Edit** on the saved race, change it and publish again.

## Adding standings from an image
Open **`add-standings.html`** (same hosting as `add-result.html`).
1. Pick the series and **Drivers** or **Constructors**.
2. Drop, choose or paste (Ctrl/⌘+V) a screenshot of the standings. Several screenshots of one long table are read top to bottom.
   Press **Read the image** – the text is read in your browser (Tesseract.js), nothing is uploaded.
3. Check the table: names are snapped to the drivers/teams already on the site, *On site* / *Change* show how the points move,
   and a warning appears if the points ever go up as you go down the list (usually a misread digit). Fix anything, then **Save**.
   Tick *whole table* to hide anyone who isn't in the image. No image handy? Paste the table as text instead.
4. **Publish to GitHub** (same token as add-result) or Copy / Download `data/standings.json`.

`app.js` applies `data/standings.json` last, after the built-in tables and `new-results.json`, so the image has the final word on points.
Order is the order in the image (ties stay as shown). Use **Remove** in the tool and publish to go back to the calculated standings.

## Live race page
The **Live** tab polls `data/live.json` every 2 s while it's open and shows a timing tower, track map, flag status and race-control
messages. When `session.status` isn't `"live"` it shows the next race instead. **Run demo** plays a simulated race so you can see it work.
To feed it, replace the file (or change `LIVE_URL` at the top of `live.js` to your game's endpoint) with:

    { "session": { "series":"f1", "type":"Race", "name":"Italian Grand Prix", "circuit":"Monza", "status":"live",
                   "flag":"green|yellow|sc|vsc|red|chequered", "lap":12, "totalLaps":30, "updated":1760000000000 },
      "drivers": [ { "pos":1, "name":"Skirmis", "team":"LM Performance", "color":"#e8186d", "gap":"Leader",
                     "last":"1:32.456", "bestMs":92456, "lastPB":true, "tyre":"M", "status":"RUN|PIT|DNF", "progress":0.42 } ],
      "messages": [ { "t":"12:03", "text":"Yellow flag sector 2" } ],
      "track": [[x,y],[x,y]]   // optional racing line from the game; any coordinate scale, closed loop
    }

`progress` is the fraction of the current lap (0–1) and `updated` is epoch ms (feed shows "stale" after 30 s).
GitHub Pages can't take pushes from a game in real time, so for a true live feed the game should POST to a small endpoint
(Cloudflare Worker, Firebase, etc.) that serves this JSON, and `LIVE_URL` points there.

### No game access? Use Race Control
If you can't run code inside the game, open **`race-control.html`**: a steward updates flag, lap, order, gaps and messages by hand and it
publishes to the same live feed (Firebase). Put your Firebase URL + secret on that page (saved in the browser only) and set
`LIVE_URL` in `live.js` to `https://<project>-default-rtdb.firebaseio.com/live.json`. Without lap-progress data the Live page hides the track map.

### Auto-read the leaderboard (race-control.html, section 3b)
Fill in `data/driver-codes.json` (3-letter in-game code → site name + team). On race day: open `race-control.html` in Chrome/Safari on the
computer running the game, press **Share game window**, drag a box around the leaderboard, press **Start auto-read**, then **Go live**.
Uses Tesseract.js (text recognition in the browser); nothing is uploaded. `node`-testable parser: `leaderboard-parser.js`.
