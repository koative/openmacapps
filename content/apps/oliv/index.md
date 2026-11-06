---
name: "OLIV"
summary: "Push-to-talk dictation for Thai mixed with English on Apple silicon Macs, running offline and pasting at the cursor."
category: "Productivity"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - offline
alternativeTo:
  - wispr-flow
repository: "https://github.com/chayapats/oliv"
website: "https://chayapats.github.io/oliv/"
license: "MIT"
licenseUrl: "https://github.com/chayapats/oliv/blob/main/LICENSE"
download: "https://github.com/chayapats/oliv/releases/download/v0.2.2/OLIV-0.2.2.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/chayapats/oliv"
  - "https://github.com/chayapats/oliv/blob/main/LICENSE"
  - "https://github.com/chayapats/oliv/releases"
  - "https://chayapats.github.io/oliv/"
---

OLIV is a dictation app for people who speak Thai and English in the same sentence. You hold a key, speak, and it pastes the text where your cursor is. Speech recognition uses Typhoon Whisper Turbo on the Mac, and a small local language model changes Thai-spelled English tech words back into English. The project's own test set reports about 98% meaning match with cleanup on; the figures come from one speaker's recordings.

It needs an Apple silicon Mac (M1 or newer) with macOS 14 or later. On first run it downloads about 5 GB of models from Hugging Face, and it needs Microphone and Accessibility permission. The README says the DMG is signed and notarized by Apple. Recognition runs on the Mac by default and needs no account. The optional OLIV API and Groq engines send audio off the Mac, and the free trial can send recordings to the OLIV server while the models download. The README says there are no analytics or telemetry.
