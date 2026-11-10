---
name: hdCLEANER
summary: "Scans a Mac for removable junk in 19 categories, uninstalls apps with their leftovers and repairs file access."
category: Utilities
tags:
  - cleaner
  - disk-space
  - uninstaller
  - maintenance
  - malware-scanner
alternativeTo:
  - cleanmymac
repository: https://github.com/starbudweiser/hdCLEANER
website: https://github.com/starbudweiser/hdCLEANER
license: MIT
licenseUrl: https://github.com/starbudweiser/hdCLEANER/blob/main/LICENSE
download: https://github.com/starbudweiser/hdCLEANER/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
sources:
  - https://github.com/starbudweiser/hdCLEANER
  - https://github.com/starbudweiser/hdCLEANER/blob/main/LICENSE
  - https://github.com/starbudweiser/hdCLEANER/releases
  - https://raw.githubusercontent.com/starbudweiser/hdCLEANER/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/hdCLEANER/releases/download/v1.4.0/hdCLEANER-1.4.0.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

hdCLEANER scans the usual places where a Mac piles up junk and shows how much each category would free. You tick what to remove and it cleans that, asking for an administrator password only when system items are ticked.

The scan covers 19 categories, among them app and browser caches, logs, developer caches from Xcode, Homebrew, npm or pip, Mail attachments, iOS backups and installers, and leftovers of uninstalled apps. Browser history, cookies and passwords are never touched. After a scan, only data that rebuilds itself is ticked, and personal files go to the Trash rather than being deleted.

Other tabs:

- Applications, to remove an app with the files it left in your Library;
- Maintenance, for DNS flush, Spotlight reindex and similar tasks with a live log;
- Permissions, to fix files you cannot delete or move after a copy;
- Hidden files, to remove .DS_Store and `._` files, or watch a folder for them;
- Security, a YARA scanner fed with Apple's XProtect rules.

Compared with CleanMyMac, everything here is free and open source, and there is no account. Some folders need Full Disk Access, and the app says so. Releases are arm64 builds for macOS 14 or later, notarized, in four languages.
