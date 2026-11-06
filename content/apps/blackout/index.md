---
name: "Blackout"
summary: "Hides the MacBook Pro Touch Bar behind a black screen while keeping Apple's native controls."
category: "Utilities"
tags:
  - touch-bar
  - display
  - privacy
repository: "https://github.com/norgera/Blackout"
website: "https://norgera.github.io/blackout/"
license: "MIT"
licenseUrl: "https://github.com/norgera/Blackout/blob/main/LICENSE"
download: "https://github.com/norgera/Blackout/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/norgera/Blackout"
  - "https://github.com/norgera/Blackout/blob/main/LICENSE"
  - "https://github.com/norgera/Blackout/releases"
  - "https://norgera.github.io/blackout/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/norgera/Blackout/main/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png"
    credit: "Nathan Orgera"
    license: "MIT; upstream app icon, trademarks retained"
---

Blackout turns the Touch Bar black while leaving Apple's Control Strip and app controls in place, so the strip stops showing content without losing the controls underneath. You can toggle it from the Touch Bar, the menu bar, Settings or a double-press keyboard shortcut. It can also control the keyboard backlight and start at login. It is for MacBook Pro owners who want a dark Touch Bar without losing Apple's controls.

It requires a MacBook Pro with a Touch Bar, with the Touch Bar set to App Controls and Show Control Strip enabled. The README does not state a minimum macOS version. The build is not notarized: the README has you run `xattr -cr` on the app after moving it to Applications, which removes the quarantine flag. Its terminal installer does the same.
