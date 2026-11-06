---
name: "TokenMeter"
summary: "Menu bar app that tracks Claude Code rate limits, costs and daily usage from the Keychain token and local logs."
category: "Developer tools"
tags:
  - coding-agents
  - usage-tracking
  - menu-bar
  - monitoring
repository: "https://github.com/Priyans-hu/tokenmeter"
website: "https://priyans-hu.github.io/tokenmeter/"
license: "MIT"
licenseUrl: "https://github.com/Priyans-hu/tokenmeter/blob/main/LICENSE"
download: "https://github.com/Priyans-hu/tokenmeter/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Priyans-hu/tokenmeter"
  - "https://github.com/Priyans-hu/tokenmeter/blob/main/LICENSE"
  - "https://github.com/Priyans-hu/tokenmeter/releases"
  - "https://priyans-hu.github.io/tokenmeter/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Priyans-hu/tokenmeter/blob/main/TokenMeter/TokenMeter/Resources/AppIcon.icns"
    credit: "Priyanshu"
    license: "MIT; upstream app icon, trademarks retained"
---

TokenMeter sits in the menu bar and shows Claude Code's session and weekly rate limits with reset times, and notifies you when either reaches 80 percent. It reads Claude Code's OAuth token from the Keychain for real utilization figures, and parses the JSONL logs in `~/.claude` for daily cost, per-model breakdown and an hour-by-day activity heatmap. Costs are API-equivalent estimates, not subscription charges. It suits people who want to watch Claude Code limits and spending without opening a dashboard.

Requires macOS 14 or later. The release is a zip of an Apple silicon (aarch64) build. The README does not claim notarization; it tells users to clear the quarantine attribute with `xattr` if macOS reports the app as damaged. macOS asks for Keychain access on first launch.
