---
name: "OpenStats"
summary: "Menu bar monitor for CPU, GPU, memory, network and temperatures, with fan control and keep-awake."
category: "Utilities"
tags:
  - system-monitor
  - monitoring
  - menu-bar
alternativeTo:
  - istat-menus
  - macs-fan-control
repository: "https://github.com/gentpan/OpenStats"
website: "https://getopenstats.com"
license: "MIT"
licenseUrl: "https://github.com/gentpan/OpenStats/blob/main/LICENSE"
download: "https://github.com/gentpan/OpenStats/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/gentpan/OpenStats"
  - "https://github.com/gentpan/OpenStats/blob/main/LICENSE"
  - "https://github.com/gentpan/OpenStats/releases/latest"
  - "https://getopenstats.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/gentpan/OpenStats/main/App/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "GiantAccel, LLC"
    license: "MIT (repository); upstream app icon, trademarks retained"
---

OpenStats shows what the Mac is doing from the menu bar: per-core CPU load, GPU use, memory pressure, network speed, disk, battery and temperatures, each with its own popover and a larger main window. It can set fan speeds, keep the Mac awake (including with the lid closed), clear caches, uninstall apps and manage startup items. It suits people who want to watch and adjust the hardware from the menu bar without a separate app for each job.

It requires macOS 14 or later on Apple silicon or Intel. On Intel some readings are missing, and the Apple Intelligence process explanations need macOS 26 and Apple silicon. Builds are signed with a Developer ID and notarized, according to the install section of the README. The project describes itself as free of telemetry, but some features make network requests: an IP cleanliness lookup when you open network details, a ping probe to a target you set, and a daily version check. Fan control needs a helper that you approve once in Login Items. An optional account syncs settings.
