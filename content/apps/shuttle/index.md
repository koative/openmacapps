---
name: "Shuttle"
summary: "Menu bar shortcut menu whose items and actions are defined in a JSON file in your home folder."
category: "Utilities"
tags:
  - menu-bar
  - launcher
  - shortcuts
repository: "https://github.com/fitztrev/shuttle"
website: "https://fitztrev.github.io/shuttle/"
license: "MIT"
licenseUrl: "https://github.com/fitztrev/shuttle/blob/master/LICENSE"
download: "https://github.com/fitztrev/shuttle/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
maintenance: unmaintained
maintenanceNote: "No release since October 2016 and no commit since March 2019."
sources:
  - "https://github.com/fitztrev/shuttle"
  - "https://github.com/fitztrev/shuttle/blob/master/LICENSE"
  - "https://github.com/fitztrev/shuttle/releases"
  - "https://fitztrev.github.io/shuttle/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/fitztrev/shuttle/releases/download/v1.2.9/Shuttle.zip"
    credit: "Trevor Fitzgerald and Shuttle contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Shuttle adds a simple shortcut menu to the macOS menu bar. You open its configuration, which lives in ~/.shuttle.json, define the menu items, and each item runs its action when you click it. It suits people who repeat the same few commands or destinations and want them one click away.

The app bundle declares macOS 10.8 as its minimum and has no usable code signature, so Gatekeeper rejects it: the first launch has to be allowed in System Settings. The last release, v1.2.9, is from October 2016, and the README lists a preferences panel and keyboard hotkeys only as roadmap items, so configuration is done by editing the file.
