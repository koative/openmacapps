---
name: "Shortcast"
summary: "Cuts the best moments of a long video into captioned vertical clips, with transcription and captions done on your Mac."
category: "Media"
tags:
  - video
  - speech-to-text
  - local-ai
  - video-editing
repository: "https://github.com/mutonby/shortcast"
website: "https://github.com/mutonby/shortcast"
license: "Apache-2.0"
licenseUrl: "https://github.com/mutonby/shortcast/blob/main/LICENSE"
download: "https://github.com/mutonby/shortcast/releases/download/v1.0.0/Shortcast.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/mutonby/shortcast"
  - "https://github.com/mutonby/shortcast/blob/main/LICENSE"
  - "https://github.com/mutonby/shortcast/blob/main/NOTICE"
  - "https://github.com/mutonby/shortcast/releases"
---

Shortcast takes a long recording, such as a podcast, talk or stream, and picks three to six moments likely to work as short posts. It transcribes the audio with WhisperKit, cuts each clip, reframes horizontal footage to 9:16 by tracking the speaker's face, and writes captions for TikTok, Instagram and YouTube Shorts. Transcription and captioning run on the Mac with a local model; the video leaves the Mac only when you publish or schedule it through Upload-Post. It suits creators who post short-form video regularly.

Shortcast requires macOS 15 or later on Apple silicon; the README says Intel is not supported. The release is not notarized, so macOS blocks the first launch and you must allow it with the `xattr` command in the README. The first run downloads roughly 5 to 7 GB of language models and the WhisperKit model. Publishing needs an Upload-Post API key, and that service's free tier limits monthly uploads.
