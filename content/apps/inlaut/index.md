---
name: "inlaut"
summary: "Local menu bar dictation: hold a key combination, speak, and the text lands in the focused field. German and English."
category: "Productivity"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - menu-bar
alternativeTo:
  - wispr-flow
repository: "https://github.com/tobymarks/inlaut"
website: "https://inlaut.de"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/tobymarks/inlaut/blob/main/LICENSE"
download: "https://github.com/tobymarks/inlaut/releases/download/v0.6.0/Inlaut-0.6.0-en.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/tobymarks/inlaut"
  - "https://github.com/tobymarks/inlaut/blob/main/LICENSE"
  - "https://github.com/tobymarks/inlaut/releases"
  - "https://inlaut.de"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/tobymarks/inlaut/main/design/inlaut-brand-kit/app-icon/inlaut-512.png"
    credit: "Tobias Marks"
    license: "Not GPL: inlaut app icon, all rights reserved per design/LICENSE-ASSETS.md; trademarks retained"
---

inlaut is dictation for the Mac. You hold a key combination, speak, and the recognized text is typed into whichever text field has the cursor. Recognition runs on the Mac with an on-device model, and the README says no dictation data is sent. It handles German and English, including sentences that mix both, and it can tidy filler words and transcribe existing audio or video files. It is for people who want a local alternative to cloud dictation tools such as Wispr Flow.

The README says the app requires macOS 26 or later on Apple silicon. The app and DMG are Developer ID signed and notarized by Apple. Setup downloads a speech model of about 630 MB once, and asks for microphone and Accessibility permission; Accessibility is what allows pasting into other apps. The Windows beta is a separate, unsigned download.
