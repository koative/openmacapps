---
name: "Mac Coffee"
summary: "Menu bar app that prevents idle sleep for timed or open-ended sessions, with battery cutoff and an optional MCP server."
category: "Utilities"
tags:
  - sleep
  - menu-bar
  - battery
alternativeTo:
  - amphetamine
repository: "https://github.com/rekurt/Mac-Coffee"
website: "https://rekurt.github.io/Mac-Coffee/"
license: "MIT"
licenseUrl: "https://github.com/rekurt/Mac-Coffee/blob/main/LICENSE"
download: "https://github.com/rekurt/Mac-Coffee/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/rekurt/Mac-Coffee"
  - "https://github.com/rekurt/Mac-Coffee/blob/main/LICENSE"
  - "https://github.com/rekurt/Mac-Coffee/releases"
  - "https://rekurt.github.io/Mac-Coffee/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/rekurt/Mac-Coffee/HEAD/Resources/Shared/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Mac Coffee contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Mac Coffee is a menu bar app that stops a Mac from sleeping while you need it awake. You open the cup, choose Keep Mac Awake or Keep Display Awake, pick a duration from 30 minutes to eight hours or leave it indefinite, and the app holds IOKit power assertions for that session. A battery cutoff ends the session at a level you set, and Launch at Login is available. The Direct build includes an optional local MCP server for AI clients, off by default. It suits a long download, a render or any task that should not be interrupted by sleep.

Requires macOS 13 or later. The release DMG is signed and notarized, and the Direct build updates through Sparkle. The project says it installs no privileged helper and does not change `pmset`. It only prevents idle sleep, so manual sleep, lid closure, shutdown and thermal protection still apply. The App Store build omits Sparkle and the MCP server.

This entry points to the upstream `rekurt/Mac-Coffee` repository, which has the current 2.x releases; the `Elliotwu-7/Mac-Coffee` copy carries older 1.0.x releases.
