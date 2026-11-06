---
name: "NativeVoice"
summary: "Hold-to-talk dictation in 36 languages that sends audio to ElevenLabs with your own key and pastes text at the cursor."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - voice-typing
  - cloud
alternativeTo:
  - wispr-flow
repository: "https://github.com/trustbe/nativevoice"
website: "https://nativevoice.trustbe.com"
license: "MIT"
licenseUrl: "https://github.com/trustbe/nativevoice/blob/main/LICENSE"
download: "https://github.com/trustbe/nativevoice/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/trustbe/nativevoice"
  - "https://github.com/trustbe/nativevoice/blob/main/LICENSE"
  - "https://github.com/trustbe/nativevoice/releases/latest"
  - "https://nativevoice.trustbe.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/trustbe/nativevoice/releases/download/v1.1.0/NativeVoice-v1.1.0.dmg"
    credit: "Jan Kafka"
    license: "MIT; upstream app icon, trademarks retained"
---

NativeVoice is a dictation app for macOS. You hold the right Command key, speak, and release it, and the transcript is pasted wherever the cursor is. It is aimed at people who dictate in languages that Apple's built-in dictation handles poorly, and it supports 36 of them. A custom vocabulary file helps with names and technical terms.

Audio is sent to ElevenLabs for transcription, so this is not an offline tool. You need your own ElevenLabs API key, which is stored in the Keychain. The app is free, but ElevenLabs has a limited free tier and paid plans. It requires macOS 13 or later and is a universal build. The release disk image is notarized. On first launch the app asks for Microphone, Input Monitoring and Accessibility permissions, and it needs both Input Monitoring and Accessibility to respond to the key and paste the text.
