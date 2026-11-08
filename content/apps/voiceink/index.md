---
name: "VoiceInk"
summary: "Types what you dictate into the current app, using on-device speech models, push-to-talk shortcuts and per-app modes."
category: "AI"
tags: ["dictation", "speech-to-text", "local-ai", "keyboard-shortcuts", "voice-typing"]
alternativeTo: ["wispr-flow"]
repository: "https://github.com/Beingpax/VoiceInk"
website: "https://tryvoiceink.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/Beingpax/VoiceInk/blob/main/LICENSE"
download: "https://github.com/Beingpax/VoiceInk/releases"
freeDownload: false
homebrew: "voiceink"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Beingpax/VoiceInk", "https://github.com/Beingpax/VoiceInk/blob/main/LICENSE", "https://github.com/Beingpax/VoiceInk/releases", "https://raw.githubusercontent.com/Beingpax/VoiceInk/main/README.md", "https://tryvoiceink.com", "https://github.com/Beingpax/VoiceInk/releases/tag/v2.26", "https://wisprflow.ai/", "https://wisprflow.ai/privacy"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Beingpax/VoiceInk/main/VoiceInk/Assets.xcassets/AppIcon.appiconset/256-mac.png", "credit": "Beingpax and VoiceInk contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

VoiceInk records while you hold a shortcut, or between two presses, and types the transcription into whatever app has focus. The shortcut can be a key or a mouse button. Transcription runs on local models such as Whisper and Parakeet.

- A personal dictionary adds names, jargon and text replacements.
- Modes switch settings by the app or website in front, so a chat window and an email draft can get different formatting.
- Optional AI enhancement rewrites the transcribed text, and only the text is sent, never the audio.
- An assistant mode answers spoken questions in a chat.

The developer says voice transcription stays on the Mac. The prebuilt app from GitHub or the website runs as a 7-day trial, then asks for a paid license key to keep working. The source is GPL-3.0 and you can build VoiceInk yourself, while the paid build adds automatic updates and support. The project does not accept pull requests.

Wispr Flow also types speech into any app and runs on Windows, iPhone and Android as well. It sends audio to its servers for transcription, and its free plan has usage limits. VoiceInk transcribes on the Mac instead.

The release DMG is signed with a Developer ID and notarized, and the app inside requires macOS 15 or later.
