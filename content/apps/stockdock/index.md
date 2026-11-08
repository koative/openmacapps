---
name: 'StockDock'
summary: 'Shows a watchlist of stocks, ETFs, indices and crypto with portfolio profit and loss in the menu bar, plus a full window.'
category: 'Productivity'
tags:
  - menu-bar
  - finance
  - widgets
repository: https://github.com/simonsruggi/StockDock
website: https://stockdockapp.com
license: MIT
licenseUrl: https://github.com/simonsruggi/StockDock/blob/main/LICENSE
download: https://github.com/simonsruggi/StockDock/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/simonsruggi/StockDock
  - https://github.com/simonsruggi/StockDock/blob/main/LICENSE
  - https://github.com/simonsruggi/StockDock/releases
  - https://stockdockapp.com
  - https://raw.githubusercontent.com/simonsruggi/StockDock/main/README.md
  - https://github.com/simonsruggi/StockDock/releases/tag/v1.12.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/simonsruggi/StockDock/main/StockDock/Assets.xcassets/AppIcon.appiconset/icon_1024.png
    credit: 'Simone Ruggiero (StockDock)'
    license: 'MIT repository asset; StockDock name and icon retained by the project'
---

StockDock puts your watchlist and your portfolio's profit and loss in the menu bar. You add anything with a Yahoo Finance symbol, including stocks, ETFs, indices, crypto and currencies, by symbol, company name or ISIN, and prices update live. An Open button turns the popover into a full window with the watchlist, portfolios, charts and news.

- Holdings record quantity, average price and purchase date, and the date sets the historical exchange rate for positions in other currencies.
- Short positions, and holdings with a multiplier on their exposure, can be tracked once you turn them on in advanced settings.
- Price alerts and per-portfolio notifications can also be posted to a Discord or Slack webhook.
- The menu bar can show total or daily profit and loss, total value, the best or worst stock, or only an icon.
- Portfolios export to JSON and import back.

An optional setting fills overnight and weekend gaps with Hyperliquid perpetual futures prices, which track the stock but are not official exchange quotes. StockDock can also act as an MCP server, so AI assistants such as Claude Code can read your holdings and quotes, and those holdings then reach whichever AI service you connect. Data is kept in a JSON file in Application Support, and the developer says there is no account, analytics or telemetry.

Version 1.12.0 ships as a universal build for Apple silicon and Intel, Developer ID-signed and notarized, and requires macOS 14 or later. It comes from GitHub or the developer's Homebrew tap and updates itself through Sparkle.
