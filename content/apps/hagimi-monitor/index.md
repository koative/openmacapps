---
name: "HagimiMonitor"
summary: "Menu bar monitor for CPU, GPU, memory, storage, network, battery, Bluetooth and displays, with history reports."
category: "Utilities"
tags:
  - menu-bar
  - system-monitoring
  - monitoring
  - native
alternativeTo:
  - istat-menus
repository: "https://github.com/Acerola-1/hagimi-monitor"
website: "https://acerola-1.github.io/hagimi-monitor/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/Acerola-1/hagimi-monitor/blob/main/LICENSE"
download: "https://github.com/Acerola-1/hagimi-monitor/releases"
freeDownload: true
homebrew: "hagimimonitordirect"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Acerola-1/hagimi-monitor"
  - "https://github.com/Acerola-1/hagimi-monitor/blob/main/LICENSE"
  - "https://github.com/Acerola-1/hagimi-monitor/releases"
  - "https://acerola-1.github.io/hagimi-monitor/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Acerola-1/hagimi-monitor/main/HagimiMonitor/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Acerola"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

HagimiMonitor shows CPU, GPU, memory, storage, network, battery, connected Bluetooth devices and display status in the menu bar, with a compact ring icon and a glass panel that expands for detail. Each module can be reordered in the panel. It also samples the readings into a local SQLite store, produces HTML reports with trend charts, and gives a 0 to 100 health score. It suits people who want a system overview permanently visible in the menu bar.

HagimiMonitor requires macOS 15 or later on Apple silicon. The GitHub build is free and is notarized by Apple. The App Store build is a paid, sandboxed version with fewer features: CPU temperature, fan speed, display brightness control, media key handling and the per-process lists for storage and network are only in the GitHub build. The project is AGPL-3.0, and the author offers a commercial licence for anyone who wants to ship a closed-source product.
