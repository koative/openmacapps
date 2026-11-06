---
name: "FindDiskKiller"
summary: "Finds the app, files or disk device behind sustained disk activity, with local monitoring."
category: "Utilities"
tags:
  - disk-usage
  - system-monitoring
  - inspection
repository: "https://github.com/jianyintang/find-disk-killer"
website: "https://finddiskkiller.com"
license: "MIT"
licenseUrl: "https://github.com/jianyintang/find-disk-killer/blob/main/LICENSE"
download: "https://finddiskkiller.com/en/download/"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jianyintang/find-disk-killer"
  - "https://github.com/jianyintang/find-disk-killer/blob/main/LICENSE"
  - "https://github.com/jianyintang/find-disk-killer/releases/latest"
  - "https://finddiskkiller.com/en/download/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jianyintang/find-disk-killer/releases/download/v1.3.18/FindDiskKiller-1.3.18.dmg"
    credit: "Jianyin Tang"
    license: "MIT; upstream app icon, trademarks retained"
---

FindDiskKiller is for the moment when the disk is busy and the process list does not explain why. It compares CPU, disk, network, memory and time-range trends for each app, then lists the folders and files that app touches. When you need direct evidence, you can start a time-limited trace of a folder or file that records requested reads and writes and the processes behind them. Monitoring and analysis run on your Mac, and the README says the current release has no telemetry, analytics or ads.

It requires macOS 14 or later and runs natively on Apple silicon and Intel. The DMG is Developer ID signed and notarized. Basic monitoring needs no administrator approval. File tracing asks macOS for approval the first time you start it, and protected locations may also need Full Disk Access. The app is MIT licensed and its source is on GitHub.
