---
name: "Nonja"
summary: "Menu bar inbox that reads macOS Notification Center in the background, groups alerts by app and opens their source."
category: "Productivity"
tags:
  - notifications
  - menu-bar
  - privacy
repository: "https://github.com/piro0919/nonja"
website: "https://nonja.kkweb.io"
license: "MIT"
licenseUrl: "https://github.com/piro0919/nonja/blob/main/LICENSE"
download: "https://github.com/piro0919/nonja/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/piro0919/nonja"
  - "https://github.com/piro0919/nonja/blob/main/LICENSE"
  - "https://github.com/piro0919/nonja/releases"
  - "https://nonja.kkweb.io"
assets:
  - path: ./assets/icon.png
    source: https://github.com/piro0919/nonja/releases/download/v0.2.6/Nonja-0.2.6.dmg
    credit: Nonja contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Nonja lets you turn off notification banners and still see what arrived. It reads notifications from Notification Center, groups them by app, lets you clear one app's notifications in a single click, and opens the source when you select an entry. Nothing appears on screen until you open its menu bar item. It is for people who want notifications out of their way without losing them.

It requires macOS 14 or later. The README says it was verified only on macOS 26; the project page says it is for Apple silicon Macs. It needs Full Disk Access to read the Notification Center database and Accessibility to open the source. The build is self-signed and not notarized, so the first launch needs Open Anyway in System Settings > Privacy & Security, once. Nonja depends on a database location that Apple does not document, so a macOS update can break it.
