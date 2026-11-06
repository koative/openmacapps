---
name: "MissionClose"
summary: "Adds close, minimize and full-screen buttons to Mission Control window thumbnails, so you can close windows without opening them."
category: "Utilities"
tags:
  - window-management
  - window-manager
  - accessibility
  - menu-bar
repository: "https://github.com/beqaabu/MissionClose"
website: "https://beqaabu.github.io/MissionClose/"
license: "MIT"
licenseUrl: "https://github.com/beqaabu/MissionClose/blob/main/LICENSE"
download: "https://github.com/beqaabu/MissionClose/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/beqaabu/MissionClose"
  - "https://github.com/beqaabu/MissionClose/blob/main/LICENSE"
  - "https://github.com/beqaabu/MissionClose/releases"
  - "https://beqaabu.github.io/MissionClose/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/beqaabu/MissionClose/main/Resources/AppIcon.icns"
    credit: "Beqa Abuladze"
    license: "MIT; upstream app icon, trademarks retained"
---

MissionClose puts the window buttons on the thumbnails in Mission Control and App Exposé. Hover over a window and click close, minimize or full screen, or use Command-W, Command-M or Command-Q while hovering; Option-click quits the whole app. It suits people who clear windows from Mission Control and want to skip opening each one first.

It needs macOS 13 or later. The app is not notarized by Apple, so the first launch needs Open Anyway under Privacy & Security, and no buttons appear until you grant Accessibility access. It relies on details of Mission Control that Apple does not document, so the README warns that a macOS update can break it; it was built and tested on macOS 26 and 27. The app makes no network connections except an update check that runs only when you ask for one, or when you turn on the daily check, which is off by default. It is MIT-licensed.
