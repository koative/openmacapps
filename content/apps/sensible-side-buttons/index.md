---
name: SensibleSideButtons
summary: "Turns a mouse's side buttons into back and forward swipes that reach the window under the pointer."
category: Utilities
tags:
  - mouse
  - navigation
  - menu-bar
repository: https://github.com/archagon/sensible-side-buttons
website: https://github.com/archagon/sensible-side-buttons
license: "GPL-2.0-or-later"
licenseUrl: https://github.com/archagon/sensible-side-buttons/blob/master/LICENSE
download: https://github.com/archagon/sensible-side-buttons/releases
freeDownload: true
homebrew: "sensiblesidebuttons"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/archagon/sensible-side-buttons", "https://github.com/archagon/sensible-side-buttons/blob/master/LICENSE", "https://github.com/archagon/sensible-side-buttons/blob/master/SensibleSideButtons/AppDelegate.m", "https://github.com/archagon/sensible-side-buttons/blob/master/README.md", "https://github.com/archagon/sensible-side-buttons/releases", "https://github.com/archagon/sensible-side-buttons/releases/tag/1.0.9", "https://sensible-side-buttons.archagon.net"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/archagon/sensible-side-buttons/blob/f24c0ced598325182fa4c4a38f57223530a47adc/Assets/Icon.png
    credit: SensibleSideButtons contributors
    license: GPL-2.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

SensibleSideButtons makes the two side buttons on a third-party mouse go back and forward in macOS. Click the rear button over an Xcode editor or a documentation viewer, and that view steps back through its history.

By default macOS gives these buttons, known as M4 and M5, almost nothing to do. The usual fix binds them to Command-[ and Command-], which goes to the whole frontmost app, can blink the menu bar or beep, and can trigger the wrong command in apps that use those keys differently. SensibleSideButtons instead catches the two clicks with an event tap and sends a three-finger swipe gesture in their place. The Logitech MX Master sends the same gesture, which is how the developer found the approach. The swipe reaches the view under the pointer, so any app that supports that gesture can navigate, with or without a keyboard shortcut.

Version 1.0.9 ships as a ZIP holding a Universal app for Apple silicon and Intel, Developer ID-signed and notarized.

The app sits in the menu bar, and you can switch the behavior off from its menu. Quitting it restores the default buttons. To have it open when you log in, add it to Login Items; the README lists the steps for old and new versions of macOS.
