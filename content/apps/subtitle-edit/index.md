---
name: "Subtitle Edit"
summary: "Creates, synchronizes and revises subtitle files with video and waveform guidance."
category: "Media"
tags: ["subtitles", "video", "accessibility"]
repository: "https://github.com/SubtitleEdit/subtitleedit"
website: "https://github.com/SubtitleEdit/subtitleedit"
license: "MIT"
licenseUrl: "https://github.com/SubtitleEdit/subtitleedit/blob/main/LICENSE"
download: "https://github.com/SubtitleEdit/subtitleedit/releases"
freeDownload: true
homebrew: "subtitle-edit"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/SubtitleEdit/subtitleedit", "https://github.com/SubtitleEdit/subtitleedit/blob/main/LICENSE", "https://github.com/SubtitleEdit/subtitleedit/blob/main/README.md", "https://github.com/SubtitleEdit/subtitleedit/releases", "https://github.com/SubtitleEdit/subtitleedit/releases/tag/v5.4.0", "https://subtitleedit.github.io/subtitleedit/overview.html", "https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html", "https://subtitleedit.github.io/subtitleedit/features/visual-sync.html", "https://subtitleedit.github.io/subtitleedit/reference/supported-formats.html"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/SubtitleEdit/subtitleedit/blob/main/src/libse/Icon.png", "credit": "Subtitle Edit contributors", "license": "MIT; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Subtitle Edit is for the slow part of captioning a video: getting each line of text to appear and disappear at the right moment. You load a video, watch it in the built-in player, and adjust start and end times against a waveform or spectrogram of the audio track.

For a subtitle file that is off by a steady amount or drifts over time, the Visual Sync window shows two video panes. You pick a line near the start and one near the end, play each to where that line should begin, and the app retimes the rest of the file to match.

The documentation lists many other tools, among them:

- reading and writing more than 380 formats, from SubRip and WebVTT to SCC, EBU STL and iTunes Timed Text
- speech to text with local engines such as Whisper CPP, or with online services you connect yourself
- OCR that turns image-based subtitles from DVD or Blu-ray into text
- spell checking, a Fix Common Errors tool and a Netflix rules check
- burning subtitles into the video and batch converting many files at once
- styling, positioning and drawing for Advanced SubStation Alpha (ASSA) files

Subtitle Edit 5 is the cross-platform generation, built with Avalonia UI. There are separate disk images for Apple silicon and Intel Macs. They bundle FFmpeg and libmpv, so playback and waveforms need nothing from Homebrew. The README says the disk image has been signed and notarized since version 5.2.0. It also says that editing and converting happen on your Mac and that file content is only sent out when you choose an online translation, speech or OCR service. It needs macOS 12 or later, and the project recommends macOS 14 because that is the oldest release .NET 10 supports.
