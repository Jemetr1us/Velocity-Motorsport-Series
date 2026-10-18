# VMS website

    index.html   – page markup
    style.css    – styles
    app.js       – all site logic (standings, results, replay, heatmap, search…)
    data/lineups.json – team lineups (the only file the Discord sync rewrites)
    data/name-map.json – Discord nickname → site name (e.g. "il predestinato" → "Nath")
    assets/logo.png
    scripts/update-lineups.mjs + lineup-parser.mjs + .github/workflows/update-lineups.yml – Discord → lineups sync
    (test the parser: node scripts/test-parser.mjs)

Host it on GitHub Pages (or any web server). Opening index.html by double-click won't work,
because the page loads data/lineups.json with fetch().

## Auto-updating lineups
1. Create a Discord bot (discord.com/developers → New Application → Bot), copy its token, and invite it to the
   server with **View Channel** + **Read Message History** on the 👥 | lineups channel.
2. Repo → Settings → Secrets and variables → Actions:
   - secret   `DISCORD_BOT_TOKEN`
   - variable `LINEUPS_CHANNEL_ID`  (right-click the channel → Copy Channel ID, with Developer Mode on)
3. The Action runs every 5 hours (or run it by hand from the Actions tab), commits any change to
   data/lineups.json, and open tabs reload themselves within ~5 minutes of the next check.

If a driver's Discord nickname isn't how the site spells them, add it to data/name-map.json.
