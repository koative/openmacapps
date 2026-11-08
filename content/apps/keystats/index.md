---
name: "KeyStats"
summary: "Counts daily keystrokes, mouse clicks, pointer travel and scrolling, and shows the totals in the menu bar."
category: "Utilities"
tags:
  - menu-bar
  - keyboard
  - mouse
  - statistics
  - usage-tracking
repository: https://github.com/debugtheworldbot/keyStats
website: https://keystats.vercel.app
license: "MIT"
licenseUrl: https://github.com/debugtheworldbot/keyStats/blob/main/LICENSE
download: https://github.com/debugtheworldbot/keyStats/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/debugtheworldbot/keyStats
  - https://github.com/debugtheworldbot/keyStats/blob/main/LICENSE
  - https://github.com/debugtheworldbot/keyStats/releases
  - https://raw.githubusercontent.com/debugtheworldbot/keyStats/main/README.md
  - https://keystats.vercel.app
  - https://github.com/debugtheworldbot/keyStats/releases/tag/v1.55
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/debugtheworldbot/keyStats/main/KeyStats/Assets.xcassets/AppIcon.appiconset/ICON-iOS-Default-256x256%401x.png
    credit: "pipizhu (debugtheworldbot) and KeyStats contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

KeyStats counts how much you type, click, move the pointer and scroll each day, and keeps the totals in the menu bar. Click the icon to open a fuller panel with recent history and all-time numbers.

- Per-key and key-combination counts feed a keyboard heatmap for a date range you choose.
- A per-app breakdown shows which apps took your key presses, clicks and scrolling.
- Left and right clicks are counted separately, and the daily figures reset at midnight.
- You can export the current Mac's statistics as JSON and import them again.

Counting starts once you grant the Accessibility permission; without it, KeyStats records nothing. The app is not signed. After a reinstall, remove its old entry under Privacy & Security > Accessibility and request the permission again from the app.

Version 1.55 is a Universal app for Apple silicon and Intel and requires macOS 13 Ventura. It comes as a DMG or ZIP on GitHub, or through the developer's Homebrew tap, and updates itself. A Windows version lives in the same repository.

The developer says KeyStats stores aggregate counts only, never the text you type, the order of your keystrokes or where you clicked. Everything stays on the Mac until you pair devices for sync. Sync encrypts the supported daily key and click totals on the device before upload. Pointer distance, scrolling and per-app figures are not currently synced.
