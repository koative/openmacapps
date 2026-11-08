---
name: Bye
summary: "Quits your running apps in one click from the menu bar, leaving open the ones you deselect."
category: Utilities
tags:
- menu-bar
- processes
- app-management
repository: https://github.com/designsbymuzeer/Bye-Mac-App
website: https://github.com/designsbymuzeer/Bye-Mac-App
license: GPL-3.0
licenseUrl: https://github.com/designsbymuzeer/Bye-Mac-App/blob/main/LICENSE
download: https://github.com/designsbymuzeer/Bye-Mac-App/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
- https://github.com/designsbymuzeer/Bye-Mac-App
- https://github.com/designsbymuzeer/Bye-Mac-App/blob/main/LICENSE
- https://github.com/designsbymuzeer/Bye-Mac-App/releases
- https://raw.githubusercontent.com/designsbymuzeer/Bye-Mac-App/main/README.md
- https://github.com/designsbymuzeer/Bye-Mac-App/releases/tag/v1.0
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/designsbymuzeer/Bye-Mac-App/main/Bye/Assets.xcassets/AppIcon.appiconset/Icon%20512px.png
  credit: designsbymuzeer
  license: GPL-3.0; upstream project asset, trademarks retained
---

Bye quits the apps you have open in one go when a work session ends. Click its menu bar icon to see your running apps; deselect the ones you want to keep open, and one click quits the rest.

The designer built it out of frustration: once Figma, VS Code and a dozen small utilities were closed, every other open app still had to be hunted down and quit by hand. The popover uses a translucent glass look that follows Light and Dark Mode. Bye is written in SwiftUI and uses AppKit's `NSWorkspace` to manage processes.

On first launch Bye asks you to click Install so it can set up a background service that watches for apps opening and closing.

The only release so far is v1.0, from November 2025, shipped as a ZIP. The app inside is a Universal build for Apple silicon and Intel and sets macOS 14.6 as its minimum, although the README lists Ventura (13.0). It is signed with a development certificate and not notarized, so Gatekeeper blocks it until you Control-click the app and choose Open. The README states that versions released after 27 November 2025 are licensed under GPLv3, and the repository's LICENSE file is the GPL v3 text.
