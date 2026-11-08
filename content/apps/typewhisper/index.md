---
name: "TypeWhisper"
summary: "Turns speech into text in any app with on-device or cloud speech recognition, then reshapes it with workflows."
category: "AI"
tags:
  - dictation
  - transcription
  - local-ai
  - voice-typing
alternativeTo:
  - wispr-flow
repository: https://github.com/TypeWhisper/typewhisper-mac
website: https://www.typewhisper.com
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/TypeWhisper/typewhisper-mac/blob/main/LICENSE
download: https://github.com/TypeWhisper/typewhisper-mac/releases/latest
freeDownload: true
homebrew: "typewhisper"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/TypeWhisper/typewhisper-mac
  - https://github.com/TypeWhisper/typewhisper-mac/blob/main/LICENSE
  - https://github.com/TypeWhisper/typewhisper-mac/releases/latest
  - https://formulae.brew.sh/cask/typewhisper
  - https://github.com/TypeWhisper/typewhisper-mac/blob/main/README.md
  - https://github.com/TypeWhisper/typewhisper-mac/releases/tag/v1.8.2
  - https://wisprflow.ai/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/TypeWhisper/typewhisper-mac/main/TypeWhisper/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "TypeWhisper"
    license: "Trademark of the TypeWhisper project owner; not covered by the GPL-3.0-or-later code license"
---

TypeWhisper turns speech into text in whatever app you are typing in. Press a global hotkey, speak, and the transcript is pasted at the cursor. The speech engine can run on the Mac, for example WhisperKit, Parakeet or Apple SpeechAnalyzer, or be a cloud API you set up yourself, such as Groq, OpenAI or xAI.

- Workflows rewrite, translate or reformat the text, triggered by the current app, a website, a hotkey or a palette.
- Undo Last Dictation removes the inserted text, and Restore Raw Transcript swaps in the unprocessed version.
- File transcription handles batches of audio and video, also from Finder, and exports SRT or WebVTT subtitles.
- A dictionary of terms and corrections fixes words the engine keeps getting wrong.
- A local HTTP API and a command-line tool let scripts start dictation or transcribe files.

The Local LLM (MLX) plugin processes prompts on Apple silicon without a cloud provider. Some features belong to a Premium tier, among them meeting automation and iCloud sync of the history.

TypeWhisper needs macOS 14 or later plus the Microphone and Accessibility permissions. The project recommends an Apple silicon Mac and lists 8 GB of RAM as the minimum, 16 GB for larger models. Version 1.8.2 from GitHub is a Universal app, Developer ID-signed and notarized. Release candidates and daily builds appear as GitHub prereleases and stay out of Homebrew. The app is also on the Mac App Store, and the developer offers commercial licenses for use outside the GPL.

Wispr Flow also dictates into any app and runs on Mac, Windows, iPhone and Android, with a free tier capped at 2,000 words a week. With a local engine the recording stays on the Mac, and TypeWhisper's source is open.
