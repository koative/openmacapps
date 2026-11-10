---
name: mBACKUP
summary: "Runs scheduled rsync mirror copies of your folders from the menu bar, with optional versioned copies."
category: Utilities
tags:
  - backup
  - rsync
  - menu-bar
  - sync
repository: https://github.com/starbudweiser/mBACKUP
website: https://github.com/starbudweiser/mBACKUP
license: MIT
licenseUrl: https://github.com/starbudweiser/mBACKUP/blob/main/LICENSE
download: https://github.com/starbudweiser/mBACKUP/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
sources:
  - https://github.com/starbudweiser/mBACKUP
  - https://github.com/starbudweiser/mBACKUP/blob/main/LICENSE
  - https://github.com/starbudweiser/mBACKUP/releases
  - https://raw.githubusercontent.com/starbudweiser/mBACKUP/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mBACKUP/releases/download/v1.0.2/mBACKUP-1.0.2.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mBACKUP copies a source folder to a destination on a schedule, from an icon in the menu bar. Each task is a mirror synchronization run by rsync 3, which ships inside the app.

You set the days and time for each task. A run missed while the Mac was off is caught up later, and external disks and SMB shares are mounted when a task needs them. Exclusion patterns leave out what you do not want copied, and a dry run shows what would change before anything moves.

Versioned copies are optional. When they are on, replaced or deleted files go to a dated folder next to the destination, and the app keeps the number of versions you choose. A task can also run with administrator rights, with the password kept in the Keychain.

The app is a simplified take on Get Backup Pro, inspired by it and not affiliated with BeLight Software. It makes mirror copies, not full system backups, so Time Machine still has a place.

Protected folders such as iCloud Drive need Full Disk Access. The app opens at login, and the interface is in English, French, Spanish and Italian. Releases are arm64 builds for macOS 15 or later, notarized.
