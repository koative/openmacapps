---
name: "Cleaner"
summary: "Mac cleaner with public, readable rules that moves items to a seven-day quarantine you can restore from."
category: "Utilities"
tags:
  - storage
  - cleanup
  - menu-bar
  - privacy
alternativeTo:
  - cleanmymac
repository: "https://github.com/ciro-maciel/cleaner"
website: "https://ciromaciel.click/tools/cleaner"
license: "MIT"
licenseUrl: "https://github.com/ciro-maciel/cleaner/blob/main/LICENSE"
download: "https://github.com/ciro-maciel/cleaner/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ciro-maciel/cleaner"
  - "https://github.com/ciro-maciel/cleaner/blob/main/LICENSE"
  - "https://github.com/ciro-maciel/cleaner/releases"
  - "https://ciromaciel.click/tools/cleaner"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/ciro-maciel/cleaner/blob/main/Resources/AppIcon.icns"
    credit: "Vernon Adams (letter C set in Candal); app icon used by Ciro Cesar Maciel"
    license: "SIL Open Font License 1.1 (NOTICE names the Candal letter C); not covered by the MIT code license; trademarks retained"
---

Cleaner scans for caches, logs, the Trash, old installers, Xcode and developer caches, Mail downloads and downloaded AI models, and shows each item with the rule that found it. The rules are in one `rules.json` file, with the reason for each in English and Brazilian Portuguese. Removal moves items to a quarantine batch that remembers their original paths; you can restore a batch with one click, and it empties itself after seven days. The app also includes an uninstaller that removes an app's leftovers, a disk map, startup item switches and a live menu bar monitor.

Requires macOS 14 or later on Apple silicon. The README says the release is signed with a Developer ID and notarized by Apple. The interface is in English and Brazilian Portuguese. For a complete scan, grant Full Disk Access; without it, macOS hides some folders and Cleaner says so. It has no duplicate finder, malware scanner or updater, and items protected by System Integrity Protection stay where they are.
