---
name: "ShinyMac"
summary: "Free, open-source Mac cleaner: junk and Xcode cleanup, an uninstaller that removes leftovers, and a large-file disk map."
category: "Utilities"
tags:
  - cleanup
  - disk-usage
  - storage
  - native
alternativeTo:
  - cleanmymac
repository: "https://github.com/pballada/shinyMac"
website: "https://github.com/pballada/shinyMac"
license: "MIT"
licenseUrl: "https://github.com/pballada/shinyMac/blob/main/LICENSE"
download: "https://github.com/pballada/shinyMac/releases/download/v0.4.0/ShinyMac-0.4.0.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/pballada/shinyMac"
  - "https://github.com/pballada/shinyMac/blob/main/LICENSE"
  - "https://github.com/pballada/shinyMac/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/pballada/shinyMac/main/Support/AppIcon.png"
    credit: "Pau Ballada"
    license: "MIT; upstream app icon, trademarks retained"
---

ShinyMac cleans system junk such as user and Xcode caches, logs and old device backups, uninstalls apps together with the support files they leave behind, and shows large and old files in a disk map. It also lists login items and app permissions, offers a set of hidden macOS settings, and runs a Smart Care scan that handles several cleanup tasks in one pass. It suits people who want a free alternative to paid Mac cleaners; the README says it needs no account and collects no telemetry.

Requires macOS 15 or later. The release zip is a universal build for Apple silicon and Intel, signed with a Developer ID and notarized by Apple, so it opens with a double-click. Full Disk Access is optional: without it some scans skip Safari data, Mail downloads and the Trash. The app checks GitHub releases for updates itself.
