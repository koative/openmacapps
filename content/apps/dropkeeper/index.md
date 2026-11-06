---
name: "DropKeeper"
summary: "Menu bar app that asks how long each new download should stay, then moves it to the Trash when the time is up."
category: "Utilities"
tags:
  - menu-bar
  - files
  - downloads
  - automation
repository: "https://github.com/direcat/dropkeeper"
website: "https://direcat.github.io/dropkeeper/"
license: "MIT"
licenseUrl: "https://github.com/direcat/dropkeeper/blob/master/LICENSE"
download: "https://github.com/direcat/dropkeeper/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/direcat/dropkeeper"
  - "https://github.com/direcat/dropkeeper/blob/master/LICENSE"
  - "https://github.com/direcat/dropkeeper/releases/latest"
  - "https://direcat.github.io/dropkeeper/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/direcat/dropkeeper/releases/download/v1.2.0/DropKeeper-1.2.0.dmg"
    credit: "DropKeeper contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

DropKeeper watches your Downloads folder and any other folders you add. When a new file lands, a small prompt under the menu bar icon asks how long it should stay: 30 minutes, an hour, a day, ten days, or for good. When the time is up the file goes to the Trash, and History can put it back. Rules can skip the prompt by file type, name or folder, duplicates are flagged, and a reminder comes before a deletion. It suits people who want old downloads cleared automatically.

It needs macOS 15 or later on Apple silicon. The app is not notarized by Apple, so allow it under System Settings → Privacy & Security on first launch. It has no networking code, and on first launch it asks for access to your Downloads folder.
