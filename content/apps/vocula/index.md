---
name: "Vocula"
summary: "Push-to-talk dictation that runs on your Mac and types at the caret. Source is GPL-3.0; the signed build is paid."
category: "Productivity"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - local-first
alternativeTo:
  - wispr-flow
repository: "https://github.com/vitaly-kashtalyan/vocula"
website: "https://vocula.app"
license: "GPL-3.0"
licenseUrl: "https://github.com/vitaly-kashtalyan/vocula/blob/main/LICENSE"
download: "https://vocula.app"
freeDownload: false
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/vitaly-kashtalyan/vocula"
  - "https://github.com/vitaly-kashtalyan/vocula/blob/main/LICENSE"
  - "https://github.com/vitaly-kashtalyan/vocula/releases"
  - "https://vocula.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/vitaly-kashtalyan/vocula/main/App/Vocula/Assets.xcassets/AppIcon.appiconset/icon_512x512.png"
    credit: "Vocula contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Vocula turns speech into text wherever the cursor is. You hold a key, speak, and the transcript is inserted at the caret of the app in front of you, in up to 100 languages. Recognition runs on the Mac with Whisper or Parakeet models, which are downloaded once on first run, so the dictated text stays local and there is no account. It suits people who write a lot in other apps and want dictation without sending their voice to a cloud service.

It requires macOS 26.0 or later and works only on Apple silicon; Intel Macs are not supported. It asks for Accessibility and Microphone permission the first time each is needed. The signed and notarized build is sold at vocula.app, while the source is GPL-3.0 and free to build. A self-built copy is signed ad hoc, so macOS asks for permissions again after every rebuild, and it runs without limits for thirty days, then allows ten inserted dictations a day until a licence key is entered. Apart from the model download and an optional daily update check, the README says the app sends nothing.
