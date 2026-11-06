---
name: "Mystral"
summary: "Menu bar app that shows temperatures and fan speeds and runs custom fan curves on Apple silicon Macs."
category: "Utilities"
tags:
  - system-monitoring
  - menu-bar
  - temperature
  - apple-silicon
alternativeTo:
  - macs-fan-control
repository: "https://github.com/fexxdev/Mystral"
website: "https://github.com/fexxdev/Mystral"
license: "MIT"
licenseUrl: "https://github.com/fexxdev/Mystral/blob/main/LICENSE"
download: "https://github.com/fexxdev/Mystral/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/fexxdev/Mystral"
  - "https://github.com/fexxdev/Mystral/blob/main/LICENSE"
  - "https://github.com/fexxdev/Mystral/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/fexxdev/Mystral/main/Mystral/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Mystral contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Mystral is a menu bar app for Apple silicon Macs that reads temperatures and fan speeds and lets you set fan curves. It has a live dashboard of recent CPU and GPU temperatures, a curve editor with per-fan overrides, and profiles such as Silent, Balanced, Performance and Full Blast that can switch by power source or frontmost app. Alerts cover high temperatures and fans that stop responding, and a 30-second stress test checks that the curve reacts. It suits people who want fans quieter or louder than macOS's automatic behaviour.

Requires macOS 14 or later on an M1 to M5 Mac. The v1.1.5 DMG is ad-hoc signed and not notarized, so the first launch needs right-click › Open. Fan control runs through a root-owned launchd helper that asks for your password at install. The README says the fan unlock works by bypassing macOS's thermal daemon, so watch temperatures when you set custom curves. The built-in updater accepts only strictly code-signed release DMGs.
