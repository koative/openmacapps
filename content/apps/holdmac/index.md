---
name: "HoldMac"
summary: "Menu bar app that shows a temporary shelf while you drag files in Finder, so you can gather files before moving them."
category: "Utilities"
tags:
  - drag-and-drop
  - finder
  - menu-bar
repository: "https://github.com/Funnyrz/HoldMac"
website: "https://github.com/Funnyrz/HoldMac"
license: "MIT"
licenseUrl: "https://github.com/Funnyrz/HoldMac/blob/main/LICENSE"
download: "https://github.com/Funnyrz/HoldMac/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Funnyrz/HoldMac"
  - "https://github.com/Funnyrz/HoldMac/blob/main/LICENSE"
  - "https://github.com/Funnyrz/HoldMac/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Funnyrz/HoldMac/releases/download/v1.0/HoldMac-1.0.dmg"
    credit: "HoldMac contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

HoldMac adds a temporary hold area for files you drag in Finder. When a Finder drag starts, a floating panel appears near the top of the screen. Drop the selection there, browse to another folder, and drag the items back out to copy or move them. It keeps file references rather than duplicate copies. It is for people who often move files between folders that are far apart.

It requires macOS 14 or later. The DMG is not notarized, and the release notes say to remove the quarantine attribute with `xattr` before the app runs. macOS has no public API for this signal, so the app uses a drag heuristic and can occasionally show the panel for a Finder drag that carries no files. The interface is available in English and Simplified Chinese.
