---
name: "Light Stats"
summary: "Menu bar monitor for CPU, GPU and memory pressure that condenses them into a 0-100 health score."
category: "Utilities"
tags:
  - system-monitoring
  - system-monitor
  - menu-bar
  - monitoring
alternativeTo:
  - istat-menus
repository: "https://github.com/EvilIrving/light-stats"
website: "https://evilirving.github.io/light-stats/"
license: "MIT"
licenseUrl: "https://github.com/EvilIrving/light-stats/blob/main/LICENSE"
download: "https://github.com/EvilIrving/light-stats/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/EvilIrving/light-stats"
  - "https://github.com/EvilIrving/light-stats/blob/main/LICENSE"
  - "https://github.com/EvilIrving/light-stats/releases/latest"
  - "https://evilirving.github.io/light-stats/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/EvilIrving/light-stats/main/Light%20Stats/Assets.xcassets/AppIcon.appiconset/1024.png"
    credit: "EvilIrving"
    license: "MIT; upstream app icon, trademarks retained"
---

Light Stats keeps live system pressure visible in the menu bar: CPU saturation, memory pressure, load average, thermal state and GPU use feed a 0-100 score that drops only when the Mac hits a bottleneck. Clicking the item opens a panel with per-core charts, top processes, battery and disk figures, and network speed. Optional modules add AI subscription usage for several providers, proxy and exit-node detection, a Finder context menu, window snapping, and a memory cleanup view. Routine sampling uses native macOS APIs and stays on the Mac.

It needs an Apple silicon Mac running macOS 14.6 or later; the README says macOS 14, but the app's own minimum is 14.6, and Intel Macs are not supported. Release builds are signed and notarized. Several features are off by default and need permission or credentials you supply, such as AI monitoring and the Accessibility permission for window management. Some features belong to a Pro tier: early users who launched the app during the gift period keep Pro, and later users enter an activation code after the first paid release.
