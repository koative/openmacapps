---
name: "WhisperDrop"
summary: "Offline transcription for recordings, videos and meetings, plus hold-to-dictate into any app, on Apple silicon Macs."
category: "Productivity"
tags:
  - transcription
  - speech-to-text
  - dictation
  - local-ai
repository: "https://github.com/Zer0codestuff/whisperdrop-2"
website: "https://github.com/Zer0codestuff/whisperdrop-2"
license: "MIT"
licenseUrl: "https://github.com/Zer0codestuff/whisperdrop-2/blob/main/LICENSE"
download: "https://github.com/Zer0codestuff/whisperdrop-2/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Zer0codestuff/whisperdrop-2"
  - "https://github.com/Zer0codestuff/whisperdrop-2/blob/main/LICENSE"
  - "https://github.com/Zer0codestuff/whisperdrop-2/releases/tag/v2.6.1"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Zer0codestuff/whisperdrop-2/main/Resources/AppIcon.icns"
    credit: "Gabriele Monni"
    license: "MIT; upstream app icon (converted from .icns, resized), trademarks retained"
---

WhisperDrop turns audio and video files, YouTube links and live recordings into text on your Mac. It writes timestamped transcripts that you can export as TXT, SRT or VTT. Notes can be recorded from the microphone, system audio or both, and holding fn dictates into whatever app has the cursor. It is for people who transcribe lectures, calls or interviews and want the speech handled on the device. Models are downloaded once from Hugging Face; after that, transcription and dictation run without a connection.

It needs an Apple silicon Mac running macOS 14 or later. The current release is not notarized by Apple, so the first launch must be allowed under System Settings → Privacy & Security → Open Anyway. The README says version 2.6.1 is a manual download and replacement, because the existing update feed does not offer it. The app's source is MIT, but the bundled runtime components and model weights keep their own licenses.
