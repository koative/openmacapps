---
name: "Steno"
summary: "Dictation app that types your speech at the cursor using on-device Whisper models, with meeting transcripts."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/Thesimpleex/steno"
website: "https://www.majores.store/"
license: "MIT"
licenseUrl: "https://github.com/Thesimpleex/steno/blob/main/LICENSE"
download: "https://github.com/Thesimpleex/steno/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Thesimpleex/steno"
  - "https://github.com/Thesimpleex/steno/blob/main/LICENSE"
  - "https://github.com/Thesimpleex/steno/releases/latest"
  - "https://www.majores.store/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Thesimpleex/steno/releases/download/v1.1/Steno.dmg"
    credit: "Thesimpleex (Steno)"
    license: "MIT; upstream app icon, trademarks retained"
---

Steno types what you say into the field that has focus. Hold Option, or another key you choose, speak, and release; the text is pasted at the cursor. Transcription runs on the Mac with Whisper through whisper.cpp, and audio is never written to disk. Steno also transcribes meetings with timestamps, keeps a searchable history, and offers a personal dictionary that corrects names. It suits people who write a lot, or who cannot send their voice to a cloud service.

It requires an Apple silicon Mac with macOS 14.2 or later and at least 2.5 GB of free space, about 4 GB with the largest model. The DMG is not notarized, so macOS blocks the first launch; allow it under System Settings › Privacy & Security. Setup asks for microphone access and Accessibility permission, which Steno uses to detect the hotkey and paste the text. The only network request is the one-time model download from Hugging Face.
