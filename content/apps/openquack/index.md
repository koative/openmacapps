---
name: "OpenQuack"
summary: "Types your speech at the cursor after a hotkey press, transcribing it on the Mac with Whisper."
category: "Productivity"
tags:
  - dictation
  - local-ai
  - menu-bar
  - privacy
  - input
  - voice-typing
repository: "https://github.com/larryxiao/openquack"
website: "https://larryxiao.github.io/openquack/"
license: "MIT"
licenseUrl: "https://github.com/larryxiao/openquack/blob/main/LICENSE"
download: "https://github.com/larryxiao/openquack/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/larryxiao/openquack"
  - "https://github.com/larryxiao/openquack/blob/main/LICENSE"
  - "https://github.com/larryxiao/openquack/releases"
  - "https://github.com/larryxiao/openquack/blob/main/README.md"
  - "https://larryxiao.github.io/openquack/"
  - "https://github.com/larryxiao/openquack/releases/tag/v2.0.0-alpha.22"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/larryxiao/openquack/main/docs/images/icon-512.png"
    credit: "OpenQuack contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

OpenQuack types what you say into whatever text field has the cursor. Press the hotkey, Control-Shift-Space by default, speak, and press it again. The transcript is pasted in place, or left on the clipboard if you prefer to paste it yourself.

Recognition runs on the Mac through WhisperKit, an Apple silicon port of OpenAI's Whisper. The model stays on disk until you press the hotkey.

- Whisper handles 99 languages, with auto-detect on by default.
- Formatting adds capitals and end punctuation and removes "um" and "uh".
- A custom dictionary teaches it names and project terms.
- Recording can stop by itself after a stretch of silence.
- An experimental polish pass, off by default, runs a small on-device model over the text, with a prompt you can edit in Settings.

The developer says nothing leaves the Mac by default and that the app has no telemetry or sign-up. Transcription can be sent to an OpenAI-compatible endpoint you configure yourself, and the recording overlay shows when that is in use.

OpenQuack needs macOS 13 or later on an Apple silicon Mac and asks for microphone access on first launch. Releases in the 2.0 line are labelled alpha. The 2.0.0-alpha.22 DMG is not notarized, and the README tells you to open the app the first time with right-click and Open.
