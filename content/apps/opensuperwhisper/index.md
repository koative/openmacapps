---
name: "OpenSuperWhisper"
summary: "Hotkey dictation for Apple silicon Macs that transcribes speech on-device with Whisper or Parakeet models."
category: "AI"
tags:
  - voice-typing
  - dictation
  - speech-to-text
  - transcription
  - local-ai
  - menu-bar
repository: https://github.com/Starmel/OpenSuperWhisper
website: https://github.com/Starmel/OpenSuperWhisper
license: "MIT"
licenseUrl: https://github.com/Starmel/OpenSuperWhisper/blob/develop/LICENSE
download: https://github.com/Starmel/OpenSuperWhisper/releases
homebrew: "opensuperwhisper"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/Starmel/OpenSuperWhisper
  - https://github.com/Starmel/OpenSuperWhisper/blob/develop/LICENSE
  - https://github.com/Starmel/OpenSuperWhisper/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/Starmel/OpenSuperWhisper/blob/develop/OpenSuperWhisper/AppIcon.icns
    credit: "OpenSuperWhisper contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

OpenSuperWhisper records your voice when you press a global shortcut, then turns the speech into text on your Mac. Recording can be bound to a key combination, a single modifier key such as Right Option or Fn, or a spare mouse button, and a hold-to-record mode stops as soon as you let go.

Transcription runs locally with whisper.cpp or Parakeet models that you download from inside the app, with automatic language detection and optional autocorrection for Chinese, Japanese and Korean text. You can also drop audio files on it to transcribe them in a queue, and pick the input microphone from the menu bar.

It needs macOS 14 or later on an Apple silicon Mac; there is no Intel build.
