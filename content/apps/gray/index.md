---
name: Gray
summary: Choose light or dark appearance for individual apps instead of using one
  system-wide setting.
category: Utilities
tags:
- customization
- themes
- native
repository: https://github.com/zenangst/Gray
website: https://github.com/zenangst/Gray
license: MIT
licenseUrl: https://github.com/zenangst/Gray/blob/master/LICENSE.md
download: https://github.com/zenangst/Gray/releases
freeDownload: true
homebrew: "gray"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
maintenance: unmaintained
maintenanceNote: No release since May 2021 and no commit since May 2022.
icon: ./assets/icon.png
sources:
- https://github.com/zenangst/Gray
- https://github.com/zenangst/Gray/blob/master/LICENSE.md
- https://github.com/zenangst/Gray/releases
- https://raw.githubusercontent.com/zenangst/Gray/master/README.md
- https://github.com/zenangst/Gray/releases/tag/0.17.0
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/zenangst/Gray/master/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256%402x.png
  credit: Christoffer Winterkvist
  license: MIT; upstream project asset, trademarks retained
---

Gray lets you keep the system in dark mode while chosen apps stay in the light appearance, with one switch per app. You set macOS to the dark appearance in System Settings first, then pick which apps should look light.

The change takes effect only after the app relaunches. Gray quits and reopens it for you, so save any open documents before you flip the switch.

Gray was written for macOS Mojave and declares 10.14 as its minimum. Version 0.17.0 from May 2021 is the last release: a ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.

Under the hood Gray writes one preference, `NSRequiresAquaSystemAppearance`, into each app's user defaults. You can set the same key yourself with `defaults write` in Terminal, which the README shows for Xcode. Nothing else on the system changes, and deleting Gray leaves your choices in place.
