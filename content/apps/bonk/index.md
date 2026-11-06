---
name: "Bonk"
summary: "Menu bar app that maps knocks on an Apple silicon MacBook's chassis to shortcuts, apps, scripts and media keys."
category: "Utilities"
tags:
  - gestures
  - menu-bar
  - keyboard-shortcuts
repository: "https://github.com/Alex-duh/Bonk"
website: "https://trybonk.vercel.app/"
license: "GPL-3.0"
licenseUrl: "https://github.com/Alex-duh/Bonk/blob/main/LICENSE"
download: "https://github.com/Alex-duh/Bonk/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Alex-duh/Bonk"
  - "https://github.com/Alex-duh/Bonk/blob/main/LICENSE"
  - "https://github.com/Alex-duh/Bonk/releases"
  - "https://trybonk.vercel.app/"
---

Bonk reads the accelerometer that Apple silicon MacBooks already contain and treats one to four knocks anywhere on the chassis as separate triggers. Each pattern can run a media or system key, a keyboard shortcut, an app, a shell command or a Shortcuts shortcut, and per-app rules can override the global mapping. Knock calibration, a test mode and a live waveform help set the threshold. Knock detection runs on the Mac; the only network request is an optional daily version check. It suits people who want a physical shortcut for everyday controls such as play, pause or lock.

Requires an Apple silicon MacBook on macOS 13 or later. Intel Macs and desktops have no accelerometer, and the README notes that a few models do not expose the sensor; the `--probe` command in the app bundle checks a given Mac. Bonk is not notarized, so the first launch needs right-click, Open or the `xattr` command in the README. It needs Accessibility permission to press shortcuts for you, and it ignores knocks for 800 ms after a keystroke.
