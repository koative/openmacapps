---
name: "Cadenza"
summary: "Open-source voice input for macOS: hold a shortcut, speak, and the text is typed at your cursor. Local by default."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - voice-typing
alternativeTo:
  - wispr-flow
repository: "https://github.com/DragonKingIO/Cadenza-voice"
website: "https://dragonkingio.github.io/cadenza-site/"
license: "MIT"
licenseUrl: "https://github.com/DragonKingIO/Cadenza-voice/blob/main/LICENSE"
download: "https://github.com/DragonKingIO/Cadenza-voice/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/DragonKingIO/Cadenza-voice"
  - "https://github.com/DragonKingIO/Cadenza-voice/blob/main/LICENSE"
  - "https://github.com/DragonKingIO/Cadenza-voice/releases/tag/v1.3.2"
  - "https://dragonkingio.github.io/cadenza-site/download/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/DragonKingIO/Cadenza-voice/blob/main/cadenza/resources/brand/Cadenza.icns"
    credit: "Suiyan Contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Cadenza sits in the menu bar and turns speech into text in whichever app has focus. You hold a shortcut (Left Option by default), speak, and let go; the recognized text appears at the cursor. Recognition runs on your Mac with SenseVoice, FireRedASR2 or Parakeet through sherpa-onnx, and the models are downloaded inside the app. Cloud speech services are optional and use your own keys, sent only after you agree for each provider. It is aimed at people who dictate into many apps and want the audio to stay on their machine by default.

The release is version 1.3.2, a universal build for Apple silicon and Intel that needs macOS 14 or later. It is not notarized, so the first launch has to be allowed under System Settings → Privacy & Security → Open Anyway, and macOS asks for the Microphone, Accessibility and Input Monitoring permissions again after each update. The project calls itself an early preview: the maintainer uses it daily on macOS 26, but CI no longer tests macOS 14. Network use is limited to model downloads, the optional cloud services and update checks, and the project states it has no account and no telemetry.
