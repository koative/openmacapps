---
name: "Core-Monitor"
summary: "Monitors CPU, GPU, memory, temperatures and power, and sets custom fan curves, on Apple silicon Macs."
category: "Utilities"
tags:
  - system-monitoring
  - menu-bar
  - temperature
  - cpu
  - system-monitor
alternativeTo:
  - istat-menus
  - macs-fan-control
repository: https://github.com/offyotto/Core-Monitor
website: https://xnu.is-a.dev/
license: "GPL-3.0"
licenseUrl: https://github.com/offyotto/Core-Monitor/blob/main/LICENSE
download: https://github.com/offyotto/Core-Monitor/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/offyotto/Core-Monitor
  - https://github.com/offyotto/Core-Monitor/blob/main/LICENSE
  - https://github.com/offyotto/Core-Monitor/releases
  - https://apps.apple.com/us/app/core-monitor/id6762558526?mt=12
  - https://raw.githubusercontent.com/offyotto/Core-Monitor/main/README.md
  - https://xnu.is-a.dev/
  - https://github.com/offyotto/Core-Monitor/releases/tag/v17.0.5
  - https://bjango.com/mac/istatmenus/
  - https://crystalidea.com/macs-fan-control
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/offyotto/Core-Monitor/main/Core-Monitor/Assets.xcassets/AppIcon.appiconset/icon-256.png
    credit: "offyotto"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Core-Monitor shows what an Apple silicon Mac is doing inside: CPU, GPU, memory, battery, temperatures, power draw, fan speed, network and disk. You choose which readings sit in the menu bar, click for a compact popover, or open the full dashboard window.

The numbers are read from Apple's SMC sensors and standard macOS interfaces. Macs with a Touch Bar can also show live widgets there.

Fan control is the other half. You set a fixed speed or draw a custom curve, and a small privileged helper applies it. The helper expects a regular heartbeat from the app. If the connection drops, it tries to give the fans back to automatic control, and turning control off hands them back to macOS. Reinstall the bundled helper whenever you update the app.

There are two free editions. The GitHub download, a ZIP or DMG of about 3 MB, has full sensor access, fan control and Touch Bar widgets. The Mac App Store edition is sandboxed and read-only, with public APIs only, no fan control and no Touch Bar. The developer says monitoring data stays on the Mac, with no account, ads or analytics. Optional weather asks for location access and comes from Apple WeatherKit.

Core-Monitor needs macOS 13 or later on Apple silicon. The 17.0.5 ZIP holds an arm64-only app, signed with a Developer ID and notarized.

iStat Menus covers many of the same readings, along with clocks, a calendar and Bluetooth device battery levels, and it is sold after a 14-day trial. Macs Fan Control centres on fan speeds and presets, with a paid Pro version.
