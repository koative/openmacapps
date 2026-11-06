---
name: "Gamely"
summary: "Menu bar utility that turns off macOS Hot Corners while Game Mode is on and restores them afterwards."
category: "Utilities"
tags:
  - games
  - hot-corners
  - menu-bar
repository: "https://github.com/rocavence/Gamely-app"
website: "https://gamely.rocavence.com"
license: "CC-BY-NC-SA-4.0"
sourceAvailability: "source-available"
licenseNotes: "CC BY-NC-SA 4.0, a Creative Commons licence written for content rather than software. You may use, share and adapt the code for noncommercial purposes if you give credit and license your adaptations under the same terms. Commercial use is not allowed."
licenseUrl: "https://github.com/rocavence/Gamely-app/blob/main/LICENSE"
download: "https://github.com/rocavence/Gamely-app/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/rocavence/Gamely-app"
  - "https://github.com/rocavence/Gamely-app/blob/main/LICENSE"
  - "https://github.com/rocavence/Gamely-app/releases"
  - "https://gamely.rocavence.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/rocavence/Gamely-app/main/Gamely/Resources/Assets.xcassets/AppIcon.appiconset/icon_256.png"
    credit: "rocavence"
    license: "CC-BY-NC-SA-4.0; upstream app icon, trademarks retained"
---

Gamely is a menu bar utility that turns off the four macOS Hot Corners when Game Mode starts and restores your original corner settings when you stop playing. It reads Game Mode changes from macOS's own log messages, saves the original corners in its own preferences so they come back even after a crash, and offers a list of apps to force into the behaviour for games that Game Mode does not detect. It suits people who play full-screen games and keep triggering a corner by accident.

It needs macOS 14 or later. The release zip is self-signed and not notarized, so the first launch needs right-click and Open, or removal of the quarantine attribute. Restoring the corners restarts the Dock, which can flicker briefly. Game Mode only applies to full-screen apps with the games category, so some Windows games run through a translation layer will not trigger it. The app is free, and the licence is noncommercial share-alike.
