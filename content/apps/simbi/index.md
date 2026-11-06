---
name: "Simbi"
summary: "Records meetings from mic and system audio, then writes speaker-labelled transcripts and AI notes as plain files."
category: "Productivity"
tags:
  - transcription
  - meetings
  - notes
alternativeTo:
  - granola
repository: "https://github.com/predict-woo/simbi"
website: "https://getsimbi.app"
license: "MIT"
licenseUrl: "https://github.com/predict-woo/simbi/blob/main/LICENSE"
download: "https://download.getsimbi.app/darwin-arm64"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/predict-woo/simbi"
  - "https://github.com/predict-woo/simbi/blob/main/LICENSE"
  - "https://getsimbi.app"
---

Simbi records your microphone and system audio into one timeline, detects speakers on the Mac and builds a live transcript while the meeting runs. When a recording ends, it can produce editable AI notes whose timestamps play back the matching audio. Each note is an ordinary folder with Markdown, a WebVTT transcript and the recording, so the files work in Finder, Obsidian or Git. It is meant for people who want meeting notes without a bot joining the call.

It needs an Apple silicon Mac running macOS 14 or later, and system-audio capture needs macOS 14.4 or later. The ChatGPT desktop app must be installed and signed in, because transcription, cleanup, summaries and chat run through that account. The README says the DMG is notarized. Speaker detection stays on the Mac, but short audio segments and note content go to OpenAI under your ChatGPT account, and the README makes you responsible for consent when recording other people.
