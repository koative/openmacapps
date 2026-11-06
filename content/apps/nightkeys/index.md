---
name: "NightKeys"
summary: "Lights the MacBook keyboard backlight only while you type on the built-in keys, not when using the trackpad."
category: "Utilities"
tags:
  - keyboard
  - menu-bar
  - hardware
repository: "https://github.com/fratayaydn/nightkeys"
website: "https://fratayaydn.github.io/nightkeys/"
license: "MIT"
licenseUrl: "https://github.com/fratayaydn/nightkeys/blob/main/LICENSE"
download: "https://github.com/fratayaydn/nightkeys/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/fratayaydn/nightkeys"
  - "https://github.com/fratayaydn/nightkeys/blob/main/LICENSE"
  - "https://github.com/fratayaydn/nightkeys/releases/latest"
  - "https://fratayaydn.github.io/nightkeys/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/fratayaydn/nightkeys/releases/latest/download/NightKeys-1.0.3.dmg"
    credit: "fratayaydn; crow glyph by Font Awesome (Fonticons, Inc.)"
    license: "MIT; the crow is Font Awesome Free under CC BY 4.0 (see UPSTREAM-NOTICE.txt); upstream app icon, trademarks retained"
---

NightKeys lights the MacBook keyboard only when you type on the built-in keyboard. Moving the trackpad, using a mouse or typing on an external keyboard no longer wakes the backlight, and the light goes off after the timeout set in System Settings. An optional mode keeps it dark in bright rooms, using the ambient light sensor. It suits people who work in dark rooms and find the keys lighting up every time they scroll.

It needs a MacBook with a backlit built-in keyboard and Apple silicon, running macOS 13 or later; the author tested it on macOS 26. The first run asks for Input Monitoring so the app can notice key presses, and the README says it never records or stores what you type. The release DMG is signed with a Developer ID and notarized by Apple. NightKeys uses private Apple frameworks, so a future macOS update may break it, and it is not on the App Store. It checks GitHub for updates once a day.
