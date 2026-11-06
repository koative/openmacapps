---
name: "MacCam"
summary: "Menu bar app that turns your Mac camera into a motion- or voice-triggered recorder that saves HEVC clips locally."
category: "Utilities"
tags:
  - camera
  - security
  - video
  - menu-bar
repository: "https://github.com/polyackiy/MacCam"
website: "https://github.com/polyackiy/MacCam"
license: "MIT"
licenseUrl: "https://github.com/polyackiy/MacCam/blob/main/LICENSE"
download: "https://github.com/polyackiy/MacCam/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/polyackiy/MacCam"
  - "https://github.com/polyackiy/MacCam/blob/main/LICENSE"
  - "https://github.com/polyackiy/MacCam/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/polyackiy/MacCam/main/MacCam/Assets.xcassets/AppIcon.appiconset/icon_512.png"
    credit: "MacCam contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

MacCam lives in the menu bar, watches the camera, and records clips to a folder you choose. The trigger can be continuous recording, motion (with detection zones painted over a live preview), voice, or both. It records with the hardware HEVC encoder and can capture audio only. Weekly schedules, disk-space limits, a guard mode that starts when the screen locks, and a discreet menu bar icon are also available. It runs offline with no network code and no telemetry. It suits people who want a desk or room camera that keeps recordings on a local disk, an external drive or a NAS.

It needs macOS 13 or later, on Apple silicon or Intel, with a camera. The release DMG is ad-hoc signed and not notarized, so right-click the app and choose Open the first time, or remove the quarantine attribute. Grant camera access, and microphone if you record sound. macOS shows its own camera-in-use indicator and lights the hardware LED whenever the camera is active, and MacCam cannot turn that off.
