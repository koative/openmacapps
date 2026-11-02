---
name: "FluidVoice"
summary: "A dictation app that turns speech into text in any app, using on-device speech models and optional AI cleanup."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - menu-bar
  - voice-typing
alternativeTo:
  - wispr-flow
repository: https://github.com/altic-dev/FluidVoice
website: https://altic.dev/fluid
license: "GPL-3.0"
licenseUrl: https://github.com/altic-dev/FluidVoice/blob/main/LICENSE
download: https://github.com/altic-dev/FluidVoice/releases/latest
homebrew: "fluidvoice"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/altic-dev/FluidVoice
  - https://github.com/altic-dev/FluidVoice/blob/main/LICENSE
  - https://github.com/altic-dev/FluidVoice/releases
  - https://altic.dev/fluid
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/altic-dev/FluidVoice/main/Sources/Fluid/Assets.xcassets/AppIcon.appiconset/icon-512@1x.png
    credit: "ALTIC (altic-dev)"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

FluidVoice records your voice from a global hotkey and types the transcript into whatever text field has focus. You pick the speech engine: NVIDIA Parakeet and Nemotron models, Cohere Transcribe, Whisper, or Apple's built-in speech recognition. A live overlay, which can sit around the MacBook notch, shows words as they arrive. A command mode can open apps and trigger actions by voice, and a write mode drafts or rewrites text in place.

Transcription runs on the Mac. Cleanup of the transcript is optional and can go through your own OpenAI, Groq or compatible API key, or through Fluid Intelligence, a local model that is downloaded separately and is not open source. It needs macOS 15 or later and microphone and Accessibility permissions. Most models need Apple silicon; Intel Macs can use Whisper and Apple Speech.

The app sends an anonymous daily activity signal, uploaded weekly, that cannot be switched off. More detailed anonymous usage analytics are on by default and can be disabled in settings. The project says fluidvoice.org is not its site; official builds come from GitHub releases.
