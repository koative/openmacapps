---
name: "Mac Resource Monitor"
summary: "Menu bar CPU monitor that lists the processes using the processor, so you can end the one slowing your Mac."
category: "Utilities"
tags:
  - system-monitor
  - menu-bar
  - native
repository: "https://github.com/x0c/MacResourceMonitor"
website: "https://github.com/x0c/MacResourceMonitor"
license: "MIT"
licenseUrl: "https://github.com/x0c/MacResourceMonitor/blob/main/LICENSE"
download: "https://github.com/x0c/MacResourceMonitor/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/x0c/MacResourceMonitor"
  - "https://github.com/x0c/MacResourceMonitor/blob/main/LICENSE"
  - "https://github.com/x0c/MacResourceMonitor/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/x0c/MacResourceMonitor/HEAD/MacResourceMonitor/Assets.xcassets/AppIcon.appiconset/AppIcon-mac-app-512x512@2x.png"
    credit: "x0c"
    license: "MIT; upstream app icon, trademarks retained"
---

Mac Resource Monitor is a menu bar CPU monitor. Click the icon to open a table of processes, showing whole-machine CPU and physical memory use for each row. You can sort by column, pin a row so it does not move while you click, and end a process from its row. A small command-line tool, mrm, supports scripted use with JSON output. It suits anyone whose Mac feels stuck and who wants to find the cause without opening Activity Monitor.

Mac Resource Monitor requires macOS 26 or later, on Apple silicon and Intel. The README describes its releases as signed and notarized, and updates arrive through Sparkle. Launch at login is off by default. The README lists sensor dashboards, a Dock icon and a Mac App Store build among things the app does not include.
