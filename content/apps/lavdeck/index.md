---
name: "Lavdeck"
summary: "Menu bar app for DJI Mic Series Mobile RX receivers: shows status and controls mode, gain and recording."
category: "Media"
tags:
  - audio
  - menu-bar
  - hardware
  - transcription
repository: "https://github.com/piedol/lavdeck"
website: "https://www.piedol.top/lavdeck/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/piedol/lavdeck/blob/main/LICENSE"
download: "https://github.com/piedol/lavdeck/releases/latest/download/Lavdeck-macOS-arm64.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/piedol/lavdeck"
  - "https://github.com/piedol/lavdeck/blob/main/LICENSE"
  - "https://github.com/piedol/lavdeck/releases"
  - "https://www.piedol.top/lavdeck/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/piedol/lavdeck/main/assets/AppIcon.icns"
    credit: "piedol"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

Lavdeck puts a DJI Mic Series Mobile RX receiver in the menu bar. The deck shows both transmitters with link state, live level, charging and firmware, and it switches the receiver between mono and stereo, sets gain from −12 to +12 dB, and starts and stops a take. Stereo takes save a 24-bit WAV for each mic beside the stereo file. Takes can include screen and camera video, and a Recordings window searches them. Transcription comes from plugins you install, because Lavdeck ships none. It is for people who record with these DJI receivers on a Mac.

Requires a Mac with Apple silicon and macOS 15 or later; the author has tested it on macOS 26. The README lists the Mobile RX with Mic Mini transmitters as tested and other DJI receivers as unknown. Lavdeck cannot update mic firmware. The README says the release is signed and notarized by Apple. It has no analytics and checks GitHub for updates once a day unless you turn that off. Plugins run as you and are not sandboxed, so install only plugins you trust. Lavdeck is not made by DJI or affiliated with it.
