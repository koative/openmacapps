---
name: "AI Dictation"
summary: "Types what you say into the active app after a keyboard shortcut, using on-device or cloud recognition."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - cross-platform
  - voice-typing
repository: https://github.com/writingmate/aidictation
website: https://aidictation.com/
license: "MIT"
licenseUrl: https://github.com/writingmate/aidictation/blob/main/LICENSE
download: https://aidictation.com/download
freeDownload: false
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/writingmate/aidictation", "https://github.com/writingmate/aidictation/blob/main/LICENSE", "https://raw.githubusercontent.com/writingmate/aidictation/main/README.md", "https://aidictation.com/", "https://aidictation.com/download", "https://github.com/writingmate/aidictation/releases", "https://github.com/writingmate/aidictation/releases/tag/v0.0.136"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/writingmate/aidictation/main/Whishpermate/Whispermate/Assets.xcassets/AppIcon.appiconset/256-mac.png
    credit: "AI Dictation contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

AI Dictation turns speech into text in the app you are typing in. Put the cursor in a text field, press your shortcut, speak, and stop; the finished text goes where the cursor was.

Recognition runs in one of two modes. Offline mode runs it on the Mac after a one-time model download and needs macOS 14. Cloud mode sends the recording to a transcription service. An optional cleanup step tidies and formats the text afterwards, and it can send the transcript out even in offline mode, so turn it off if nothing should leave the Mac.

- Personal vocabulary gives the spelling of names, products and jargon.
- Replacements swap a phrase as spoken for the text you prefer.
- Voice shortcuts turn a short spoken cue into a phrase you use often.
- Writing rules set format or tone for a particular context.

The website aims the app at people who switch between Russian, Ukrainian or Belarusian and English at work, and says it leaves English terms as spoken.

Dictation is metered and tied to an account: you sign in before downloading, the free trial covers 5,000 words, and after that dictation needs a paid Pro plan. The 0.0.136 disk image holds a Universal app for macOS 13 or later, signed with a Developer ID and notarized. The Windows, iPhone, iPad and Android clients are in the same MIT-licensed repository.
