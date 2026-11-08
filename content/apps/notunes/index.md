---
name: noTunes
summary: "Stops Apple Music or iTunes from opening on its own and can launch another app or website in its place."
category: Utilities
tags:
  - audio
  - menu-bar
  - app-launching
repository: https://github.com/tombonez/noTunes
website: https://github.com/tombonez/noTunes
license: MIT
licenseUrl: https://github.com/tombonez/noTunes/blob/master/LICENSE
download: https://github.com/tombonez/noTunes/releases
freeDownload: true
homebrew: "notunes"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/tombonez/noTunes", "https://github.com/tombonez/noTunes/blob/master/LICENSE", "https://raw.githubusercontent.com/tombonez/noTunes/master/README.md", "https://github.com/tombonez/noTunes/releases", "https://github.com/tombonez/noTunes/releases/tag/v3.5"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/tombonez/noTunes/blob/ee96b7befa80f65ccda05b2759c89de87cd41ac6/noTunes/Assets.xcassets/AppIcon.appiconset/AppIcon-256.png
    credit: noTunes contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

noTunes keeps Apple Music, or iTunes on older systems, from launching. Start noTunes once and the Music app stays shut when something tries to open it, such as Bluetooth headphones reconnecting.

A left click on the menu bar icon turns the blocking on or off, and the icon changes to show which. You can hide the icon from its right-click menu. Bringing it back later means quitting the app and deleting its settings with a `defaults delete` command in Terminal. With the icon hidden, you quit noTunes from Activity Monitor or with `osascript`.

Blocking Music can also open something else. A single `defaults write` command sets the replacement: an app in the Applications folder, or a web address such as YouTube Music. Deleting that key turns the replacement off.

The app does not add itself to Login Items. To have it running after every restart, add it under System Settings > General > Login Items.

Version 3.5 is a ZIP containing a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and it needs macOS 10.14.6 or later. noTunes is free under the MIT license.
