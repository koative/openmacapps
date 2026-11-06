---
name: "BetterWispr"
summary: "Hold a shortcut, speak and release, and the text is typed into the app you were using, with offline speech models."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - voice-typing
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/opennookorg/betterwispr"
website: "https://betterwispr.com"
license: "Apache-2.0"
licenseUrl: "https://github.com/opennookorg/betterwispr/blob/main/LICENSE"
download: "https://github.com/opennookorg/betterwispr/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/opennookorg/betterwispr"
  - "https://github.com/opennookorg/betterwispr/blob/main/LICENSE"
  - "https://github.com/opennookorg/betterwispr/releases"
  - "https://betterwispr.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/opennookorg/betterwispr/releases/download/v0.1.5/BetterWispr-arm64.dmg"
    credit: "BetterWispr contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

BetterWispr is voice dictation for macOS. You hold Option and Space, speak, and release, and the text lands in the app you were typing in. Speech is recognised with Apple's on-device recogniser, or with Parakeet or Whisper models that you download once from the Models page. It also has a custom vocabulary for names and jargon, voice commands such as "new line", a local history, and optional transcripts of meetings and of audio or video files. It is an open-source alternative to Wispr Flow.

BetterWispr needs macOS 14 or later; the README recommends Apple silicon, and the release has separate arm64 and Intel DMGs. The Apple silicon build is notarized. It asks for microphone and accessibility access so it can paste. Audio stays on the Mac unless you choose an external connection or Codex subscription transcription, which send audio to that provider; the Codex option uses an unofficial ChatGPT endpoint.
