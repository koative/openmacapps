---
name: "Tamka"
summary: "Offline dictation for any Mac app, plus file transcription, using on-device Parakeet models or Apple Speech."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - local-first
  - voice-typing
alternativeTo:
  - wispr-flow
repository: "https://github.com/piedol/tamka"
website: "https://www.piedol.top/tamka/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/piedol/tamka/blob/main/LICENSE"
download: "https://github.com/piedol/tamka/releases/download/v0.1.4/Tamka-macOS-arm64.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/piedol/tamka"
  - "https://github.com/piedol/tamka/blob/main/LICENSE"
  - "https://github.com/piedol/tamka/releases"
  - "https://www.piedol.top/tamka/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/piedol/tamka/main/assets/AppIcon.icns"
    credit: "piedol"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

Tamka types what you say into any app on your Mac. You press a shortcut, speak, and press it again, and the text appears at the cursor. It can also transcribe audio files. Before typing, it removes filler words and stutters, and it turns spoken commands such as "new line" into the characters they name. Recognition runs on the Mac with NVIDIA's Parakeet models or Apple Speech, and the README says audio never leaves the Mac. It suits people who dictate often and want recognition that works offline.

Requires an Apple silicon Mac running macOS 26 or later; Apple Speech uses SpeechAnalyzer, which needs macOS 26. The app ships without a speech model. On first launch, Settings › Models offers Parakeet Ultra, a 632 MB download, and it works offline after that. The release is signed with a Developer ID and notarized by Apple, so it opens without a security warning. Tamka is GPL-3.0-or-later, so anyone who distributes a modified version must release its source under the same license.
