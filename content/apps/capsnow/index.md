---
name: "CapsNow"
summary: "Turns off macOS's 75 ms Caps Lock delay so quick taps register; a helper runs at login, then quits."
category: "Utilities"
tags:
  - keyboard
  - caps-lock
  - utilities
  - apple-silicon
repository: "https://github.com/fratayaydn/capsnow"
website: "https://fratayaydn.github.io/capsnow/"
license: "MIT"
licenseUrl: "https://github.com/fratayaydn/capsnow/blob/main/LICENSE"
download: "https://github.com/fratayaydn/capsnow/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/fratayaydn/capsnow"
  - "https://github.com/fratayaydn/capsnow/blob/main/LICENSE"
  - "https://github.com/fratayaydn/capsnow/releases"
  - "https://fratayaydn.github.io/capsnow/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/fratayaydn/capsnow/main/Resources/AppIcon.icns"
    credit: "fratayaydn"
    license: "MIT; upstream app icon, trademarks retained"
---

macOS ignores a Caps Lock press shorter than 75 milliseconds, so quick taps are lost and the next letters come out in the wrong case. CapsNow sets the macOS override that removes this delay, which is useful for anyone who taps Caps Lock briefly while typing. It applies the setting at login and whenever a keyboard is connected, then quits, so it has no menu bar icon and no resident process. Turning it off gives macOS its delay back.

It needs a Mac with Apple silicon and macOS 13 Ventura or later. The DMG is signed with a Developer ID and notarized by Apple, so it opens without a Gatekeeper warning. The project has one release, 1.0.0, from October 2026.
