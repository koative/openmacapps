---
name: Shifty
summary: A menu bar control for macOS Night Shift, with exceptions for chosen apps, websites and time periods.
category: Utilities
tags:
  - display
  - night-shift
  - menu-bar
alternativeTo:
  - f-lux
repository: https://github.com/thompsonate/Shifty
website: https://github.com/thompsonate/Shifty
license: GPL-3.0
licenseUrl: https://github.com/thompsonate/Shifty/blob/master/LICENSE
download: https://github.com/thompsonate/Shifty/releases
freeDownload: true
homebrew: "shifty"
featured: false
added: 2026-10-17
verified: 2026-11-08
maintenance: "unmaintained"
maintenanceNote: "No release since October 2021."
sources:
  - https://github.com/thompsonate/Shifty
  - https://github.com/thompsonate/Shifty/blob/master/LICENSE
  - https://github.com/thompsonate/Shifty/blob/master/README.md
  - https://github.com/thompsonate/Shifty/releases
  - https://github.com/thompsonate/Shifty/releases/tag/v1.2
  - https://support.apple.com/en-us/HT207513
  - https://justgetflux.com/
  - https://shifty.natethompson.io/en/
assets:
  - path: ./assets/icon.png
    source: https://github.com/thompsonate/Shifty/blob/4db8efea467b7a1d25873856486791f0b7612d6f/Shifty/Assets.xcassets/AppIcon.appiconset/Shifty%20Icon%20256.png
    credit: Shifty contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/thompsonate/Shifty/blob/4db8efea467b7a1d25873856486791f0b7612d6f/docs/en/images/shifty-screenshot-large.png
    credit: Shifty contributors
    license: GPL-3.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: Shifty menu with Night Shift controls and a color-temperature slider.
    source: https://github.com/thompsonate/Shifty/blob/4db8efea467b7a1d25873856486791f0b7612d6f/docs/en/images/shifty-screenshot-large.png
    credit: Shifty contributors
icon: ./assets/icon.png
---

Shifty sits in the menu bar and gives you more control over Night Shift, the warm-display mode built into macOS. Open its menu to turn Night Shift on or off and drag a slider to set the color temperature without going through System Settings.

- You can switch Night Shift off for specific apps, so a photo editor or video player shows true colors while everything else stays warm.
- Website exceptions do the same for particular sites in Safari, Chrome and Vivaldi.
- Night Shift can be paused for a custom period of time.
- Quick Toggle makes switching Night Shift on and off faster.
- Dark mode can follow the Night Shift schedule.
- Global keyboard shortcuts cover common Shifty actions.
- Night Shift rules can also apply to True Tone.

The latest release, Shifty 1.2 from October 2021, needs macOS 10.12.4 or later. It is a ZIP with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. Shifty is free under the GPLv3, and Homebrew installs it as a cask.

Because Shifty drives Apple's own feature rather than its own color filter, your Mac has to meet Apple's requirements for Night Shift. By contrast, f.lux is a separate program that adapts the display's color to the time of day.
