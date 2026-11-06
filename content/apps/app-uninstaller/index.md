---
name: "App Uninstaller"
summary: "Native SwiftUI app uninstaller: drop an app onto the window to remove it with its caches, preferences and leftovers."
category: "Utilities"
tags:
  - uninstaller
  - cleanup
  - storage
  - files
alternativeTo:
  - appcleaner
repository: "https://github.com/kamjin3086/AppUninstaller"
website: "https://github.com/kamjin3086/AppUninstaller"
license: "MIT"
licenseUrl: "https://github.com/kamjin3086/AppUninstaller/blob/main/LICENSE"
download: "https://github.com/kamjin3086/AppUninstaller/releases/download/v1.0.2/AppUninstaller-v1.0.2-macOS.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kamjin3086/AppUninstaller"
  - "https://github.com/kamjin3086/AppUninstaller/blob/main/LICENSE"
  - "https://github.com/kamjin3086/AppUninstaller/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/kamjin3086/AppUninstaller/main/AppIcon.icns"
    credit: "App Uninstaller contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

App Uninstaller removes a Mac app when you drop its `.app` file onto the window. It lists the matching files in the usual Library folders, such as Application Support, Preferences, Caches, Logs, Containers and Saved Application State, and deletes them after you confirm. Files are matched by app name and bundle identifier. It suits people who want a small, open-source alternative to closed uninstaller tools.

It needs macOS 13.0 or later. The release is a zip, and the README tells you to right-click the app and choose Open on first launch to get past Gatekeeper, so the build is not notarized. It asks for an administrator password only for system-wide files. The README says it is distributed outside the Mac App Store because the sandbox would block that access.
