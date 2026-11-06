---
name: "Hardly Working"
summary: "Menu bar app that moves the cursor one pixel after a chosen idle time, so Teams or Slack status stays active."
category: "Utilities"
tags:
  - menu-bar
  - keep-awake
  - presence
  - automation
repository: "https://github.com/Blazmad/hardly-working"
website: "https://blazmad.github.io/hardly-working/"
license: "MIT"
licenseUrl: "https://github.com/Blazmad/hardly-working/blob/main/LICENSE"
download: "https://github.com/Blazmad/hardly-working/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Blazmad/hardly-working"
  - "https://github.com/Blazmad/hardly-working/blob/main/LICENSE"
  - "https://github.com/Blazmad/hardly-working/releases"
  - "https://blazmad.github.io/hardly-working/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Blazmad/hardly-working/main/Sources/Assets.xcassets/AppIcon.appiconset/icon_512.png"
    credit: "Blazmad"
    license: "MIT; upstream app icon, trademarks retained"
---

Hardly Working is a small menu bar app for people whose chat status turns to Away while they step away from the Mac. After an idle threshold you choose (2, 3, 4, 5 or 10 minutes), it moves the cursor by one pixel and checks that macOS registered the input. If two nudges in a row have no effect, the icon switches to an alert state. It does nothing while you are using the Mac.

It requires macOS 14 or later and the Accessibility permission, which the first launch asks for. The DMG is signed with a Developer ID and notarized by Apple. The site points out a side effect: while the app is active it resets the same idle timer that macOS uses to sleep and lock the screen, so the Mac will not lock or sleep on its own until you lock it yourself.
