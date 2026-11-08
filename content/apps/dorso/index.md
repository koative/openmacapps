---
name: Dorso
summary: "Blurs the screen when you slouch, tracking your posture with the Mac's camera or AirPods."
category: Productivity
tags:
  - reminders
  - posture
  - menu-bar
repository: https://github.com/tldev/dorso
website: https://github.com/tldev/dorso
license: MIT
licenseUrl: https://github.com/tldev/dorso/blob/main/LICENSE
download: https://github.com/tldev/dorso/releases
freeDownload: true
homebrew: "dorso"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/tldev/dorso", "https://github.com/tldev/dorso/blob/main/LICENSE", "https://github.com/tldev/dorso/blob/main/README.md", "https://github.com/tldev/dorso/releases", "https://github.com/tldev/dorso/releases/tag/v1.17.0", "https://dorso.app/"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/tldev/dorso/blob/80a41c22d647d56cc01d7a0d1045ffdf86d8dfcc/AppIcon.icon/Assets/AppIcon.png
    credit: Dorso contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Dorso blurs your screen when you slouch and clears it when you sit up. Sit straight, click Recalibrate in its menu bar menu so it learns that position, and from then on the blur grows stronger the further your head drops.

It tracks you in one of two ways. In camera mode, Apple's Vision framework follows your head, falling back to your face when your body is out of view, and works best with even light and your shoulders in frame. AirPods mode reads head tilt from the motion sensors in AirPods Pro, AirPods Max or third-generation and later AirPods. It needs no camera, pauses when you take the AirPods out, and requires macOS 14.

The developer says all processing stays on the Mac, with no account and no cloud service. Dorso needs macOS 13 or later. Version 1.17.0 comes as a DMG or ZIP, and the DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized.

Settings cover five sensitivity levels and a dead zone that sets how far you can drift before anything happens. You can also blur the screen when you step away from the camera, pause automatically when the laptop display is the only screen, and show Dorso in the Dock. The blur reaches every connected display. If no blur appears, compatibility mode switches from a private CoreGraphics call to a public macOS API. A dashboard charts daily posture scores and slouch patterns over weeks and months.
