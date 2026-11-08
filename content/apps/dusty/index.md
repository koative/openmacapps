---
name: "Dusty"
summary: "A menu bar cleaner that lists cache and leftover files by path and size before anything is moved to the Trash."
category: "Utilities"
tags:
  - cleanup
  - storage
  - menu-bar
  - disk-usage
  - disk-cleaner
alternativeTo:
  - cleanmymac
  - ccleaner
repository: "https://github.com/yagcioglutoprak/dusty"
website: "https://toprak.sh/dusty"
license: "MIT"
licenseUrl: "https://github.com/yagcioglutoprak/dusty/blob/main/LICENSE"
download: "https://github.com/yagcioglutoprak/dusty/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/yagcioglutoprak/dusty"
  - "https://github.com/yagcioglutoprak/dusty/blob/main/LICENSE"
  - "https://github.com/yagcioglutoprak/dusty/releases"
  - "https://raw.githubusercontent.com/yagcioglutoprak/dusty/main/README.md"
  - "https://github.com/yagcioglutoprak/dusty/releases/tag/v2.1.0"
  - "https://macpaw.com/cleanmymac"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/yagcioglutoprak/dusty/main/Dusty/Dusty/Assets.xcassets/AppIcon.appiconset/icon_512.png"
    credit: "Toprak Yagcioglu"
    license: "MIT; upstream app icon, trademarks retained"
---

Dusty cleans caches and leftover files from the menu bar and lists every path with its size before anything is deleted. Results fall into three levels. Safe covers user and browser caches, logs and the Trash. Developer covers Xcode DerivedData, simulators and package manager caches such as npm, pip and Cargo. In Deep, nothing is ticked until you pick it: old installers in Downloads, local Time Machine snapshots, and the `node_modules` or Cargo `target` folders of projects untouched for a month.

Deletes are limited to a fixed allowlist of locations that excludes Documents, Photos, Mail and iCloud Drive. Each clean moves items to the Trash first, leaves a few seconds to undo with Command-Z, and writes every path to a log. A dry-run switch shows what a clean would take without removing it.

- A memory screen totals each app with its helper processes and pre-selects large apps left idle for an hour.
- Freeing memory quits the apps you confirm the way Command-Q does, with a Reopen button. Dusty never runs `purge` or force quits.
- A background scan every four hours keeps the reclaimable figure current, and auto clean can run on a schedule or when space runs low.
- A `dusty` command-line tool and three Shortcuts actions use the same rules as the panel.

Dusty requires macOS 13. The 2.1.0 DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. A few system log paths need Full Disk Access; without it they are skipped. The developer says it needs no account and sends no telemetry.

CleanMyMac, sold with a trial by MacPaw, also hunts duplicates and malware. Dusty sticks to caches, leftovers and memory, and every deletion rule is in its source.
