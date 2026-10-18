# VMS website

    index.html   – page markup
    style.css    – styles
    app.js       – all site logic (standings, results, replay, heatmap, search…)
    data/lineups.json – team lineups (the only file the Discord sync rewrites)
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
