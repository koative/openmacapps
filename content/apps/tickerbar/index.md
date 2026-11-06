---
name: "TickerBar"
summary: "Menu bar stock ticker that rotates a watchlist, with intraday charts, price alerts and holdings from Yahoo Finance quotes."
category: "Utilities"
tags:
  - menu-bar
  - finance
  - widgets
repository: "https://github.com/TerrifiedBug/tickerbar"
website: "https://tickerbar.terrifiedbug.com"
license: "MIT"
licenseUrl: "https://github.com/TerrifiedBug/tickerbar/blob/master/LICENSE"
download: "https://github.com/TerrifiedBug/tickerbar/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/TerrifiedBug/tickerbar"
  - "https://github.com/TerrifiedBug/tickerbar/blob/master/LICENSE"
  - "https://github.com/TerrifiedBug/tickerbar/releases/tag/v1.5.2"
  - "https://tickerbar.terrifiedbug.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/TerrifiedBug/tickerbar/master/TickerBar/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "TerrifiedBug"
    license: "MIT; upstream app icon, trademarks retained"
---

TickerBar keeps one stock price in the menu bar, either pinned or rotating through a watchlist while closed markets are skipped. Click it to open the watchlist with intraday charts, price alerts, portfolio holdings and extended-hours prices where Yahoo provides them. It suits people who want market prices in view without a browser tab, and it can show private display names instead of ticker symbols.

TickerBar needs macOS 14 or later. The 1.5.2 zip is a universal build signed with a Developer ID and notarized, so it opens without a Gatekeeper workaround. Quotes come from Yahoo Finance for personal use and can be delayed or incomplete, and the project says it is not affiliated with Yahoo. The app is free with no paid tier. Homebrew installs use a third-party tap, which Homebrew asks you to trust before it loads.
