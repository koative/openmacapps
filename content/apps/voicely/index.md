---
name: "Voicely"
summary: "Offline dictation for macOS with a local MCP server so agents like Claude Code can transcribe files and calls."
category: "Productivity"
tags:
  - dictation
  - speech-to-text
  - offline
  - mcp
alternativeTo:
  - wispr-flow
repository: "https://github.com/StulkovLD/Voicely"
website: "https://voicely.art"
license: "MIT"
licenseUrl: "https://github.com/StulkovLD/Voicely/blob/main/LICENSE"
download: "https://github.com/StulkovLD/Voicely/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/StulkovLD/Voicely"
  - "https://github.com/StulkovLD/Voicely/blob/main/LICENSE"
  - "https://github.com/StulkovLD/Voicely/releases"
  - "https://voicely.art"
assets:
  - path: ./assets/icon.png
    source: https://github.com/StulkovLD/Voicely/releases/download/v1.4.4/Voicely-1.4.4-76daae3718df-4bc1c044508b99deecef0942f8b1dc181fdae5bf146a6eb140cc20c6fabcca86.dmg
    credit: Voicely contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Voicely turns speech into text on the Mac. Press Option+Space, speak, and press again to type the transcript at the cursor, in native apps, browsers, Electron apps and terminals. It can also record a call by mixing system audio and the microphone into one track, with speakers separated, and transcribe any audio or video file. Speech runs on NVIDIA's Parakeet V3 model on the Mac, covering 25 languages, with no account or subscription. A `voicely` command and a local MCP server let agents such as Claude Code, Codex and Cursor transcribe files and read saved transcripts. It suits people who dictate or transcribe often and want the audio kept on their machine.

It requires macOS 14 or later on Apple silicon. The public build is signed with Voicely's own certificate and is not notarized by Apple, so the first launch needs approval in System Settings. It asks for Microphone and Accessibility permission, and it requests Screen Recording only when you first record a call. The speech model, about 470 MB, downloads on first use.
