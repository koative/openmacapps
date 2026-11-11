---
name: "Mac Performance Monitor"
summary: "Menu bar monitor that records CPU, memory, GPU, network, disk, battery and per-process history so you can trace slowdowns."
category: "Utilities"
tags:
  - system-monitoring
  - system-monitor
  - menu-bar
  - battery
alternativeTo:
  - istat-menus
repository: "https://github.com/Zesty0wl/mac-performance-monitor"
website: "https://macperformancemonitor.com"
license: "MIT"
licenseUrl: "https://github.com/Zesty0wl/mac-performance-monitor/blob/main/LICENSE"
download: "https://github.com/Zesty0wl/mac-performance-monitor/releases"
homebrew: "mac-performance-monitor"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
screenshots:
  - src: "./assets/screenshot.webp"
    alt: "Explorer lining up memory pressure with the CPU and memory footprint of the processes behind it."
    source: "https://github.com/Zesty0wl/mac-performance-monitor/blob/a338f249b4c389e3b95d36c713a98ffd00df419f/docs/images/explorer.png"
    credit: "Mac Performance Monitor contributors"
sources:
  - "https://github.com/Zesty0wl/mac-performance-monitor"
  - "https://github.com/Zesty0wl/mac-performance-monitor/blob/main/LICENSE"
  - "https://github.com/Zesty0wl/mac-performance-monitor/releases"
  - "https://macperformancemonitor.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Zesty0wl/mac-performance-monitor/main/MacPerformanceMonitorAppIcon.png"
    credit: "Mac Performance Monitor contributors"
    license: "MIT; upstream app icon, trademarks retained"
  - path: "./assets/screenshot.webp"
    source: "https://github.com/Zesty0wl/mac-performance-monitor/blob/a338f249b4c389e3b95d36c713a98ffd00df419f/docs/images/explorer.png"
    credit: "Mac Performance Monitor contributors"
    license: "MIT; upstream documentation screenshot, trademarks retained"
---

Mac Performance Monitor shows live CPU, memory, GPU, network, disk, battery and sensor readings in the menu bar, and can keep recording them in the background. When the Mac slowed down earlier, its Explorer view lets you go back to that moment and compare system charts with up to eight processes, including ones that have since quit. It also groups an app's helper processes together, shows battery health and power draw over months, and lists accessory battery levels.

Alerts look for continued growth in swap or process memory rather than fixed thresholds. On macOS 27 an Ask panel uses Apple's on-device model to explain the recorded readings in plain language, and a bundled read-only MCP server and command-line tool let agents such as Claude Code or Codex query the history. It is for people who want to find out why their Mac got slow, not just watch numbers. There is no usage telemetry, and recordings stay on the Mac.

The app needs macOS 15 or later on Apple silicon; Intel Macs are not supported. It ships as a pkg installer that is signed with a Developer ID and notarized, updates through Sparkle and is also in Homebrew. Some readings need an optional privileged helper.
