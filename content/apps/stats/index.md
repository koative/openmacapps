---
name: "Stats"
summary: "Keep an eye on CPU, memory, network activity and more from your menu bar."
category: "Utilities"
tags: ["monitoring", "menu-bar", "native", "system-monitor"]
alternativeTo: ["istat-menus", "task-manager"]
repository: "https://github.com/exelban/stats"
website: "https://mac-stats.com"
license: "MIT"
licenseUrl: "https://github.com/exelban/stats/blob/master/LICENSE"
download: "https://github.com/exelban/stats/releases"
freeDownload: true
homebrew: "stats"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/exelban/stats", "https://github.com/exelban/stats/blob/master/LICENSE", "https://mac-stats.com", "https://github.com/exelban/stats/blob/master/README.md", "https://github.com/exelban/stats/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/exelban/stats/master/Stats/Supporting%20Files/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "Stats contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

Stats puts live system readings in the menu bar. You choose which modules to show, and each one places a small reading there, such as a CPU graph or network speed. Clicking it opens a popup with more detail. The modules cover:

- CPU and GPU utilisation
- memory and disk usage
- network traffic, including your public IP address
- battery level
- temperature, voltage and power sensors
- connected Bluetooth devices
- a clock with several time zones

It covers much of the same ground as iStat Menus, and Stats is free and MIT-licensed. Fan control is the exception: the developer has moved that feature to legacy status with no further fixes. Sensor names on Apple silicon are thermal zones, not individual cores, and Apple changes the sensor keys with each chip.

The README lists macOS 12 Monterey or newer and says beta versions of macOS are not supported; an older build for earlier systems is on the project website. On macOS 26 the app must be allowed under System Settings › Menu Bar before its icons appear.

The developer states that Stats collects no telemetry or analytics. Its only outside requests go to the developer's own API for update checks and the public IP lookup, with GitHub as a fallback. An optional Remote module can stream metrics to an online System Stats account; it is set up separately and is not needed for local monitoring. The Sensors and Bluetooth modules use the most energy, so turning them off lowers the app's own load.
