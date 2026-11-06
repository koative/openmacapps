---
name: "jdsp4mac"
summary: "Menu bar app that runs the JamesDSP audio engine system-wide through a Core Audio tap, with equalizer, AutoEq and presets."
category: "Media"
tags:
  - audio
  - menu-bar
  - native
repository: "https://github.com/Tekkiech/jdsp4mac"
website: "https://github.com/Tekkiech/jdsp4mac"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/Tekkiech/jdsp4mac/blob/main/LICENSE"
download: "https://github.com/Tekkiech/jdsp4mac/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Tekkiech/jdsp4mac"
  - "https://github.com/Tekkiech/jdsp4mac/blob/main/LICENSE"
  - "https://github.com/Tekkiech/jdsp4mac/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Tekkiech/jdsp4mac/HEAD/Sources/App/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "jdsp4mac contributors"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

jdsp4mac puts the JamesDSP audio engine on the Mac as a menu bar app. Sound the Mac plays passes through the effects you choose: bass boost, a FIR or IIR equalizer with JDSP4Linux's presets, AutoEq headphone profiles, a convolver for impulse responses, crossfeed and stereo width. It captures audio through a Core Audio process tap rather than a kernel extension, can skip effects for chosen apps such as FaceTime, and reads and writes presets in the JamesDSP for Linux format. It suits people who already use JamesDSP elsewhere and want the same sound on a Mac.

jdsp4mac requires macOS 14.4 or later on Apple silicon; the author has tested it only on macOS 27.0.1. The app is not notarized, so the first launch has to be allowed in System Settings under Privacy & Security, using Open Anyway. It asks for permission to record system audio. Long convolver impulse responses use noticeable CPU: the README gives about 13 % of one core on an M1 Pro for a 5-second response.
