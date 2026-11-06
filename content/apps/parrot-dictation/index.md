---
name: "Parrot"
summary: "Menu bar dictation: say Oy or tap Option, speak, and the text is pasted into the field you are typing in."
category: "Productivity"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/HMDRAMS-DEV/parrot"
website: "https://parrot.ramihmd.com"
license: "MIT"
licenseUrl: "https://github.com/HMDRAMS-DEV/parrot/blob/main/LICENSE"
download: "https://github.com/HMDRAMS-DEV/parrot/releases/latest/download/Parrot.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/HMDRAMS-DEV/parrot"
  - "https://github.com/HMDRAMS-DEV/parrot/blob/main/LICENSE"
  - "https://github.com/HMDRAMS-DEV/parrot/releases"
  - "https://parrot.ramihmd.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/HMDRAMS-DEV/parrot/main/Parrot/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Rami Alhamad"
    license: "MIT; upstream app icon, trademarks retained"
---

Parrot turns speech into text on the Mac and pastes it where the cursor is. Hold or tap Option to start and stop, or turn on the "Oy" wake word and start a sentence with it. Speech is transcribed by local Parakeet models, which download once and run on the Mac, and an optional cleanup model fixes punctuation and drops filler words. A history keeps every dictation with the original and cleaned text, a vocabulary list spells names and jargon your way, and call notes can record your microphone and the Mac's audio and write a summary when the call ends. It is for people who want dictation without sending their speech to a cloud service.

Requires macOS 26 or later. The default cleanup model is a 630 MB download on first launch; the Apple Intelligence option needs no download. Parrot asks for microphone access on first dictation, Accessibility to see the Option key in other apps and press Command-V, and System Audio Recording only when you record a call. Without headphones, a call's speakers can be picked up by the microphone too, which Parrot only partly filters. The README says the release script notarizes the disk image. Parrot is not sandboxed, so it is not sold through the Mac App Store.
