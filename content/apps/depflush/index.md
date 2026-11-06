---
name: "Depflush"
summary: "Finds space left by developer leftovers such as Docker data, node_modules and old caches, and previews before removing."
category: "Utilities"
tags:
  - disk-cleaner
  - storage
  - cleanup
  - developer-utilities
repository: "https://github.com/cypriennkeneng/depflush"
website: "https://depflush.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/cypriennkeneng/depflush/blob/main/LICENSE"
download: "https://github.com/cypriennkeneng/depflush/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/cypriennkeneng/depflush"
  - "https://github.com/cypriennkeneng/depflush/blob/main/LICENSE"
  - "https://github.com/cypriennkeneng/depflush/releases"
  - "https://depflush.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/cypriennkeneng/depflush/main/Resources/AppIcon.icns"
    credit: "Web Loupe (Cyprien Nkeneng)"
    license: "Icon not covered by the GPL-3.0 code license; trademarks retained"
---

Depflush scans for the space that development work leaves behind: Docker data, dependency folders such as node_modules, caches of apps and IDEs, SQL dumps, and duplicate photos or videos in folders such as Pictures and Downloads. It shows a preview before anything is removed, moves items to the Trash by default, never preselects risky items such as Docker volumes, and can warn from the menu bar when free space runs low. It is for developers whose disks fill up with build output and old tooling.

It requires macOS 14 Sonoma or later and runs on Apple silicon and Intel Macs. The build is not notarized by Apple, so the first launch must be allowed in System Settings under Privacy & Security with Open Anyway. The README says the app makes no network calls and has no account or analytics.
