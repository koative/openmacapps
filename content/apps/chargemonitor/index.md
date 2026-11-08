---
name: "ChargeMonitor"
summary: "Menu-bar battery panel with charging power, cycle count and time remaining, plus the apps that use significant energy."
category: "Utilities"
tags:
  - battery
  - menu-bar
  - system-monitoring
  - power
repository: "https://github.com/CrashSystemZ/ChargeMonitor"
website: "https://github.com/CrashSystemZ/ChargeMonitor"
license: "MIT"
licenseUrl: "https://github.com/CrashSystemZ/ChargeMonitor/blob/main/LICENSE"
download: "https://github.com/CrashSystemZ/ChargeMonitor/releases/download/v1.2.0/ChargeMonitor.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/CrashSystemZ/ChargeMonitor"
  - "https://github.com/CrashSystemZ/ChargeMonitor/blob/main/LICENSE"
  - "https://github.com/CrashSystemZ/ChargeMonitor/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/CrashSystemZ/ChargeMonitor/releases/download/v1.2.0/ChargeMonitor.dmg
    credit: ChargeMonitor contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

ChargeMonitor is a menu-bar utility that shows the battery percentage and opens a popover with more detail: power source and adapter, charging state and wattage, power draw, cycle count and time remaining. It also lists apps with significant energy impact, which the author describes as a heuristic built from CPU time, wakeups and disk activity rather than a precise measurement. It is for people who want more battery information than the system menu shows.

The app declares macOS 26 as its minimum version and ships a universal binary for Apple silicon and Intel. The DMG is Developer ID signed and accepted by Gatekeeper as notarized, and the README says the app needs no extra permissions. The project states that it sends no data to external servers; its only network traffic is an update check against the public GitHub Releases API.
