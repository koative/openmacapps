---
name: PureMac
summary: "Finds caches, app leftovers, duplicates and large files on your Mac and removes the ones you confirm."
category: Utilities
tags:
  - cleanup
  - storage
  - app-management
  - uninstaller
  - disk-cleaner
alternativeTo:
  - cleanmymac
  - appcleaner
  - ccleaner
repository: https://github.com/momenbasel/PureMac
website: https://www.moamenbasel.com/PureMac/
license: MIT
licenseUrl: https://github.com/momenbasel/PureMac/blob/main/LICENSE
download: https://github.com/momenbasel/PureMac/releases
freeDownload: true
homebrew: "puremac"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/momenbasel/PureMac", "https://github.com/momenbasel/PureMac/blob/main/LICENSE", "https://raw.githubusercontent.com/momenbasel/PureMac/main/README.md", "https://github.com/momenbasel/PureMac/releases", "https://github.com/momenbasel/PureMac/releases/tag/v3.2.0", "https://www.moamenbasel.com/PureMac/", "https://macpaw.com/cleanmymac"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/momenbasel/PureMac/blob/7e0d58d0a58d88b3b3d2a417c66220209f91a3cc/PureMac/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: PureMac contributors
    license: MIT; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/momenbasel/PureMac/blob/7e0d58d0a58d88b3b3d2a417c66220209f91a3cc/screenshots/space-explorer.png
    credit: PureMac contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: PureMac storage explorer showing space used by folders and files.
    source: https://github.com/momenbasel/PureMac/blob/7e0d58d0a58d88b3b3d2a417c66220209f91a3cc/screenshots/space-explorer.png
    credit: PureMac contributors
icon: ./assets/icon.png
---

PureMac scans your Mac for space you can win back and shows every finding before anything is removed. Smart Scan goes category by category: system junk, user caches, mail attachments, Xcode data, Homebrew, npm and Docker caches, and files that are large or old. You tick what should go and confirm.

- The uninstaller finds an app's preferences, caches, containers, launch agents and logs and moves them to the Trash with the app.
- Orphan Finder lists files in `~/Library` left by apps you already deleted.
- Space Explorer measures folders, and Duplicate Finder groups identical files by content hash.
- Protection checks Gatekeeper, FileVault, the firewall and System Integrity Protection. It reports settings and does not scan for malware.

How files leave depends on the tool. Uninstalls, orphans and duplicates go to the Trash. Category cleanup, scheduled cleaning and emptying the Trash delete permanently. PureMac shows purgeable space but never offers to remove it, since macOS reclaims that itself.

A complete scan needs Full Disk Access; without it some categories come back partial. Local scans and cleanup work offline, and only Homebrew app updates use the network. The developer says the app sends no telemetry.

CleanMyMac bundles similar cleanup with malware removal and is sold by MacPaw. PureMac is free under the MIT license, and the code that decides what gets deleted is open to read.

Version 3.2.0 comes as a DMG or ZIP with a Universal app, Developer ID-signed and notarized. It needs macOS 13 or later.
