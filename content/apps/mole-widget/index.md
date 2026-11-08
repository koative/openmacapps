---
name: "Mole Widget"
summary: "A desktop-level system monitor showing CPU, memory, disk, network, battery and top processes in a terminal style."
category: "Utilities"
tags:
  - system-monitoring
  - widgets
  - desktop
  - system-monitor
repository: https://github.com/TadelUnso/mole-widget
website: https://github.com/TadelUnso/mole-widget
license: "MIT"
licenseUrl: https://github.com/TadelUnso/mole-widget/blob/main/LICENSE
download: https://github.com/TadelUnso/mole-widget/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/TadelUnso/mole-widget
  - https://github.com/TadelUnso/mole-widget/blob/main/LICENSE
  - https://github.com/TadelUnso/mole-widget/releases
  - https://raw.githubusercontent.com/TadelUnso/mole-widget/main/README.md
  - https://github.com/TadelUnso/mole-widget/releases/tag/v0.8.4
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/TadelUnso/mole-widget/main/Resources/AppIcon.icns
    credit: "Serhii Bezbabnykh"
    license: "MIT repository asset; trademarks retained"
---

Mole Widget keeps your Mac's vital numbers on the desktop itself, in a borderless panel that sits above the wallpaper and below your windows. Its look borrows from the terminal status screen of the mole command-line tool (`mo status`), and it is written in Swift and SwiftUI.

The panel is split into sections:

- a header with the chip, RAM, macOS version, uptime and a health score from 0 to 100
- CPU usage, the three busiest cores, load average, chip temperature and a trend line
- memory, root disk space with read and write speed, and network rates with the active interface and local IP
- battery charge, health, cycle count and temperature, plus the three processes using the most CPU

Clicking a section title opens Activity Monitor. The panel shows on every Space, stays out of Mission Control and ⌘Tab, and keeps its position and width (490 to 880 points) between launches. A lock icon pins both, and an eye icon hides the panel until you choose Show on desktop from the menu bar.

The menu bar icon carries the settings: opacity, which sections appear, a refresh rate of 1, 2 or 5 seconds, and font size and style. It can also show live CPU, memory and temperature figures that turn yellow above 60% and red above 85%. There is no Dock icon.

The app needs macOS 14 or later, and the app in the 0.8.4 DMG is built for Apple silicon only and notarized with a Developer ID. Whether you install the DMG or the developer's Homebrew cask, it updates itself through Sparkle.

A Usage History window records CPU and memory load for as long as 12 hours. Drag its scrubber to a past moment and it lists the processes that used the most at that time.
