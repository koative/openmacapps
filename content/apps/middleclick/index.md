---
name: MiddleClick
summary: "Turns a three-finger click or tap on a trackpad or Magic Mouse into a middle mouse click."
category: Utilities
tags:
  - mouse
  - trackpad
  - gestures
repository: https://github.com/artginzburg/MiddleClick
website: https://wheelclick.app
license: GPL-3.0
licenseUrl: https://github.com/artginzburg/MiddleClick/blob/main/LICENSE
download: https://github.com/artginzburg/MiddleClick/releases
freeDownload: true
homebrew: "middleclick"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/artginzburg/MiddleClick
  - https://github.com/artginzburg/MiddleClick/blob/main/LICENSE
  - https://github.com/artginzburg/MiddleClick/blob/main/README.md
  - https://github.com/artginzburg/MiddleClick/releases
  - https://raw.githubusercontent.com/artginzburg/MiddleClick/main/README.md
  - https://github.com/artginzburg/MiddleClick/releases/tag/3.3.0
assets:
  - path: ./assets/icon.png
    source: https://github.com/artginzburg/MiddleClick/blob/566155d7e3f4f4a63d9f894ca47dc374ed070f93/MiddleClick/Images.xcassets/AppIcon.appiconset/icon_256p.png
    credit: MiddleClick contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

MiddleClick turns a three-finger click or tap on a MacBook trackpad or Magic Mouse into a middle mouse click. Middle-click a link in Safari and it opens in a new background tab. Middle-click a tab to close it, or middle-click in Terminal to paste the selected text.

There is no settings window. You change its behaviour with `defaults write art.ginzburg.MiddleClick` in Terminal:

- `fingers` sets how many fingers count, from the default of 3 up to 10. A value of 2 clashes with normal right-clicks.
- `allowMoreFingers` also accepts clicks with extra fingers, for when your other hand rests on the trackpad.
- `maxDistanceDelta` limits how far the pointer may travel during a tap.
- `maxTimeDelta` limits how long a tap may last, 300 milliseconds by default.

To hide the menu bar icon, hold Command and drag it off the menu bar. Opening MiddleClick again brings it back. Three Finger Drag can conflict with it, and the project documents how to handle that.

The developer has declared MiddleClick finished and says it has no telemetry. It stays free under GPL-3.0, and its successor, WheelClick, is a rewrite built on documented macOS interfaces. The release ZIP holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, which runs on macOS 10.13 or later.
