---
name: "Suishouqian"
summary: "Moves large macOS apps to an external drive and leaves a symlink behind, so they still open from their old location."
category: "Utilities"
tags:
  - storage
  - app-management
  - external-drives
  - disk-usage
repository: "https://github.com/xfanchuang-dot/suishouqian"
website: "https://github.com/xfanchuang-dot/suishouqian"
license: "MIT"
licenseUrl: "https://github.com/xfanchuang-dot/suishouqian/blob/main/LICENSE"
download: "https://github.com/xfanchuang-dot/suishouqian/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/xfanchuang-dot/suishouqian"
  - "https://github.com/xfanchuang-dot/suishouqian/blob/main/LICENSE"
  - "https://github.com/xfanchuang-dot/suishouqian/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/xfanchuang-dot/suishouqian/releases/download/v3.1.0/Suishouqian-3.1.0.dmg"
    credit: "Suishouqian contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Suishouqian moves large applications you rarely use from the internal disk to an external drive and leaves a symbolic link at the original path, so macOS still finds the app where it expects it. Before each move it makes a backup and rolls back if a step fails. A health check looks for broken links and leftovers, and a history records past migrations.

It is for people whose internal SSD fills up with apps such as Xcode. The free version covers moving apps out and back, the health check, disk speed and SMART checks, and the migration history. The Pro features in the README (migration suggestions, versioned backups and multi-Mac config sync) are still in development; a one-time ¥29 purchase unlocks them when they ship and is optional.

Requires macOS 14 or later on Apple silicon; the release build is arm64 only. The DMG is unsigned and not notarized, so the first launch needs Control-click, then Open. Drives formatted as exFAT are refused because they do not support symlinks. The README is written mainly in Chinese, with an English section.
