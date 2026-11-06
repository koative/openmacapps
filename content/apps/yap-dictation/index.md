---
name: "yap"
summary: "On-device dictation and meeting transcription: hold a key, speak, and the text appears at your cursor."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - transcription
alternativeTo:
  - wispr-flow
repository: "https://github.com/TerrifiedBug/yap"
website: "https://yap.terrifiedbug.com"
license: "MIT"
licenseUrl: "https://github.com/TerrifiedBug/yap/blob/main/LICENSE"
download: "https://github.com/TerrifiedBug/yap/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/TerrifiedBug/yap"
  - "https://github.com/TerrifiedBug/yap/blob/main/LICENSE"
  - "https://github.com/TerrifiedBug/yap/releases/latest"
  - "https://yap.terrifiedbug.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/TerrifiedBug/yap/releases/latest/download/yap-0.3.1.dmg"
    credit: "Andrew Jones and Danny"
    license: "MIT; upstream app icon from yap.icns in yap.app, trademarks retained"
---

yap turns speech into text on your Mac. Hold the fn key, or another hotkey you choose, speak, and release; the text is typed at the cursor about 60 ms later. It can also record meetings, keeping your microphone and the system audio as separate tracks, and write a transcript with timings and optional speaker labels. Nothing is uploaded. The only network use is downloading the speech model once, and an update check when you ask for one. It suits people who dictate into chat boxes, documents or calls and want that to stay offline.

It needs macOS 15 or later on Apple silicon, because the model runs on the Neural Engine. The DMG is signed with a Developer ID and notarized, so there is no Gatekeeper prompt. The first launch asks for Accessibility and microphone access and downloads the default 220 MB model. Meeting detection is off by default. If fn is assigned to another macOS function, yap's menu points you to Keyboard settings.
