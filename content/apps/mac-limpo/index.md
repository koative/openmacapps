---
name: "MAC-LIMPO"
summary: "Free menu bar cleaner for developer leftovers such as Xcode, Docker and caches, with a disk space treemap."
category: "Utilities"
tags:
  - cleanup
  - disk-usage
  - xcode
  - storage
alternativeTo:
  - cleanmymac
  - daisydisk
repository: "https://github.com/alexkads/MAC-LIMPO"
website: "https://alexkads.github.io/MAC-LIMPO/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/alexkads/MAC-LIMPO/blob/main/LICENSE"
download: "https://github.com/alexkads/MAC-LIMPO/releases/download/v1.3.30/MAC-LIMPO-1.3.30.pkg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/alexkads/MAC-LIMPO"
  - "https://github.com/alexkads/MAC-LIMPO/blob/main/LICENSE"
  - "https://github.com/alexkads/MAC-LIMPO/releases"
  - "https://alexkads.github.io/MAC-LIMPO/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/alexkads/MAC-LIMPO/main/Assets.xcassets/AppIcon.appiconset/app_icon.png"
    credit: "MAC-LIMPO contributors"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

MAC-LIMPO finds the space that developer tools leave behind, such as Xcode and simulator data, Docker data, node_modules folders, Rust target folders, package caches and AI model files, and cleans it. It moves files to the Trash where it can, so a clean can be undone. Its Disk X-Ray view shows folders and file types as a treemap. The app lives in the menu bar, needs no account and collects no telemetry, according to the README. It suits developers whose disks fill up with build output and caches.

It requires macOS 26.6 or later. The release .pkg is not notarized, so right-click it and choose Open. The one-line installer builds the app on your Mac from source instead, using the Command Line Tools and Swift 6.4; the README says this takes two to five minutes and avoids the Gatekeeper warning. Apple Intelligence can write an optional storage recommendation.
