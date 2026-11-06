---
name: "OpenClean"
summary: "Cleaner that finds caches and junk, removes apps with their leftovers, maps disk usage and keeps removed files in quarantine."
category: "Utilities"
tags:
  - cleanup
  - disk-cleaner
  - uninstaller
  - storage
alternativeTo:
  - cleanmymac
repository: "https://github.com/leoAnimesh/OpenClean"
website: "https://leoanimesh.github.io/OpenClean/"
license: "GPL-3.0"
licenseUrl: "https://github.com/leoAnimesh/OpenClean/blob/main/LICENSE"
download: "https://github.com/leoAnimesh/OpenClean/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/leoAnimesh/OpenClean"
  - "https://github.com/leoAnimesh/OpenClean/blob/main/LICENSE"
  - "https://github.com/leoAnimesh/OpenClean/releases/latest"
  - "https://leoanimesh.github.io/OpenClean/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/leoAnimesh/OpenClean/releases/download/v0.7.0/OpenClean-0.7.0.dmg"
    credit: "OpenClean contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

OpenClean is a free, open-source cleaner for macOS. Its Smart Scan finds caches, logs, the Trash and other leftovers and says why each item is safe to remove. Uninstalling an app also removes the files it leaves behind, Space Lens maps large, old and duplicate files, and a menu bar monitor shows CPU, GPU, memory, disk and network use. Items that cannot simply be rebuilt go to a quarantine first, and History can restore them for up to 90 days (7 by default). It suits people who want to read and undo what a cleaner does, and it also clears developer leftovers such as Xcode, npm and Cargo caches.

It needs macOS 14 or later and runs on Apple silicon and Intel. The release DMG is signed and notarized by Apple. Full Disk Access is needed once so the app can see the Trash and protected folders, and cleaning system caches asks for an administrator password. The only network request is a daily check for a new release, which can be switched off. The project says it is independent of MacPaw, the maker of CleanMyMac.
