---
name: "Quant Voice"
summary: "Offline voice dictation for macOS: press a hotkey, speak, and the recognized text is typed at the cursor."
category: "Productivity"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - local-ai
repository: "https://github.com/avklyuev79-hash/quant-voice"
website: "https://github.com/avklyuev79-hash/quant-voice"
license: "MIT"
licenseUrl: "https://github.com/avklyuev79-hash/quant-voice/blob/main/LICENSE"
download: "https://github.com/avklyuev79-hash/quant-voice/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/avklyuev79-hash/quant-voice"
  - "https://github.com/avklyuev79-hash/quant-voice/blob/main/LICENSE"
  - "https://github.com/avklyuev79-hash/quant-voice/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/avklyuev79-hash/quant-voice/main/QuantVoice/Resources/AppIcon.iconset/icon_512x512%402x.png"
    credit: "Quant agency (quant-agency.ru)"
    license: "MIT for the code; the Quant name, logo and brand style are not covered, trademarks retained"
---

Quant Voice turns speech into text on the Mac. You press a hotkey, speak, and the recognized text is typed where the cursor is, in any app. It uses a Whisper model that runs locally through WhisperKit, supports Russian and English, and keeps English brand names in Latin script inside Russian sentences. A short press starts and stops recording, and holding the key records while it is down. It is for people who dictate in Russian or mixed-language text. The README says audio is kept in memory only for the phrase, no dictation history is stored, and nothing is sent to a server; the only network use is downloading a model you choose.

It requires macOS 14 or later; the README does not list chip requirements. It needs Microphone and Accessibility permissions, and dictation does not work until you download a speech model from the menu bar icon. The release is not notarized, so the first launch needs System Settings > Privacy & Security > Open Anyway, or right-click and Open. The app lives in the menu bar without a Dock icon, and the Quant name and logo are not licensed under the MIT code license.
