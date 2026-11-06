---
name: "Spit"
summary: "On-device voice dictation with WhisperKit: a hotkey starts recording and the text is typed where your cursor is."
category: "Utilities"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - transcription
alternativeTo:
  - wispr-flow
repository: "https://github.com/Draxo-io/spit"
website: "https://getspit.app"
license: "MIT"
licenseUrl: "https://github.com/Draxo-io/spit/blob/main/LICENSE"
download: "https://github.com/Draxo-io/spit/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Draxo-io/spit"
  - "https://github.com/Draxo-io/spit/blob/main/LICENSE"
  - "https://github.com/Draxo-io/spit/releases/latest"
  - "https://getspit.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Draxo-io/spit/releases/download/v2.3/Spit-2.3.dmg"
    credit: "Rafael Lopes"
    license: "MIT; upstream app icon, trademarks retained"
---

Spit records while you hold the Globe key for push-to-talk or tap it to start and stop, then inserts the transcript at the cursor through the Accessibility API, with a paste fallback for apps that refuse it. Transcription runs locally with WhisperKit, and a live preview appears while you speak. Optional features include on-device cleanup of punctuation and paragraphs, translation on macOS 15 and later, a personal vocabulary, and reading selected text aloud. It suits people who want dictation without sending audio to a service or paying a subscription.

It needs macOS 14 or later and Apple silicon (M1 or newer), because on-device Whisper inference requires it. The release is notarized with a Developer ID. Spit asks for microphone and Accessibility access, and its README states that it has no analytics or telemetry and makes no network requests during normal use.
