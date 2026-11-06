---
name: "Parrot"
summary: "Hold fn, speak and let go: Whisper transcribes on the Mac and pastes the text at the cursor. A command-line tool is included."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - voice-typing
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/humanitas-labs/parrot"
website: "https://perroquet.xyz"
license: "MIT"
licenseUrl: "https://github.com/humanitas-labs/parrot/blob/master/LICENSE"
download: "https://github.com/humanitas-labs/parrot/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/humanitas-labs/parrot"
  - "https://github.com/humanitas-labs/parrot/blob/master/LICENSE"
  - "https://github.com/humanitas-labs/parrot/releases"
  - "https://perroquet.xyz"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/humanitas-labs/parrot/master/docs/assets/app-icon.png"
    credit: "Humanitas Labs"
    license: "MIT; upstream app icon, trademarks retained"
---

Parrot is push-to-talk dictation for any text field. Hold fn, or another modifier key picked in Settings, say what you want, and release; WhisperKit transcribes the recording on the Neural Engine and the result is pasted at the cursor, after which your clipboard is put back. Audio never leaves the Mac. Multilingual Whisper models can be chosen for other languages, and a plain-text dictionary file teaches it how to spell names and technical terms.

It is for people who want quick dictation without a cloud service or subscription. The same app provides a `parrot` command for setup, permission checks, model selection and launch-at-login.

Parrot needs macOS 14 or later on Apple silicon; Intel Macs are not supported. It is signed and notarized and checks for updates once a day. It asks for Accessibility and microphone access, and the first start downloads a speech model of about 150 MB. The project is at version 0.2, so expect changes.
