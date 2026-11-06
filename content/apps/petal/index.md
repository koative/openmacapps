---
name: "Petal"
summary: "Local-first audio transcription and dictation, with optional cleanup by an on-device model or your own cloud key."
category: "Productivity"
tags:
  - transcription
  - dictation
  - speech-to-text
  - local-first
alternativeTo:
  - wispr-flow
repository: "https://github.com/Aayush9029/petal"
website: "https://github.com/Aayush9029/petal"
license: "MIT"
licenseUrl: "https://github.com/Aayush9029/petal/blob/main/LICENSE"
download: "https://github.com/Aayush9029/petal/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Aayush9029/petal"
  - "https://github.com/Aayush9029/petal/blob/main/LICENSE"
  - "https://github.com/Aayush9029/petal/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Aayush9029/petal/main/PetalKit/Sources/Assets/Resources/Assets.xcassets/appIcon.imageset/appIcon%402x.png"
    credit: "Aayush"
    license: "MIT; upstream app icon, trademarks retained"
---

Petal turns speech into text on your Mac, with a local-first design: transcription is meant to stay on the device. An optional cleanup step rewrites a rambling dictation into the short message you meant, using Petal's own on-device model or a cloud model. For cloud cleanup you can supply your own OpenAI, Anthropic or OpenRouter key, or point it at a local server such as Ollama or LM Studio. It suits people who dictate messages and notes and want to choose where their words go.

The README does not state a minimum macOS version. Cloud models receive the transcript, and a screenshot only when the Screen option is on; that option needs Screen Recording access and is not available for custom servers. API keys are kept in the macOS Keychain. Petal also has an iOS version, which is listed separately on the App Store.
