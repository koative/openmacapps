---
name: "MemStats"
summary: "Menu bar monitor for memory use, swap, memory pressure and top apps and processes, broken down per user."
category: "Utilities"
tags:
  - system-monitoring
  - monitoring
  - menu-bar
  - memory
repository: "https://github.com/sown-oss/MemStats"
website: "https://memstats.chungxon.dev"
license: "MIT"
licenseUrl: "https://github.com/sown-oss/MemStats/blob/main/LICENSE"
download: "https://github.com/sown-oss/MemStats/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/sown-oss/MemStats"
  - "https://github.com/sown-oss/MemStats/blob/main/LICENSE"
  - "https://github.com/sown-oss/MemStats/releases/latest"
  - "https://memstats.chungxon.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/sown-oss/MemStats/releases/download/v1.3.0/MemStats-1.3.0.zip"
    credit: "Le Trung Son"
    license: "MIT; upstream app icon, trademarks retained"
---

MemStats sits in the menu bar and shows memory use in one popover: a donut of users, top apps and processes, memory pressure, swap and a short bounded history. Right-clicking an app or process offers Quit or Force Quit, and Force Quit stops it immediately after a confirmation. It suits people who share a Mac between several user accounts and want to see who is using the memory.

It needs macOS 14 or later on Apple silicon or Intel; the release is a universal build. The app is ad-hoc signed and not notarized, so the first launch must be allowed in System Settings. It is distributed outside the Mac App Store because it needs the App Sandbox turned off to run top and read other users' processes.
