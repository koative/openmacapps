---
name: "BrowSync"
summary: "Routes links to Safari, Chromium browsers or Firefox by rule and syncs bookmarks and tabs locally between them."
category: "Internet"
tags:
  - browser
  - bookmarks
  - sync
repository: "https://github.com/chentao1006/BrowSync"
website: "https://browsync.ct106.com/"
license: "MIT"
licenseUrl: "https://github.com/chentao1006/BrowSync/blob/main/LICENSE"
download: "https://github.com/chentao1006/BrowSync/releases/download/v1.3.1/BrowSync.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/chentao1006/BrowSync"
  - "https://github.com/chentao1006/BrowSync/blob/main/LICENSE"
  - "https://github.com/chentao1006/BrowSync/releases"
  - "https://browsync.ct106.com/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/chentao1006/BrowSync/releases/download/v1.3.1/BrowSync.dmg
    credit: BrowSync contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

BrowSync can be set as the default browser on a Mac. It opens each link in Safari, a Chromium-based browser or Firefox, chosen by domain, URL pattern, source app or time of day. It also syncs bookmarks, cookies, local storage and open tabs between those browsers. It suits people who move between several browsers and want their data kept in step.

The README asks for macOS 14.0 or later. Sync runs through a local WebSocket listener on 127.0.0.1 with no external servers, and Chrome and Firefox connections must be approved in the app. Routing rules and settings can also sync through iCloud. The app is on the Mac App Store as well. The README does not say whether the DMG is notarized, so the first launch may need to be allowed in System Settings.
