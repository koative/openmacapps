---
name: "Tweaks"
summary: "Hotkey menu that rewrites or polishes clipboard text through an AI endpoint, local by default."
category: "AI"
tags:
  - local-ai
  - clipboard
  - writing
repository: "https://github.com/dinoki-ai/tweaks"
website: "https://tweaks.io/"
license: "MIT"
licenseUrl: "https://github.com/dinoki-ai/tweaks/blob/main/LICENSE"
download: "https://github.com/dinoki-ai/tweaks/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/dinoki-ai/tweaks"
  - "https://github.com/dinoki-ai/tweaks/blob/main/LICENSE"
  - "https://github.com/dinoki-ai/tweaks/releases"
  - "https://tweaks.io/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/dinoki-ai/tweaks/releases/download/0.0.11/Tweaks-0.0.11.dmg"
    credit: "Dinoki Labs"
    license: "MIT; upstream app icon, trademarks retained"
---

Tweaks rewrites, rephrases or refines text you have copied. Press Control-T, then a number key to pick one of up to four quick actions. The result is streamed into the app you are working in, replacing your selection, and your original clipboard is restored afterwards. The text goes to an OpenAI-compatible endpoint you configure, which the README sets to Osaurus, a local model server on your Mac, by default. It suits writing in email, chat or documents without leaving the app.

It needs an Apple silicon Mac (the release binary is arm64 only) running macOS 14.0 or later. Osaurus is a separate install, and the README tells you to install it with Homebrew and load a model before use. Tweaks needs Accessibility permission for its hotkey. The app is notarized by Apple. The latest release, 0.0.11, dates from October 2025.
