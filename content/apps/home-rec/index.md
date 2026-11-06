---
name: "Home Rec"
summary: "Records whatever your Mac is playing to a lossless WAV in one click, with no drivers, routing or account."
category: "Media"
tags:
  - audio
  - native
  - system-audio
  - lossless
repository: "https://github.com/melissa-pereira-deel/home-rec"
website: "https://www.homerec.app"
license: "Apache-2.0"
licenseUrl: "https://github.com/melissa-pereira-deel/home-rec/blob/main/LICENSE"
download: "https://github.com/melissa-pereira-deel/home-rec/releases/latest/download/HomeRec.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/melissa-pereira-deel/home-rec"
  - "https://github.com/melissa-pereira-deel/home-rec/blob/main/LICENSE"
  - "https://github.com/melissa-pereira-deel/home-rec/releases"
  - "https://www.homerec.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/melissa-pereira-deel/home-rec/main/HomeRec/HomeRec/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Melissa de Britto"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Home Rec records the system audio your Mac is playing and saves it as a lossless WAV with one click from the menu bar or the main window. It uses ScreenCaptureKit directly, so it needs no virtual audio driver, no audio routing and no account. You can also record a single running app or a microphone. It suits anyone who wants a quick, unedited recording of what the Mac plays.

It needs macOS 15 or later, on Apple silicon or Intel in one universal build. It asks for Screen Recording permission, which ScreenCaptureKit requires even for audio-only capture, and for Microphone permission only if you record a microphone. The DMG is signed and notarized. The README says there is no telemetry: the only network request is a periodic check for updates, which can install them, and updates wait until a recording ends.
