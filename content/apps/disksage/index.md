---
name: "DiskSage"
summary: "Open-source disk cleaner with a sunburst map and an advisor that rates folders as safe, review or keep."
category: "Utilities"
tags:
  - disk-usage
  - disk-cleaner
  - system-monitoring
  - cleanup
alternativeTo:
  - daisydisk
  - cleanmymac
repository: "https://github.com/stealthdev-labs/disksage"
website: "https://stealthdev-labs.github.io/disksage/"
license: "MIT"
licenseUrl: "https://github.com/stealthdev-labs/disksage/blob/main/LICENSE"
download: "https://github.com/stealthdev-labs/disksage/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/stealthdev-labs/disksage"
  - "https://github.com/stealthdev-labs/disksage/blob/main/LICENSE"
  - "https://github.com/stealthdev-labs/disksage/releases/latest"
  - "https://stealthdev-labs.github.io/disksage/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/stealthdev-labs/disksage/releases/latest/download/DiskSage-macOS.zip"
    credit: "DiskSage contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

DiskSage shows where your disk space went as a sunburst map, in the style of DaisyDisk, and adds an advisor. Every folder it finds is rated as safe to delete, review first or keep. The ratings come from a rules engine in the source code rather than a cloud AI, so the same folder always gets the same verdict. Items are moved to the Trash, never deleted outright, and a biggest-files view helps you find large items. It suits people who want to reclaim space from caches, build output and developer tools without guessing what is safe.

It requires macOS 14 or later. The app is ad-hoc signed and not notarized, so the first launch needs right-click › Open or approval under System Settings › Privacy & Security. Full Disk Access is needed to scan protected folders. The README says the app makes no network connections and collects no analytics. The README says the whole app is free, including scheduled auto-clean, which it also labels a Pro feature; the Pro key is only needed for source builds.
