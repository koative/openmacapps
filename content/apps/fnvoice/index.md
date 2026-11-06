---
name: "FnVoice"
summary: "Push-to-talk dictation for macOS: hold Fn to speak and the text is pasted at the cursor, using OpenRouter speech models."
category: "Utilities"
tags:
  - dictation
  - speech-to-text
  - voice-typing
  - menu-bar
alternativeTo:
  - wispr-flow
repository: "https://github.com/MhmdEssB/fnvoice"
website: "https://github.com/MhmdEssB/fnvoice"
license: "MIT"
licenseUrl: "https://github.com/MhmdEssB/fnvoice/blob/main/LICENSE"
download: "https://github.com/MhmdEssB/fnvoice/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/MhmdEssB/fnvoice"
  - "https://github.com/MhmdEssB/fnvoice/blob/main/LICENSE"
  - "https://github.com/MhmdEssB/fnvoice/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/MhmdEssB/fnvoice/releases/download/v2.1.0/FnVoice.zip"
    credit: "MhmdEssB"
    license: "MIT; upstream app icon, trademarks retained"
---

FnVoice turns speech into text in any app. Hold the Fn key, speak, release, and the transcript is pasted where the cursor is. Audio goes to OpenRouter, where you choose the speech model and pay per minute of audio. A small proofreading pass with Claude Haiku applies your saved vocabulary to each dictation, and meeting recording can save microphone and system audio as a text file with an optional summary.

It is a fork of Paseru's whisper project, which the README says is no longer maintained. It suits people who would rather pay per use than subscribe to a dictation service.

Requires macOS 14 or later, with system-audio meeting capture needing 14.2 or later. You also need an OpenRouter API key and Microphone and Accessibility permissions. The DMG is not signed by Apple, so the first launch needs right-click, then Open. The app is free, but transcription and proofreading are billed by OpenRouter; the README estimates about $0.45 per hour of audio with the default model. Dictation audio is deleted from the Mac after transcription, and the README says requests go only to zero-data-retention providers.
