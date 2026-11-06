---
name: "MacMonitor"
summary: "Small menu bar monitor for CPU thermal state, memory, disk and battery, using ProcessInfo instead of sensors."
category: "Utilities"
tags:
  - menu-bar
  - system-monitor
  - battery
  - cpu
alternativeTo:
  - istat-menus
repository: "https://github.com/bulldozestore/macmonitor"
website: "https://github.com/bulldozestore/macmonitor"
license: "MIT"
licenseUrl: "https://github.com/bulldozestore/macmonitor/blob/main/LICENSE"
download: "https://github.com/bulldozestore/macmonitor/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/bulldozestore/macmonitor"
  - "https://github.com/bulldozestore/macmonitor/blob/main/LICENSE"
  - "https://github.com/bulldozestore/macmonitor/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/bulldozestore/macmonitor/main/MacMonitor_Thermal/AppIcon.icns"
    credit: "bulldozestore"
    license: "MIT; upstream app icon, trademarks retained"
---

MacMonitor is a lightweight menu bar monitor that shows CPU thermal state, memory use, disk usage and battery time remaining. The README explains that it reads macOS's thermal state rather than temperature sensors, so the CPU is reported as Normal, Warm, Hot or Critical rather than in degrees. It suits people who want a light status display in the menu bar and not a full monitoring suite. The interface is available in 11 languages.

It requires macOS 13 Ventura or later on Intel or Apple silicon. The release is ad hoc signed and not notarized, so the first launch needs right-click and Open. The README says the author built it without an Apple Developer account, and the only funding link is an optional coffee donation.
