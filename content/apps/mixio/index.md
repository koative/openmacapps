---
name: "Mixio"
summary: "Sets separate volumes for each app and browser tab, with a 10-band equalizer in the menu bar."
category: "Media"
tags:
  - audio
  - volume
  - menu-bar
  - equalizer
repository: https://github.com/RadixIV/Mixio
website: https://github.com/RadixIV/Mixio
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/RadixIV/Mixio/blob/main/LICENSE
download: https://github.com/RadixIV/Mixio/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/RadixIV/Mixio
  - https://github.com/RadixIV/Mixio/blob/main/LICENSE
  - https://github.com/RadixIV/Mixio/releases
  - https://raw.githubusercontent.com/RadixIV/Mixio/main/README.md
  - https://github.com/RadixIV/Mixio/releases/tag/v1.2.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/RadixIV/Mixio/releases/download/v1.2.1/Mixio-1.2.1.dmg
    credit: "RadixIV"
    license: "Not covered by the GPL per the README; official app icon extracted unmodified from the upstream release build, name and icon retained by RadixIV"
---

Mixio gives every app that is playing sound its own volume slider, so you can lower a video call without touching your music. Click the speaker icon in the menu bar and a window lists the current output device, its overall volume and one row per app. Dragging a row's slider changes only that app, clicking its speaker icon mutes it, and clicking its icon brings the app to the front. Mixio remembers the levels you set and applies them again the next time an app makes sound.

In Safari and Chrome it can split audio by tab, so one noisy tab can be turned down while the others keep playing. This is switched on in Settings and needs automation permission for the browser.

- A 10-band equalizer from 32 Hz to 16 kHz, with built-in presets such as Bass Boost and Vocal and room for your own
- A picker for switching the output device from the same window
- An optional on-screen volume display that replaces the system one when you press the volume keys, placed where you choose
- Launch at login and built-in update checks

Mixio runs on macOS 26 or later. The 1.2.1 DMG holds a Universal app for Apple silicon and Intel, and both the disk image and the app are notarized with a Developer ID. Per-app volume and the equalizer need System Audio Recording permission, and the custom volume display needs Accessibility. While Mixio applies a change, macOS shows its purple audio-capture dot in the menu bar.
