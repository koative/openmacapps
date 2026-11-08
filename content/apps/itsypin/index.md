---
name: "Itsypin"
summary: "Opens websites you pin in floating popovers or screen-edge bubbles from the menu bar, without switching to a browser."
category: "Productivity"
tags:
  - menu-bar
  - browser
  - web-apps
  - bookmarks
repository: "https://github.com/nickustinov/itsypin-macos"
website: "https://itsypin.app"
license: "MIT"
licenseUrl: "https://github.com/nickustinov/itsypin-macos/blob/main/LICENSE"
download: "https://github.com/nickustinov/itsypin-macos/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nickustinov/itsypin-macos/blob/main/README.md"
  - "https://github.com/nickustinov/itsypin-macos/releases/tag/v2.0.0"
  - "https://github.com/nickustinov/itsypin-macos"
  - "https://github.com/nickustinov/itsypin-macos/blob/main/LICENSE"
  - "https://github.com/nickustinov/itsypin-macos/releases/latest"
  - "https://itsypin.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/nickustinov/itsypin-macos/main/Assets/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Nick Ustinov"
    license: "MIT; upstream app icon, trademarks retained"
---

Click Itsypin's pin in the menu bar, choose a site, and it opens in a popover you can resize from any corner. Sites can also sit as bubbles on the right or bottom edge of the screen. Hover over a bubble and it grows into a full window; move the pointer away and it shrinks back.

- Global hotkeys open a site from anywhere, and triple-tapping a modifier key such as Option works as a shortcut too. Neither needs the Accessibility permission.
- Pages keep their state between opens, and collapsed bubbles can unload after an inactivity period you configure.
- Each site can switch to a mobile user agent from the bubble's title bar, and can show your own icon in place of its favicon.
- A hot corner can hide a bubble until you move the pointer into that corner.
- Right-clicking a link or page hands it to your default browser.

Pages render in WebKit, the engine Safari uses, and file uploads and JavaScript alert, confirm and prompt dialogs work. The developer says the app has no telemetry and keeps your pinned sites and settings on the Mac.

Itsypin needs macOS 13 or later. The 2.0.0 DMG on GitHub holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. Itsypin is also on the Mac App Store and in the developer's Homebrew tap. Version 2.0.0 renamed the app from Pinster and carries over Pinster's settings.
