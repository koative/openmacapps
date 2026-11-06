---
name: "AutoDockDrive"
summary: "Adds external drives to the Dock when you plug them in and removes them when you eject them."
category: "Utilities"
tags:
  - dock
  - external-drives
  - automation
  - menu-bar
repository: "https://github.com/willyhay22/AutoDockDrive"
website: "https://github.com/willyhay22/AutoDockDrive"
license: "MIT"
licenseUrl: "https://github.com/willyhay22/AutoDockDrive/blob/main/LICENSE"
download: "https://github.com/willyhay22/AutoDockDrive/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/willyhay22/AutoDockDrive"
  - "https://github.com/willyhay22/AutoDockDrive/blob/main/LICENSE"
  - "https://github.com/willyhay22/AutoDockDrive/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/willyhay22/AutoDockDrive/main/Assets/icon.iconset/icon_512x512%402x.png"
    credit: "wihay"
    license: "MIT; upstream app icon, trademarks retained"
---

AutoDockDrive runs in the menu bar and adds a Dock shortcut for each external drive, SD card or USB stick while it is connected, then removes the shortcut on eject. It skips disk images, installers and Time Machine backups, and lets you exclude drives you always keep plugged in. The menu can eject, open or copy the path of a connected drive. It suits people who want removable storage in the Dock without leaving those shortcuts there permanently.

It needs macOS 12.0 or later, on Apple silicon or Intel. The README does not say whether the build is notarized. It warns that macOS may block the first launch and tells you to choose Open Anyway in System Settings. Adding a drive restarts the Dock for a moment, and network drives are ignored by default.
