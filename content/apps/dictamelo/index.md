---
name: "Dictámelo"
summary: "Push-to-talk dictation for Mac and Windows using local speech models or your own cloud keys."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - transcription
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/sarrazola/dictamelo"
website: "https://dictamelo.com"
license: "MIT"
licenseUrl: "https://github.com/sarrazola/dictamelo/blob/main/LICENSE"
download: "https://github.com/sarrazola/dictamelo/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/sarrazola/dictamelo"
  - "https://github.com/sarrazola/dictamelo/blob/main/LICENSE"
  - "https://github.com/sarrazola/dictamelo/releases"
  - "https://dictamelo.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/sarrazola/dictamelo/main/src-tauri/icons/icon.png"
    credit: "Andrés Sarrazola"
    license: "MIT; upstream app icon, trademarks retained"
---

Dictámelo types what you say at the cursor of any app. You hold Alt/Option+Shift+Space (or Fn on a Mac), speak, and release; the transcript is pasted and your previous clipboard is restored. Transcription can run on the computer with downloadable Whisper, Parakeet or Canary models, with no account, or through your own Groq, OpenAI, Mistral or Deepgram key. Optional AI cleanup can tidy the text, and audio files can be transcribed too. It suits people who dictate across many apps and want to choose between local processing and their own cloud provider.

It requires an Apple silicon Mac, M1 or later; the README says Intel Macs are not provided and does not state a minimum macOS version. The README says Mac releases are Developer ID signed and notarized, and macOS asks for Microphone and Accessibility permission. The hosted Free Cloud plan allows 30 minutes of transcription a week, and Pro costs $4.99 a month for 180 hours per rolling 30 days. Neither hosted plan is needed when you use your own keys. Audio sent to the hosted service goes to Groq.
