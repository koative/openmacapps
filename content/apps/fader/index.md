---
name: "Fader"
summary: "A menu bar volume mixer with per-app volume, one-click output switching and Bluetooth headphone control."
category: "Utilities"
tags:
  - audio
  - volume
  - menu-bar
repository: "https://github.com/pantafive/fader"
website: "https://fader.pantafive.dev"
license: "MIT"
licenseUrl: "https://github.com/pantafive/fader/blob/main/LICENSE"
download: "https://github.com/pantafive/fader/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/pantafive/fader"
  - "https://github.com/pantafive/fader/blob/main/LICENSE"
  - "https://github.com/pantafive/fader/releases"
  - "https://fader.pantafive.dev"
  - "https://github.com/pantafive/fader/releases/tag/v0.22.1"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/pantafive/fader/main/Fader/Resources/Fader.icns"
    credit: "pantafive"
    license: "MIT; upstream app icon, trademarks retained"
---

Fader puts your Mac's audio outputs and a volume slider for each app into one menu bar popover. Click headphones, speakers, a display or an AirPlay target to send sound there. Paired Bluetooth headphones stay in the list while disconnected, and clicking one connects it.

- Each app that is playing audio gets a slider and mute button, and the levels are kept between launches.
- You can pin one or more devices to an app, each at its own level, while everything else stays on the main output.
- Dragging a second device onto the output section makes both play at once. In that mode the per-device sliders replace the volume keys, and per-app sliders pause.
- Once you reorder the device list, Fader switches to the highest-ranked device that is connected.
- The microphone tab changes the default input, sets its gain and shows which apps are using it.

Only per-app volume needs a permission. It relies on Core Audio process taps, which macOS puts behind the System Audio Recording permission, and Fader requests it when you first drag an app's slider. An app left at full volume and unmuted is not tapped at all. The developer says the audio never leaves the Mac and that the app has no telemetry. Nothing else gets installed: no kernel extension and no virtual audio driver.

Fader needs macOS 15 or later and is made for Apple silicon. The release DMG holds a Developer ID-signed, notarized app that updates itself, and the app is also offered through the developer's Homebrew tap. It is MIT-licensed.
