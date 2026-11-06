---
name: "MenuBarHider"
summary: "Hides chosen menu bar icons on macOS 27 with a pair of separators and a click, needing only Accessibility permission."
category: "Utilities"
tags:
  - menu-bar
  - display
alternativeTo:
  - bartender
repository: "https://github.com/happy666End/MenuBarHider"
website: "https://github.com/happy666End/MenuBarHider"
license: "MIT"
licenseUrl: "https://github.com/happy666End/MenuBarHider/blob/main/LICENSE"
download: "https://github.com/happy666End/MenuBarHider/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/happy666End/MenuBarHider"
  - "https://github.com/happy666End/MenuBarHider/blob/main/LICENSE"
  - "https://github.com/happy666End/MenuBarHider/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/happy666End/MenuBarHider/main/MenuBarHider/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Saveliy Yudin"
    license: "MIT; upstream app icon, trademarks retained"
---

MenuBarHider hides the menu bar icons you choose, on macOS 27. Two separators sit in the bar: items between them are hidden, a click on the chevron reveals them, and they fold away again after a timeout you can set. The README explains that macOS 27 rewrote the menu bar as a single window, which broke Hidden Bar and Ice, so the app talks to the system's menu bar agent directly. It does not need Screen Recording permission, takes no screenshots of the menu bar, and collects no telemetry.

It suits people on macOS 27 who used Bartender-style hiding and want a small, free replacement. Expect limits: the approach relies on private macOS interfaces that Apple can change in a 27.x update, and items without a bundle identifier stay hidden while the bar is collapsed.

MenuBarHider needs macOS 27 and Accessibility permission, which you grant on first launch. The app is signed with a Developer ID and notarized. It must run from the Applications folder, because macOS hides the icons of apps started from elsewhere. While the clock is hovered, the app lifts the restriction so Notification Center opens, and the hidden icons show during that time. The README says multi-display setups are untested.
