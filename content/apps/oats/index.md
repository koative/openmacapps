---
name: "oats"
summary: "A menu bar meeting recorder that produces transcripts and notes in the cloud or fully on-device."
category: "Productivity"
tags:
  - meetings
  - transcription
  - local-ai
  - menu-bar
alternativeTo:
  - granola
repository: https://github.com/ariso-ai/oats
website: https://ariso.ai/oats
license: "MIT"
licenseUrl: https://github.com/ariso-ai/oats/blob/main/LICENSE
download: https://ariso.ai/oats
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/ariso-ai/oats
  - https://github.com/ariso-ai/oats/blob/main/LICENSE
  - https://ariso.ai/oats
  - https://pub-dd2807d512d34e55b8a863f675ea8e6e.r2.dev/desktop/oats.dmg
  - https://raw.githubusercontent.com/ariso-ai/oats/main/README.md
  - https://github.com/ariso-ai/oats/releases/tag/v0.27.0
  - https://www.granola.ai/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ariso-ai/oats/main/src-tauri/icons/icon.png
    credit: "Ariso Intelligence"
    license: "MIT; upstream project asset, trademarks retained"
---

oats records a meeting from the menu bar and hands you a transcript with speaker labels and a Markdown summary when you stop. You start, pause and stop recording from the menu bar icon, and nothing joins the call as a bot.

On first launch you pick where the work happens, under Settings, Transcription Backend:

- Ariso, the default, streams audio to Ariso's servers for real-time transcription. It needs you to sign in, stores past meetings for later viewing and sharing, and handles several languages.
- Local records, transcribes and writes the notes on the Mac, with no login. Transcription runs through Core ML on the Neural Engine, and an on-device language model writes the summary.
- Local needs a one-time download of a speech model and a language model from Settings, On-device models. After that it works offline, without multi-language support.

Both modes are free. In Local mode each meeting lands in `~/.ariso/recordings/` as `recording.mp3`, `transcript.md` and `ari-note.md`, and a library in the app keeps every recording, transcript and note. The developer says Ariso does not train models on cloud transcripts.

oats needs macOS 14.4 or later on Apple silicon; the app inside the DMG is built for arm64 only. The DMG is signed with a Developer ID and notarized, and the app updates itself. It also installs from a Homebrew cask kept in the repository. A Windows 11 build is in preview.

Granola also takes meeting audio from your computer with no bot and writes notes from it, with apps for iPhone and Android as well. Its free plan limits work on notes older than 30 days. oats is MIT-licensed and can run without any account.
