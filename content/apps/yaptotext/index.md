---
name: "YapToText"
summary: "Offline dictation for Mac: press a key, speak, and the text is typed where the cursor is, with optional on-device cleanup."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - voice-typing
alternativeTo:
  - wispr-flow
repository: "https://github.com/ryleighnewman/YapToText"
website: "https://yaptotext.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/ryleighnewman/YapToText/blob/main/LICENSE"
download: "https://github.com/ryleighnewman/YapToText/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ryleighnewman/YapToText"
  - "https://github.com/ryleighnewman/YapToText/blob/main/LICENSE"
  - "https://github.com/ryleighnewman/YapToText/releases/latest"
  - "https://yaptotext.com"
  - "https://yaptotext.com/privacy"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ryleighnewman/YapToText/main/YapToText/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "Ryleigh Newman"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

YapToText turns speech into text in whatever app has the cursor. Tap Right Command, talk, and tap again, and the words are typed in, cleaned up and punctuated. The speech model (Whisper) and the cleanup model (Phi-3.5 Mini) are bundled, so it works offline from the first launch. It can also rewrite selected text by voice, keeps a searchable history of dictations on your Mac, and offers modes such as Email, Note and Message. The author built it for people who cannot type comfortably, and it works with VoiceOver and Voice Control. The Mac App Store also carries the app.

It needs macOS 14 or later, microphone permission, and Accessibility permission for pasting into other apps; without Accessibility the text is only copied to the clipboard. The release app is notarized. The README lists Apple silicon Macs, and the release app is a universal build. The app makes no network calls unless you start a model download, and the README says it has no analytics. On macOS 26 it can use Apple Intelligence for cleanup instead of the bundled model.
