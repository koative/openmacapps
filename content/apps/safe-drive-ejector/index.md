---
name: "Safe Drive Ejector"
summary: "Menu bar utility that ejects external drives before sleep, closes apps holding them and remounts them on wake."
category: "Utilities"
tags:
  - external-drives
  - menu-bar
  - sleep
  - automation
repository: "https://github.com/siraj-bd/Safe-Drive-Ejector-macOS"
website: "https://github.com/siraj-bd/Safe-Drive-Ejector-macOS"
license: "MIT"
licenseUrl: "https://github.com/siraj-bd/Safe-Drive-Ejector-macOS/blob/main/LICENSE"
download: "https://github.com/siraj-bd/Safe-Drive-Ejector-macOS/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/siraj-bd/Safe-Drive-Ejector-macOS"
  - "https://github.com/siraj-bd/Safe-Drive-Ejector-macOS/blob/main/LICENSE"
  - "https://github.com/siraj-bd/Safe-Drive-Ejector-macOS/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/siraj-bd/Safe-Drive-Ejector-macOS/main/assets/AppIcon.icns"
    credit: "Siraj"
    license: "MIT; upstream app icon, trademarks retained"
---

Safe Drive Ejector watches for sleep and logout, unmounts external disks before the Mac loses power to their ports, and remounts them on wake. Before it ejects a drive, it asks apps that have files open on that volume to save and quit, and it can open the mounted volumes in Finder. It is for people who carry external SSDs or HDDs with a MacBook and see the "disk not ejected properly" warning. The README says the core engine uses macOS's own `diskutil` and IOKit.

It requires macOS 12 or later, as a universal build for Apple silicon and Intel. The README says it is distributed without a paid Apple Developer certificate, so macOS shows a Gatekeeper warning on first launch. Approve it under System Settings > Privacy & Security. The app is MIT-licensed and free.
