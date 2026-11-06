---
name: "Plainsay"
summary: "Hold a key, speak, and the transcribed text lands at your cursor. Models run on your Mac; an optional paid cloud tier exists."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - voice-typing
alternativeTo:
  - wispr-flow
repository: "https://github.com/conrader/plainsay"
website: "https://plainsay.app"
license: "MIT"
licenseNotes: "The README calls this the MIT-licensed client. Plainsay Cloud, the optional hosted transcription and polishing service at US$4 per month, is a separate paid service."
licenseUrl: "https://github.com/conrader/plainsay/blob/main/LICENSE"
download: "https://github.com/conrader/plainsay/releases/download/v0.2.38/Plainsay-0.2.38.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/conrader/plainsay"
  - "https://github.com/conrader/plainsay/blob/main/LICENSE"
  - "https://github.com/conrader/plainsay/releases"
  - "https://plainsay.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/conrader/plainsay/main/Scripts/AppIcon.icns"
    credit: "Konrad Sierzputowski"
    license: "MIT; upstream app icon, trademarks retained"
---

Plainsay is a dictation app for macOS. You hold a shortcut, speak, and release it, and the transcribed text is typed at the cursor in whichever app is active. It can also correct the last dictation by voice and edit selected text. It suits people who dictate into many apps and want the audio to stay on their Mac, since local transcription uploads nothing.

It needs macOS 14 or later on Apple silicon, and the README says the build is signed and notarized. The recommended multilingual models are separate one-time downloads of about 475 to 632 MB; English-only models start at about 150 MB. Local mode needs no account and is free. Plainsay Cloud is optional and paid: it sends recorded audio to the service and unlocks auto-translate and automatic email layout. Automatic checks for signed updates are on by default and can be turned off in Settings.
