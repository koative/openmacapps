---
name: "Lekh Flow"
summary: "Open-source menu bar dictation for macOS: press a shortcut, speak, and the text lands at your cursor, transcribed on-device."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - menu-bar
  - local-ai
alternativeTo:
  - wispr-flow
repository: "https://github.com/ibuhs/Lekh-flow"
website: "https://github.com/ibuhs/Lekh-flow"
license: "GPL-3.0"
licenseUrl: "https://github.com/ibuhs/Lekh-flow/blob/main/LICENSE"
download: "https://github.com/ibuhs/Lekh-flow/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ibuhs/Lekh-flow"
  - "https://github.com/ibuhs/Lekh-flow/blob/main/LICENSE"
  - "https://github.com/ibuhs/Lekh-flow/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ibuhs/Lekh-flow/main/Lekh%20Flow/Assets.xcassets/AppIcon.appiconset/appicon_1024.png"
    credit: "Kaila Labs"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Lekh Flow is a menu bar app for dictating into whichever app has focus. You press a global shortcut and speak, a floating popup shows the transcript as it forms, and the text is pasted at the cursor or copied to the clipboard, depending on your settings. English uses Parakeet through FluidAudio and can commit phrases while you pause; other languages use WhisperKit and commit once when you press the shortcut again. It suits people who want quick dictation without a recording app, and who want the audio and transcription to stay on the Mac.

The app's minimum system version is macOS 14, and the README recommends an Apple Silicon Mac. It needs microphone access, plus accessibility access so it can insert text into other apps; the README notes that some target apps handle synthetic paste poorly. The release zip is not signed or notarized, so the first launch has to be allowed in System Settings under Privacy & Security. The project is a free GPL-3.0 utility, and its README also promotes paid apps from the same publisher, which this entry does not cover.
