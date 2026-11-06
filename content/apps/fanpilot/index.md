---
name: "FanPilot"
summary: "Temperature monitor and fan controller for Apple silicon Macs, with a helper that hands fans back to macOS."
category: "Utilities"
tags:
  - system-monitoring
  - menu-bar
  - temperature
  - hardware
alternativeTo:
  - macs-fan-control
repository: "https://github.com/zyvren/FanPilot"
website: "https://github.com/zyvren/FanPilot"
license: "MIT"
licenseUrl: "https://github.com/zyvren/FanPilot/blob/main/LICENSE"
download: "https://github.com/zyvren/FanPilot/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/zyvren/FanPilot"
  - "https://github.com/zyvren/FanPilot/blob/main/LICENSE"
  - "https://github.com/zyvren/FanPilot/releases"
---

FanPilot shows the temperature sensors of an Apple silicon Mac in the menu bar and in a main window, and lets you set each fan's speed: manual, maximum, rules that raise speed when a sensor passes a limit, or a curve you draw. Fan writes go through a small root helper that clamps every target to the fan's hardware limits, returns control to macOS when the app quits or the Mac sleeps, and runs the fans at full speed after two readings of 95 °C or more. It suits people with long, heavy workloads who want to choose how their Mac cools.

It requires an Apple silicon Mac (the README lists M1 to M5) running macOS 14 or later, and the release build is Apple silicon only. MacBook Air models have no fans and show temperatures only. The app is not notarized, so approve it once in System Settings under Privacy & Security with Open Anyway. Fan control needs the helper, which you install from Settings with an administrator password. The author reports testing on one MacBook Pro M5 Pro; other models are untested.
