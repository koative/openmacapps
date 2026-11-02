---
name: "Amical"
summary: "A local-first AI dictation app that transcribes speech with Whisper and formats the text for the app you are typing in."
category: "AI"
tags: ["dictation", "speech-to-text", "voice-typing", "local-ai", "cross-platform"]
alternativeTo: ["wispr-flow"]
repository: "https://github.com/amicalhq/amical"
website: "https://amical.ai"
license: "MIT"
licenseUrl: "https://github.com/amicalhq/amical/blob/main/LICENSE"
download: "https://github.com/amicalhq/amical/releases/latest"
homebrew: "amical"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/amicalhq/amical", "https://github.com/amicalhq/amical/blob/main/LICENSE", "https://github.com/amicalhq/amical/releases", "https://amical.ai/download"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/amicalhq/amical/blob/main/apps/desktop/assets/logo.icns", "credit": "Amical contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

Amical types what you say into whatever app has focus. You start and stop dictation with a hotkey or a small floating widget, it transcribes the audio, and it can clean up the result for the context it detects, so an email reads differently from a chat message or a prompt in a code editor. A custom vocabulary helps with names and jargon.

Transcription can run entirely on the Mac with Whisper models that the app downloads during setup, or you can choose cloud models and providers such as OpenAI or OpenRouter. Text formatting can also use a local model through Ollama. The project notes that local Whisper transcription needs macOS 15 or later.

Amical is an Electron app with disk images for Apple silicon and Intel. It shares anonymous usage data with the developers by default; you can turn this off in its settings. Some releases are published as betas alongside the stable one.
