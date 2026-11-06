---
name: "Utter"
summary: "Offline voice dictation for macOS: hold a key, speak, and the text appears where the cursor is."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - voice-typing
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/h3x-levi/Utter"
website: "https://utter-eight.vercel.app/"
license: "Apache-2.0"
licenseUrl: "https://github.com/h3x-levi/Utter/blob/production/LICENSE"
download: "https://github.com/h3x-levi/Utter/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/h3x-levi/Utter"
  - "https://github.com/h3x-levi/Utter/blob/production/LICENSE"
  - "https://github.com/h3x-levi/Utter/releases/latest"
  - "https://utter-eight.vercel.app/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/h3x-levi/Utter/production/Assets/AppIconSource.png"
    credit: "Utter contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Utter turns speech into text in whichever app has the cursor. You hold fn, or another modifier key, speak, and let go; the transcript is typed in. The speech model runs on the Mac, with whisper.cpp or an optional engine, and audio is never uploaded. The app also keeps a searchable library of past dictations, can turn one into a note, offers to transcribe a call, and has a personal dictionary and text snippets. It suits people who dictate into many apps and want recognition that works offline and without a subscription.

Utter runs on macOS 14 or later, on Apple silicon or Intel. The DMG includes a speech model of about 190 MB. The README says the app is signed but not notarized, so the first launch needs Open Anyway under System Settings, Privacy & Security. It asks for Microphone and Accessibility permissions, and it has no accounts or telemetry.
