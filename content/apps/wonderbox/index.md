---
name: "WonderBox"
summary: "Mac toolkit for cleanup, uninstalling, disk analysis, memory, fan control and keep-awake, with live system monitors."
category: "Utilities"
tags:
  - cleanup
  - system-monitoring
  - storage
  - keep-awake
alternativeTo:
  - cleanmymac
repository: "https://github.com/jasonwong1991/WonderBox"
website: "https://github.com/jasonwong1991/WonderBox"
license: "MIT"
licenseUrl: "https://github.com/jasonwong1991/WonderBox/blob/main/LICENSE"
download: "https://github.com/jasonwong1991/WonderBox/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jasonwong1991/WonderBox"
  - "https://github.com/jasonwong1991/WonderBox/blob/main/LICENSE"
  - "https://github.com/jasonwong1991/WonderBox/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jasonwong1991/WonderBox/releases/download/v1.2.3/WonderBox-1.2.3.zip"
    credit: "jasonwong1991"
    license: "MIT; upstream app icon, trademarks retained"
---

WonderBox is a system toolkit with live CPU, GPU, memory, disk, network and battery figures and a menu bar dashboard. Its cleanup scanner finds package-manager, browser and developer caches, and its uninstaller removes an app together with related files through the Trash. It also includes a disk analyser, fan control on supported Macs, memory optimisation and a keep-awake timer. The interface is available in English and Simplified Chinese. It suits people who want one app for cleaning and monitoring their Mac.

WonderBox runs on macOS 14 or later, on Apple silicon and Intel. Release downloads are ad-hoc signed and not notarized, so the first launch is blocked by Gatekeeper: allow it in System Settings, or remove the quarantine flag with `xattr -dr com.apple.quarantine`. Fan control and memory optimisation ask for administrator approval to install the helper, and broad scans of the home folder need Full Disk Access, which is optional. Some sensor readings rely on private APIs and show a dash when unavailable. Update checks contact GitHub; the README states there is no telemetry or crash reporting.
