---
name: Lunar
summary: "Adjusts the real brightness, contrast, volume and input of external monitors from the keyboard and menu bar."
category: Utilities
tags:
  - display
  - brightness
  - monitors
repository: https://github.com/alin23/Lunar
website: https://lunar.fyi
license: MIT
licenseUrl: https://github.com/alin23/Lunar/blob/master/LICENSE
download: https://github.com/alin23/Lunar/releases
freeDownload: true
homebrew: "lunar"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/alin23/Lunar
  - https://github.com/alin23/Lunar/blob/master/LICENSE
  - https://github.com/alin23/Lunar/blob/master/README.md
  - https://github.com/alin23/Lunar/releases
  - https://raw.githubusercontent.com/alin23/Lunar/master/README.md
  - https://lunar.fyi
  - https://github.com/alin23/Lunar/releases/tag/v6.11.3
assets:
  - path: ./assets/icon.png
    source: https://github.com/alin23/Lunar/blob/491ec140bf3f11d55fe5d6e72ae72cc4bcee25cf/Lunar/Assets.xcassets/AppIcon.appiconset/256.png
    credit: Lunar contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Lunar makes your Mac's brightness and volume keys work on external monitors. On a monitor that supports DDC/CI, it changes the panel's real backlight, contrast and volume through the cable. Monitors that refuse those commands can still be dimmed by adjusting the colour output instead.

The free version covers key control, hotkeys that respect a minimum and maximum per monitor, dimming below 0% for late nights, input switching from a dropdown or hotkeys, and a command-line tool. It has no time limit, but its manual mode allows 100 adjustments a day. Other features need Lunar Pro, which has a 14-day trial:

- Sync Mode copies the adaptive brightness of a MacBook or iMac's built-in sensor to every external monitor.
- Sensor and Location modes adapt brightness from an external light sensor or from the sun's position.
- XDR Brightness unlocks the full brightness of XDR displays.
- BlackOut switches off chosen screens while USB-C charging, monitor audio and the monitor's USB hub keep working.

Lunar leaves the built-in display's own adaptive brightness alone and works alongside Night Shift and True Tone. The developer lists HDMI, DisplayPort, Thunderbolt, VGA and DVI as tested, plus adapters that pass DDC messages through.

The Pro code in the repository is encrypted, so the app cannot be built from this source. The release DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, which requires macOS 12 or later.
