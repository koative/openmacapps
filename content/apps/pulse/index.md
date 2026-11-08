---
name: "Pulse"
summary: "A menu-bar system monitor for CPU, memory, temperatures, fans, network, disk and power."
category: "Utilities"
tags: ["menu-bar", "system-monitoring", "system-monitor"]
alternativeTo: ["istat-menus"]
repository: "https://github.com/emgeorrk/pulse"
website: "https://github.com/emgeorrk/pulse"
license: "MIT"
licenseUrl: "https://github.com/emgeorrk/pulse/blob/main/LICENSE"
download: "https://github.com/emgeorrk/pulse/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/emgeorrk/pulse", "https://github.com/emgeorrk/pulse/blob/main/LICENSE", "https://github.com/emgeorrk/pulse/releases", "https://raw.githubusercontent.com/emgeorrk/pulse/main/README.md", "https://github.com/emgeorrk/pulse/releases/tag/v1.0.6", "https://bjango.com/mac/istatmenus/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/emgeorrk/pulse/main/build/darwin/AppIcon.icns", "credit": "Egor Merkushev", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Pulse puts live readings from your Mac next to the clock. You pin the metrics you want in the menu bar, and clicking the icon opens a dropdown with a summary for every group. The app has no Dock icon and no window.

- CPU load, overall and per core, with an optional small graph in the menu bar.
- Memory and swap in use, and free disk space with read and write speeds.
- Chip temperatures, fan speeds and GPU load.
- Network upload and download speeds with running totals.
- Power drawn by the CPU, GPU and Neural Engine.
- Battery charge, health, cycle count, temperature and time remaining.

Sections for sensors a Mac does not have are hidden, so a fanless MacBook Air shows no fan readings. Settings sit in the same dropdown: an update interval of 1, 2, 3 or 5 seconds, Celsius or Fahrenheit, GB or GiB, and launch at login. Pulse reads sensors as a normal user and never asks for an admin password.

The idea comes from Vitals, a GNOME extension, rebuilt for the Mac in Go. Version 1.0.6 is an Apple silicon ZIP for macOS 13 or later. Apple has not signed it, so you clear the quarantine flag with `xattr` before the first launch. On an Intel Mac you install through the Homebrew tap, which builds Pulse locally, or build it yourself. Intel temperature and fan readings have not been tested and can be missing or wrong.

iStat Menus covers the same sensors and adds history graphs, lists of the apps using the most resources, and fan speed control. Pulse's README lists live readings and one chart, the small CPU graph.
