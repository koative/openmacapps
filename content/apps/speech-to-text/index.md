---
name: "Speech to Text"
summary: "Menu bar dictation for Mac: a shortcut starts transcription, which runs on your Mac and pastes the text at the cursor."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - voice-typing
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/ciro-maciel/speech-to-text"
website: "https://ciromaciel.click/tools/speech-to-text"
license: "MIT"
licenseUrl: "https://github.com/ciro-maciel/speech-to-text/blob/main/LICENSE"
download: "https://github.com/ciro-maciel/speech-to-text/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ciro-maciel/speech-to-text"
  - "https://github.com/ciro-maciel/speech-to-text/blob/main/LICENSE"
  - "https://github.com/ciro-maciel/speech-to-text/releases"
  - "https://ciromaciel.click/tools/speech-to-text"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/ciro-maciel/speech-to-text/blob/main/Resources/AppIcon.icns"
    credit: "Ciro Cesar Maciel; letter S from Candal by Vernon Adams"
    license: "SIL OFL 1.1 for the Candal letterform; upstream app icon, trademarks retained"
---

Speech to Text is a menu bar app for dictating into any Mac app. You press a shortcut, speak, and the text is pasted where the cursor is; press the shortcut again to stop, or release it in hold mode. Transcription runs on the Mac with an NVIDIA Parakeet model that the app downloads once, about 643 MB, and the audio is discarded once it has become text. An optional refine and translate step sends only the transcribed text to OpenRouter, with your own key. It suits people who write a lot in messages, documents or code editors and would rather speak than type, in any of the 25 European languages the model knows, English and Portuguese included.

Requires macOS 14 or later on Apple silicon. On first start the app asks for Microphone access and for Accessibility, which it needs to paste the text. The README says the disk image is signed with Developer ID and notarized by Apple, so it should open without a warning. The app is free and open source under the MIT license.
