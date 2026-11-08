---
name: "Monitor Bar"
summary: "A menu bar system monitor styled after vim-airline, showing CPU, memory, disk, network, battery and Wi-Fi."
category: "Utilities"
tags:
  - menu-bar
  - system-monitoring
  - cpu
  - battery
  - system-monitor
alternativeTo:
  - istat-menus
repository: https://github.com/tidiemme/monitorbar
website: https://github.com/tidiemme/monitorbar
license: "MIT"
licenseUrl: https://github.com/tidiemme/monitorbar/blob/main/LICENSE
download: https://github.com/tidiemme/monitorbar/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
maintenance: "unmaintained"
maintenanceNote: "No release or commit since December 2023."
icon: ./assets/icon.png
sources:
  - https://github.com/tidiemme/monitorbar
  - https://github.com/tidiemme/monitorbar/blob/main/LICENSE
  - https://github.com/tidiemme/monitorbar/releases/tag/v1.2
  - https://github.com/tidiemme/monitorbar/releases/tag/v1.2.any
  - https://raw.githubusercontent.com/tidiemme/monitorbar/main/README.md
  - https://raw.githubusercontent.com/tidiemme/monitorbar/main/mb/MenuBar.swift
  - https://raw.githubusercontent.com/tidiemme/monitorbar/main/mb/mbApp.swift
  - https://raw.githubusercontent.com/tidiemme/monitorbar/main/mb/Meters/MeterIp.swift
  - https://bjango.com/mac/istatmenus/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tidiemme/monitorbar/main/mb/Assets.xcassets/AppIcon.appiconset/AppIcon_256.png
    credit: "tidiemme"
    license: "MIT repository asset; trademarks retained"
---

Monitor Bar puts your Mac's current load into the menu bar as one strip of coloured segments. The look comes from the vim-airline status line for Vim and the bobthefish theme for the fish shell, so it suits you if your terminal already looks like that.

The segments show battery, disk, memory and CPU use, network bandwidth, and the Wi-Fi network name with the current IP address. The app's menu lets you pick one of three widths: Compact, Normal or Extra, and the choice is kept between launches. The same menu opens Activity Monitor when a number needs a closer look. The app has no Dock icon.

iStat Menus covers far more ground. Its site lists GPU, temperature, fan and weather readings, history graphs and alerts. Monitor Bar keeps to a single bar with a handful of readings.

The last version, 1.2, came out in December 2023 in two builds, each a ZIP of under 200 KB holding a Universal app for Apple silicon and Intel. The main build needs macOS 14 Sonoma, and the one labelled "Any" runs on macOS 12 or later. The author lists Sonoma 14.1.2 as the tested system.
