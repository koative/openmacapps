---
name: "Arco"
summary: "Graphical front end for Borg that runs scheduled, encrypted, incremental backups to local drives, NAS or SSH servers."
category: "Utilities"
tags:
  - backup
  - storage
  - automation
repository: "https://github.com/loomi-labs/arco"
website: "https://arco-backup.com"
license: "FSL-1.1-MIT"
sourceAvailability: "source-available"
licenseNotes: "Arco uses the Functional Source License 1.1 with an MIT future license. You may use, change and share it for any purpose other than a Competing Use, meaning a commercial product or service that substitutes for Arco or for other products the author offers with it. Each release converts to the MIT license two years after it is published. The license grants no trademark rights."
licenseUrl: "https://github.com/loomi-labs/arco/blob/main/LICENSE"
download: "https://github.com/loomi-labs/arco/releases/latest/download/Arco-Installer.pkg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/loomi-labs/arco"
  - "https://github.com/loomi-labs/arco/blob/main/LICENSE"
  - "https://github.com/loomi-labs/arco/releases"
  - "https://arco-backup.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/loomi-labs/arco/main/build/darwin/icons.icns"
    credit: "Raphael Thurnherr"
    license: "FSL-1.1-MIT; upstream app icon, trademarks retained"
---

Arco is a backup app for macOS and Linux that puts a graphical interface on top of Borg Backup. You create a backup profile, set a schedule and choose a destination: a local or external drive, a NAS, an SSH server or ArcoCloud. Backups are incremental and deduplicated, and they are encrypted on your machine before they leave it. Restores work by browsing the backup history and picking files or folders. It suits people who want Borg's engine and their existing Borg repositories without managing Borg by hand.

The macOS installer is a notarized .pkg, and the website describes the app as a universal build for Intel and Apple silicon. The README does not state a supported macOS version; the app bundle declares 10.15 as its minimum. Caveats: the license is source-available under FSL-1.1-MIT, which is not an open-source license. ArcoCloud is an optional paid hosted storage service. The app itself is free to use with your own storage.
