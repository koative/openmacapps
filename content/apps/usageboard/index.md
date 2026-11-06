---
name: "UsageBoard"
summary: "Menu bar app that tracks API, model and search service quotas and balances, with a small plugin script for each service."
category: "AI"
tags:
  - usage-tracking
  - plugins
  - menu-bar
repository: "https://github.com/marsmay/UsageBoard"
website: "https://usageboard.may.ltd/"
license: "MIT"
licenseUrl: "https://github.com/marsmay/UsageBoard/blob/main/LICENSE"
download: "https://github.com/marsmay/UsageBoard/releases/download/v1.0.13/UsageBoard-1.0.13.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/marsmay/UsageBoard"
  - "https://github.com/marsmay/UsageBoard/blob/main/LICENSE"
  - "https://github.com/marsmay/UsageBoard/releases/tag/v1.0.13"
  - "https://usageboard.may.ltd/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/marsmay/UsageBoard/main/Resources/UsageBoard.iconset/icon_512x512%402x.png"
    credit: "UsageBoard contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

UsageBoard is a native menu bar app that shows how much of your AI, API and search quotas you have used, along with balances and token statistics read from local logs. Each service is a plugin script that prints JSON, and the app runs it on a timer. The bundled plugins cover Claude, Codex, Zhipu GLM, MiniMax, DeepSeek, Kimi, Tavily and Command Code. It is for developers who pay for several of these services at once.

It requires macOS 13 or later and a `python3` on the system, because the bundled plugins are Python scripts. The install notes describe the unverified-developer prompt and an `xattr` workaround, so the first launch needs approval in System Settings. The README also says secret parameters are hidden in the settings form but stored in plain text in `config.json` and passed on the command line. The file itself is saved with owner-only permissions. The interface is available in Chinese and English.
