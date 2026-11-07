---
name: "Melingo"
summary: "Local-first macOS language app that turns text you read into vocabulary cards, reviewed with FSRS spaced repetition."
category: "Education"
tags:
  - languages
  - flashcards
  - learning
  - local-ai
repository: "https://github.com/timurverevkin/Melingo"
website: "https://github.com/timurverevkin/Melingo"
license: "Apache-2.0"
licenseUrl: "https://github.com/timurverevkin/Melingo/blob/main/LICENSE"
download: "https://github.com/timurverevkin/Melingo/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/timurverevkin/Melingo"
  - "https://github.com/timurverevkin/Melingo/blob/main/LICENSE"
  - "https://github.com/timurverevkin/Melingo/releases/latest"
assets:
  - path: ./assets/icon.png
    source: https://github.com/timurverevkin/Melingo/releases/download/MLXFIX/Melingo-0.3.2.dmg
    credit: Melingo contributors
    license: Apache-2.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Melingo is built around reading. You import text from the web, pasted content, PDFs, EPUBs, Markdown and other sources, tap a word to look it up and make a card, and review cards with FSRS scheduling. It also has a dictation study mode, and YouTube videos with timed subtitles can be added to the library. Your library and cards stay on your Mac in a Documents folder. It suits learners who already read in the language they are studying and want their vocabulary to come from that reading.

It requires macOS 15 or later, which the README recommends; building from source needs Xcode 16 or later. The README tells users to right-click the app and choose Open on first launch if Gatekeeper asks, which suggests the DMG is not notarized, but it does not say so directly. Caveats: the Telegram channel import needs a Telegram login, and its session sync to a second Mac uses Firebase, per the README. Local MLX models are used only when the Mac can run them, and Apple Intelligence features depend on the system.
