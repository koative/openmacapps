---
name: "Tabnax"
summary: "Keyboard switcher for windows, browser tabs and apps, with stable letter addresses and six layouts."
category: "Productivity"
tags:
  - app-switcher
  - window-management
  - keyboard-shortcuts
  - launcher
repository: "https://github.com/danmartuszewski/tabnax"
website: "https://github.com/danmartuszewski/tabnax"
license: "Apache-2.0"
licenseUrl: "https://github.com/danmartuszewski/tabnax/blob/main/LICENSE"
download: "https://github.com/danmartuszewski/tabnax/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/danmartuszewski/tabnax"
  - "https://github.com/danmartuszewski/tabnax/blob/main/LICENSE"
  - "https://github.com/danmartuszewski/tabnax/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/danmartuszewski/tabnax/main/macos/Tabnax/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Daniel Martuszewski"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Tabnax is a native switcher that puts windows, browser tabs and apps into one keyboard-driven list. Every destination gets a stable letter, so typing it jumps there on the final keypress, and pinned letters can launch apps that are closed. Six layouts, from a compact list to a grid, and six themes are available. It is for people who juggle many windows and browser tabs and want Command-Tab to reach further.

It needs a Mac with Apple silicon running macOS 15 or later, and Accessibility permission to list and focus windows. The release DMG is signed with the project's own certificate but is not notarized by Apple, so the first launch needs Open Anyway in Privacy & Security unless you install with Homebrew, which handles that step. Arc, Chrome, Edge and Brave tabs work after you allow Automation for each browser; Firefox, Zen and Safari need a companion extension, and the Safari one currently requires Safari's unsigned-extension developer setting. The README calls the project in active development, keeps versions at 0.x, and says Intel builds are not part of the current implementation.
