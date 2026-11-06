---
name: "LaunchCorner"
summary: "Hot-corner launcher: move the cursor into a screen corner to open the apps you assign to it."
category: "Utilities"
tags:
  - launcher
  - hot-corners
  - productivity
repository: "https://github.com/wenujacodes/LaunchCorner"
website: "https://github.com/wenujacodes/LaunchCorner"
license: "MIT"
licenseUrl: "https://github.com/wenujacodes/LaunchCorner/blob/main/LICENSE"
download: "https://github.com/wenujacodes/LaunchCorner/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/wenujacodes/LaunchCorner"
  - "https://github.com/wenujacodes/LaunchCorner/blob/main/LICENSE"
  - "https://github.com/wenujacodes/LaunchCorner/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/wenujacodes/LaunchCorner/main/LaunchCorner/Assets.xcassets/AppIcon.appiconset/512.png"
    credit: "wenujacodes"
    license: "MIT; upstream app icon, trademarks retained"
---

LaunchCorner opens apps from the screen corners. Move the cursor into one of the four corners and the app assigned to it launches, with dwell time and sensitivity you can tune. It starts at login and runs in the background. It is for people who want corner shortcuts again, since recent macOS updates removed the built-in Launchpad hot-corner action.

It needs Accessibility access, which the app asks for during setup. The Xcode project targets macOS 14.0; the README does not state a minimum version. The README says the build is for Apple silicon (arm64). It does not say whether the build is notarized, and if Gatekeeper blocks the first launch you right-click the app and choose Open.
