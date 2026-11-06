---
name: "Reed Dictation"
summary: "Free dictation for Apple silicon Macs: hold a shortcut, speak, and cleaned-up text is typed at your cursor in any app."
category: "Productivity"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/w20labs/reed"
website: "https://reed.w20.ai"
license: "Apache-2.0"
licenseUrl: "https://github.com/w20labs/reed/blob/main/LICENSE"
download: "https://github.com/w20labs/reed/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/w20labs/reed"
  - "https://github.com/w20labs/reed/blob/main/LICENSE"
  - "https://github.com/w20labs/reed/blob/main/NOTICE"
  - "https://github.com/w20labs/reed/releases"
  - "https://reed.w20.ai"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/w20labs/reed/main/Reed.icns"
    credit: "W20 Labs Inc."
    license: "Apache-2.0 repository asset; Reed name and icon retained by W20 Labs Inc."
---

Reed turns speech into text wherever you can type. You hold a shortcut, talk, and release, and the cleaned-up text appears at the cursor. It drops filler words, resolves self-corrections and writes numbers, amounts and dates the way you would type them. Recognition runs on the Mac with NVIDIA's Parakeet v3 model, and the cleanup step uses Apple's on-device models when Apple Intelligence is available. It suits people who dictate into mail, chat, notes or documents and want no account or subscription.

It needs macOS 14 or later on Apple silicon (M1 or newer); Intel Macs are not supported. The first run downloads a speech model of about 461 MB. Besides that download, the app only checks for updates over the network. AI cleanup needs macOS 26 with Apple Intelligence; otherwise a rules-based cleanup runs. English is the only supported language for now. The release is notarized by Apple.
