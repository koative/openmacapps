---
name: "Blurt"
summary: "Push-to-talk dictation from AssemblyAI that pastes cleaned-up text into whichever Mac app has focus."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - keyboard
  - voice-typing
repository: https://github.com/AssemblyAI/blurt
website: https://www.assemblyai.com/blurt
license: "MIT"
licenseUrl: https://github.com/AssemblyAI/blurt/blob/main/LICENSE
download: https://github.com/AssemblyAI/blurt/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/AssemblyAI/blurt
  - https://github.com/AssemblyAI/blurt/blob/main/LICENSE
  - https://github.com/AssemblyAI/blurt/releases
  - https://www.assemblyai.com/blurt
  - https://raw.githubusercontent.com/AssemblyAI/blurt/main/README.md
  - https://github.com/AssemblyAI/blurt/releases/tag/v0.1.70
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/AssemblyAI/blurt/main/.github/images/icon.png
    credit: "AssemblyAI and Blurt contributors"
    license: "MIT repository asset; Blurt and AssemblyAI names and marks retained"
---

Blurt types what you say into whatever Mac app has focus. Tap Right Command, speak, tap again, and the cleaned-up text is pasted at your cursor. Holding the key instead works as push-to-talk, and Right Option or fn can be the trigger.

Each recording goes over HTTPS to AssemblyAI's dictation API, and the same request removes filler words and fixes punctuation. Because transcription runs on AssemblyAI's servers, you need your own AssemblyAI API key, which Blurt keeps in the Keychain. AssemblyAI has a free tier. The developer says audio is recorded only while you dictate and that the app has no telemetry.

Blurt needs macOS 15 or later and comes as a DMG with a Universal app for Apple silicon and Intel. Version 0.1.70 is Developer ID-signed and notarized. It checks for updates daily through Sparkle and installs them when you agree.

- Up to four custom styles, written as short instructions, shape the cleanup, or you can switch it off and paste the verbatim transcript.
- Key terms steer the spelling of names and jargon.
- Text shortcuts replace a spoken phrase with saved text on the Mac before the paste.
- The README lists 18 languages, detected automatically, with switching allowed mid-sentence.
- Your clipboard is saved before each paste and restored after it.

A floating pill shows the microphone level while you speak, and start and stop can play synthesizer cues or stay silent.
