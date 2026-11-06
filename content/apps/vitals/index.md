---
name: "Vitals"
summary: "Open-source system monitor for Apple silicon Macs: CPU, GPU, sensors, processes, disks, network and system health."
category: "Utilities"
tags:
  - system-monitoring
  - menu-bar
  - apple-silicon
  - hardware
alternativeTo:
  - istat-menus
repository: "https://github.com/slawek19926/Vitals"
website: "https://github.com/slawek19926/Vitals"
license: "GPL-3.0"
licenseUrl: "https://github.com/slawek19926/Vitals/blob/main/LICENSE"
download: "https://github.com/slawek19926/Vitals/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/slawek19926/Vitals"
  - "https://github.com/slawek19926/Vitals/blob/main/LICENSE"
  - "https://github.com/slawek19926/Vitals/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/slawek19926/Vitals/main/Resources/AppIcon.icns"
    credit: "Vitals contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Vitals is an open-source system monitor for macOS. It shows per-core CPU and GPU activity, Neural Engine and media engine use, memory, temperatures and fan speeds from the SMC, battery and power figures, processes, disks, network traffic and a set of system health checks. Readings can appear as floating panels and as compact values in the menu bar, and thresholds can trigger macOS notifications. The README says it has no telemetry and no third-party dependencies, and that it is written in Swift and C++.

The app bundle requires macOS 13 or later, and the binary is built for Apple silicon only. The releases are signed with a development certificate and are not notarized, so the first launch has to be allowed under System Settings > Privacy & Security. Some figures, such as CPU and memory of other users' processes and the power counters, need a privileged helper that asks for administrator approval; without it those fields show "No access" or a dash. The author says Vitals is free and will stay free, and asks for donations toward an Apple Developer Program membership.
