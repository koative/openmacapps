---
name: "SaneSideButtons"
summary: "Makes the back and forward side buttons on third-party mice navigate across macOS by sending swipe gestures."
category: "Utilities"
tags:
  - mouse
  - navigation
  - menu-bar
  - native
repository: https://github.com/thealpa/SaneSideButtons
website: https://janhuelsmann.com/sanesidebuttons
license: "GPL-2.0"
licenseUrl: https://github.com/thealpa/SaneSideButtons/blob/master/LICENSE
download: https://github.com/thealpa/SaneSideButtons/releases/latest
homebrew: "sanesidebuttons"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/thealpa/SaneSideButtons
  - https://github.com/thealpa/SaneSideButtons/blob/master/LICENSE
  - https://github.com/thealpa/SaneSideButtons/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/thealpa/SaneSideButtons/master/SaneSideButtons/Assets.xcassets/AppIcon.appiconset/256@1x.png
    credit: "Jan Hülsmann and SaneSideButtons contributors"
    license: "GPL-2.0; upstream project asset, trademarks retained"
---

SaneSideButtons gives the back and forward buttons on third-party mice a use across macOS. Rather than mapping them to keyboard shortcuts that only some apps understand, it turns each press into a two-finger swipe, so the buttons move through history in Finder, browsers and most other apps that respond to swiping.

It is a maintained fork of the abandoned SensibleSideButtons, with native support for Apple silicon as well as Intel, and runs from the menu bar on macOS 13 or later. The app does not start itself at login; add it under Login Items in System Settings if you want it running all the time.
