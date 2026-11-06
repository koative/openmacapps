---
name: "TinyRecorder"
summary: "Records mouse and keyboard actions for playback, with per-macro hotkeys, an editor and TinyTask import."
category: "Utilities"
tags:
  - automation
  - mouse
  - keyboard
repository: "https://github.com/Aaru1801/TinyTask-macOS"
website: "https://github.com/Aaru1801/TinyTask-macOS"
license: "MIT"
licenseUrl: "https://github.com/Aaru1801/TinyTask-macOS/blob/main/LICENSE"
download: "https://github.com/Aaru1801/TinyTask-macOS/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Aaru1801/TinyTask-macOS"
  - "https://github.com/Aaru1801/TinyTask-macOS/blob/main/LICENSE"
  - "https://github.com/Aaru1801/TinyTask-macOS/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Aaru1801/TinyTask-macOS/releases/download/v1.9.0/TinyRecorder-1.9.0.zip"
    credit: "Aarav Bhargava"
    license: "MIT; upstream app icon, trademarks retained"
---

TinyRecorder records a sequence of mouse clicks, drags, scrolls and keystrokes, then plays it back on demand. Its editor can trim a recording, stretch its timing and insert waits. A macro can have its own hotkey and loop count, can chain into another macro, and can be exported as a shell script or as JSON. It can also open macros from the original Windows TinyTask format. It suits repetitive clicking and form filling on a Mac.

It needs macOS 14 or later and runs on Apple silicon only, since the release binary is arm64. It needs Accessibility and Input Monitoring permissions. The app is not notarized: the release is signed with an Apple Development certificate, so the first launch has to be allowed in System Settings. The README warns that playback replays the exact screen coordinates recorded, so moved windows can misfire, and that some secure input fields reject synthetic input.
