---
name: "Performance Monitor"
summary: "Lightweight menu bar monitor for CPU, memory, network, disk, GPU, battery and temperatures, with history."
category: "Utilities"
tags:
  - system-monitoring
  - menu-bar
  - monitoring
alternativeTo:
  - istat-menus
repository: "https://github.com/inequitas/performancemonitor"
website: "https://perfmon.knhome.nl"
license: "MIT"
licenseUrl: "https://github.com/inequitas/performancemonitor/blob/main/LICENSE"
download: "https://github.com/inequitas/performancemonitor/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/inequitas/performancemonitor"
  - "https://github.com/inequitas/performancemonitor/blob/main/LICENSE"
  - "https://github.com/inequitas/performancemonitor/releases"
  - "https://perfmon.knhome.nl"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/inequitas/performancemonitor/main/icon/AppIcon.iconset/icon_1024x1024.png"
    credit: "Performance Monitor contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Performance Monitor shows live readings in the menu bar as a sparkline or as text, and opens a popover with cards for CPU, memory, network, disk, GPU, battery and connected Bluetooth devices. Detail windows show per-core usage, top processes, network latency, and temperatures from individual sensors. History is kept for one hour, 48 hours and 90 days, and sleep and thermal throttling are marked on the graphs. A floating panel can stay above full-screen apps, and an optional JSON snapshot can feed SwiftBar, xbar or SketchyBar. It is for anyone who wants a light, always-visible view of what is loading the Mac.

It requires macOS 14 or later on Apple silicon; the README says the build is arm64-only and will not run on Intel Macs. The app is ad-hoc signed with no Developer ID, so the README says to right-click it and choose Open on first launch. It asks for Bluetooth permission to read device batteries. The README lists three network requests: an update check against GitHub, an optional public IP lookup, and a latency probe to a host you choose. It states there is no telemetry or account. The project is free and MIT licensed.
