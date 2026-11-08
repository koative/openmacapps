---
name: TomatoBar
summary: Times Pomodoro work intervals and breaks from a countdown in the menu bar.
category: Productivity
tags:
  - pomodoro
  - timer
  - menu-bar
repository: https://github.com/ivoronin/TomatoBar
website: https://github.com/ivoronin/TomatoBar
license: MIT
licenseUrl: https://github.com/ivoronin/TomatoBar/blob/main/LICENSE
download: https://github.com/ivoronin/TomatoBar/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: '2026-11-08'
sources:
  - https://github.com/ivoronin/TomatoBar
  - https://github.com/ivoronin/TomatoBar/blob/main/LICENSE
  - https://github.com/ivoronin/TomatoBar/blob/main/README.md
  - https://github.com/ivoronin/TomatoBar/releases
  - https://raw.githubusercontent.com/ivoronin/TomatoBar/main/README.md
  - https://raw.githubusercontent.com/ivoronin/TomatoBar/main/TomatoBar/en.lproj/Localizable.strings
  - https://github.com/ivoronin/TomatoBar/releases/tag/v3.6.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/ivoronin/TomatoBar/blob/90a77d664dfe33c016bf24f89b0c82e77f9aec84/TomatoBar/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: TomatoBar contributors
    license: MIT; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/ivoronin/TomatoBar/blob/90a77d664dfe33c016bf24f89b0c82e77f9aec84/screenshot.png
    credit: TomatoBar contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: TomatoBar menu showing a focus timer and controls for work and rest intervals.
    source: https://github.com/ivoronin/TomatoBar/blob/90a77d664dfe33c016bf24f89b0c82e77f9aec84/screenshot.png
    credit: TomatoBar contributors
icon: ./assets/icon.png
---

TomatoBar times Pomodoro work intervals and the breaks between them from a small popover in the menu bar. Press Start, and the countdown can run next to the menu bar icon while you work.

You set the length of a work interval, a short break and a long break, plus how many work intervals make up a set before the long break. When work time runs out, a notification announces the break and offers a Skip button. A second one tells you the break is over. Settings also hold a global keyboard shortcut, a Stop after break switch and launch at login. The windup, ding and ticking sounds can each be turned off.

Version 3 needs macOS 11 Big Sur or later. Touch Bar support and older systems stay with the releases before 3.0. The download is a ZIP with a Universal app for Apple silicon and Intel, and the app is not notarized. Homebrew installs it as the tomatobar cask.

TomatoBar runs fully sandboxed with no entitlements. It logs each change of state in JSON to a file inside its container, which you can feed into other tracking tools. Scripts can drive it as well: `open tomatobar://startStop` starts or stops the timer from Terminal.
