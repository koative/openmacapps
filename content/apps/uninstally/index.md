---
name: "Uninstally"
summary: "Native SwiftUI uninstaller that removes apps and leftover files by bundle ID, with a Finder right-click menu."
category: "Utilities"
tags:
  - uninstaller
  - cleanup
  - finder
  - files
alternativeTo:
  - appcleaner
repository: "https://github.com/gostonx/uninstally"
website: "https://github.com/gostonx/uninstally"
license: "MIT"
licenseUrl: "https://github.com/gostonx/uninstally/blob/main/LICENSE"
download: "https://github.com/gostonx/uninstally/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/gostonx/uninstally"
  - "https://github.com/gostonx/uninstally/blob/main/LICENSE"
  - "https://github.com/gostonx/uninstally/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/gostonx/uninstally/main/Uninstally/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Codenta"
    license: "MIT; upstream app icon, trademarks retained"
---

Uninstally removes an app together with the preferences, caches, containers, logs and saved state it leaves behind. It finds these files by bundle identifier and lists them for review before anything is deleted. The README also describes batch uninstalls, a leftover scanner for apps already dragged to the Trash, Homebrew package removal and a Finder extension. It suits people who want to see exactly what an uninstall removes.

Requires macOS 14 or later. The README does not say whether the build is notarized, and its troubleshooting covers Gatekeeper blocking the app. The Finder extension must be enabled in System Settings, and Full Disk Access is needed to scan protected folders such as /Library. The README says no analytics are sent.
