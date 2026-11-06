---
name: "BitMatch"
summary: "Free camera-card offloading: copies to several drives at once, verifies with SHA-256 and writes ASC MHL manifests."
category: "Utilities"
tags:
  - backup
  - storage
  - external-drives
  - video
repository: "https://github.com/BitmatchApp/Bitmatch"
website: "https://bitmatchapp.github.io"
license: "MIT"
licenseUrl: "https://github.com/BitmatchApp/Bitmatch/blob/main/LICENSE"
download: "https://github.com/BitmatchApp/Bitmatch/releases/download/v0.2.11/BitMatch-0.2.11.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/BitmatchApp/Bitmatch"
  - "https://github.com/BitmatchApp/Bitmatch/blob/main/LICENSE"
  - "https://github.com/BitmatchApp/Bitmatch/releases"
  - "https://bitmatchapp.github.io"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/BitmatchApp/Bitmatch/main/BitMatch/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "BitMatch contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

BitMatch offloads camera cards for video and photo work. It copies a card to several drives in one pass, reads each destination back and checks it with SHA-256, and tells you when the card is safe to erase. It recognises common camera folder layouts, can check a folder or a backup against saved checksums, and writes ASC MHL manifests with PDF, CSV or JSON reports. It suits filmmakers and photographers who need proof that footage was copied correctly.

It requires macOS 15.5 or later, on Apple silicon or Intel. The project says its release build is signed and notarized. The README calls it beta software from a one-person project and asks users to try it with disposable files first. The iPad and iPhone versions have to be built from source.
