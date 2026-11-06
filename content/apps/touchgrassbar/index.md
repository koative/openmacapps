---
name: "TouchGrassBar"
summary: "Menu bar app for Codex and Claude usage limits and local token activity, with an optional public leaderboard."
category: "Developer tools"
tags:
  - menu-bar
  - usage-tracking
  - coding-agents
  - monitoring
repository: "https://github.com/FabienGreard/TouchGrassBar"
website: "https://touchgrassbar.com/"
license: "MIT"
licenseUrl: "https://github.com/FabienGreard/TouchGrassBar/blob/main/LICENSE"
download: "https://github.com/FabienGreard/TouchGrassBar/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/FabienGreard/TouchGrassBar"
  - "https://github.com/FabienGreard/TouchGrassBar/blob/main/LICENSE"
  - "https://github.com/FabienGreard/TouchGrassBar/releases"
  - "https://touchgrassbar.com/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/FabienGreard/TouchGrassBar/main/apps/desktop/src-tauri/icons/icon.icns"
    credit: "Fabien Greard"
    license: "MIT; upstream app icon, trademarks retained"
---

TouchGrassBar sits in the menu bar and shows your Codex and Claude usage limits, along with token activity it observes locally on the Mac. It can also compare public Token Scores on the Doomerboard leaderboard, which is optional. The project describes itself as a playful consumer app rather than an employee-monitoring or productivity tool. It suits developers who use coding agents daily and want a glance at their limits without opening a dashboard.

It requires macOS 15 or later on Apple silicon; the v0.0.62 release ships only an arm64 build. The release is signed with a Developer ID certificate and notarized by Apple, and the project's release record shows the notarization and Gatekeeper checks passed. The leaderboard is optional and can be left off.
