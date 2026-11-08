---
name: "SquirrelDisk"
summary: "Maps disk usage as a sunburst or treemap and helps clean up large folders on local disks, SSH servers or cloud storage."
category: "Utilities"
tags:
  - disk-usage
  - storage
  - cleanup
  - cross-platform
alternativeTo:
  - daisydisk
repository: https://github.com/adileo/squirreldisk
website: https://www.squirreldisk.com
license: "AGPL-3.0"
licenseUrl: https://github.com/adileo/squirreldisk/blob/main/LICENSE
download: https://github.com/adileo/squirreldisk/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/adileo/squirreldisk
  - https://github.com/adileo/squirreldisk/blob/main/LICENSE
  - https://github.com/adileo/squirreldisk/releases
  - https://raw.githubusercontent.com/adileo/squirreldisk/main/README.md
  - https://github.com/adileo/squirreldisk/releases/tag/v2.6.1
  - https://daisydiskapp.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/adileo/squirreldisk/main/assets/icon/icon-512.png
    credit: "adileo and SquirrelDisk contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

SquirrelDisk shows what is filling a disk and helps you clear it. Point it at a drive or folder and it draws the contents as a sunburst, each folder sized by the space it really takes, and the chart builds up while the scan runs. Click a slice to zoom in, or switch to a treemap in settings.

- You drag slices or list rows into a collector, then move the items to the Trash, delete them for good, or first copy them to an external drive or cloud storage.
- Permanent deletion can overwrite each file three times (DoD 5220.22-M) before removing it.
- System folders, your home folder and whole drives are protected, and app and settings folders need an extra confirmation.
- It scans other machines over SSH, and S3 buckets, Google Drive, Dropbox, FTP and more through rclone, which it can install for you.
- `squirreldisk scan <folder>` prints the largest items as a tree or as JSON without opening a window.

Files kept only in iCloud, Dropbox, Google Drive or OneDrive count as zero, and the chart refreshes when you delete something in Finder. A Folder menu setting adds "Scan with SquirrelDisk" to Finder's Quick Actions. The app shows a small sponsor banner.

Version 2 is a rewrite in Rust by the original author, and it updates itself. The macOS disk image holds a Universal app for Apple silicon and Intel that declares macOS 11 as its minimum; the README explains how to allow it in Privacy & Security on first launch.

DaisyDisk also draws a disk as an interactive map and can scan cloud storage, but it is a one-time purchase with a free trial download. SquirrelDisk is free and runs on Windows and Linux as well.
