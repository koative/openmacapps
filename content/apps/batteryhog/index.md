---
name: "Battery Hog"
summary: "Menu bar monitor for battery power, per-app energy use and charge history, with drain tips. All data stays on your Mac."
category: "Utilities"
tags:
  - battery
  - menu-bar
  - system-monitoring
  - power
repository: "https://github.com/luke-fairbanks/BatteryHog"
website: "https://luke-fairbanks.github.io/BatteryHog/"
license: "MIT"
licenseUrl: "https://github.com/luke-fairbanks/BatteryHog/blob/main/LICENSE"
download: "https://github.com/luke-fairbanks/BatteryHog/releases/download/v1.5.0/BatteryHog-1.5.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/luke-fairbanks/BatteryHog"
  - "https://github.com/luke-fairbanks/BatteryHog/blob/main/LICENSE"
  - "https://github.com/luke-fairbanks/BatteryHog/releases"
  - "https://luke-fairbanks.github.io/BatteryHog/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/luke-fairbanks/BatteryHog/main/src/icon_1024.png"
    credit: "Luke Fairbanks"
    license: "MIT; upstream app icon, trademarks retained"
---

Battery Hog shows what is draining your Mac's battery. It displays live system power and memory use, ranks apps by a relative CPU and memory impact, keeps a real charge history, and suggests likely causes of fast drain. The per-app figure is a comparison aid, not a measurement in watts. Monitoring reads only from built-in macOS tools and uploads nothing. It suits anyone who wants to see what is using their battery.

It needs macOS 11 or later on Apple silicon. The README says release builds are signed and notarized, so they open with a double-click. Update checks stay off until you opt in, and alerts are opt-in too. Two features are optional: Agent Mode, which queues heavy builds while on battery, and a helper that allows Low Power Mode changes without an admin password, which otherwise asks for one each time.
