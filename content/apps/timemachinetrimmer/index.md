---
name: "TimeMachineTrimmer"
summary: "Deletes old Time Machine backups and snapshots you select to free space on a Time Machine volume."
category: "Utilities"
tags:
  - backup
  - storage
  - cleanup
  - disk-usage
repository: "https://github.com/ricardoleal/TimeMachineTrimmer"
website: "https://github.com/ricardoleal/TimeMachineTrimmer"
license: "MIT"
licenseUrl: "https://github.com/ricardoleal/TimeMachineTrimmer/blob/main/LICENSE"
download: "https://github.com/ricardoleal/TimeMachineTrimmer/releases/download/v1.0.3/TimeMachineTrimmer.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ricardoleal/TimeMachineTrimmer"
  - "https://github.com/ricardoleal/TimeMachineTrimmer/blob/main/LICENSE"
  - "https://github.com/ricardoleal/TimeMachineTrimmer/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ricardoleal/TimeMachineTrimmer/main/TimeMachineTrimmer/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Ricardo Leal"
    license: "MIT; upstream app icon, trademarks retained"
---

TimeMachineTrimmer is a small native SwiftUI app that deletes old Time Machine backups and snapshots from a backup volume, so the space they hold can be reused. It suits people whose Time Machine disk is full and who want to remove older backups without working through Terminal.

The README says the app is tested only on macOS 26 Tahoe and that macOS 27 is not yet supported; the app bundle declares a minimum of macOS 14.4. The DMG is not notarized: it is signed with an Apple Development certificate rather than Developer ID, so the README tells you to right-click the app, choose Open and confirm the first launch. The project is MIT-licensed.
