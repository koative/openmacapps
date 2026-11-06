---
name: "LockMic"
summary: "Menu bar tool that mutes all microphones with a global hotkey, push-to-talk shortcuts and an on-screen indicator."
category: "Utilities"
tags:
  - microphone
  - menu-bar
  - keyboard-shortcuts
  - audio
  - privacy
repository: "https://github.com/oochernyshev/lockmic"
website: "https://github.com/oochernyshev/lockmic"
license: "MIT"
licenseUrl: "https://github.com/oochernyshev/lockmic/blob/main/LICENSE"
download: "https://github.com/oochernyshev/lockmic/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/oochernyshev/lockmic"
  - "https://github.com/oochernyshev/lockmic/blob/main/LICENSE"
  - "https://github.com/oochernyshev/lockmic/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/oochernyshev/lockmic/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "WIXEE.AI"
    license: "MIT; upstream app icon, trademarks retained"
---

LockMic mutes the system's input devices through Core Audio, so the mute holds in Zoom, Teams, browsers and any other app. You toggle it from the menu bar, with a global shortcut, or by clicking an optional floating indicator, and it can also run push-to-talk and push-to-mute holds. It can record the microphone and system audio to a dated AAC file, but only when you start a recording. It is for people who need a hard mute on calls.

Requires macOS 14 Sonoma or later; building from source needs Xcode 15 and XcodeGen. The direct DMG and zip are Developer ID signed and notarized, which the v1.4.51 zip confirmed. The Homebrew tap needs a one-time `brew trust` step. The app is MIT-licensed, but the author says future Pro features may be offered separately under other terms.
