---
name: "TypeNo"
summary: "Press Control to record, press it again to transcribe your speech on the Mac and paste the text into the app you were using."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - voice-typing
  - local-ai
  - menu-bar
alternativeTo:
  - wispr-flow
repository: "https://github.com/marswaveai/TypeNo"
website: "https://typeno.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/marswaveai/TypeNo/blob/main/LICENSE"
download: "https://github.com/marswaveai/TypeNo/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/marswaveai/TypeNo"
  - "https://github.com/marswaveai/TypeNo/blob/main/LICENSE"
  - "https://github.com/marswaveai/TypeNo/releases"
  - "https://typeno.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/marswaveai/TypeNo/main/App/TypeNo.iconset/icon_512x512.png"
    credit: "MarsWave AI"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

TypeNo is a menu bar voice input tool with no main window and no settings screen. A short press of the Control key starts recording and a second press stops it; the speech is transcribed on the Mac and pasted into the app you were using, and also copied to the clipboard. An overlay shows preview text while it works, and audio files dropped on the menu bar icon are transcribed as well.

It is for people who want quick local dictation without an account or setup beyond the first install. The speech recognition comes from coli, a separate command-line tool by the same developers.

TypeNo requires macOS 14 or later, is universal for Apple silicon and Intel, and is signed and notarized. It needs Node.js, ffmpeg and the coli npm package installed separately, and coli downloads its speech model from GitHub on the first transcription. The app asks for Microphone and Accessibility permissions. The project is in maintenance mode: bug reports are handled and new macOS versions are checked, but feature work has stopped.
