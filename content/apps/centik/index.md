---
name: "Centik"
summary: "Open-source notch panel for macOS with music controls, live system stats, an AI chat, clipboard history and alerts."
category: "Utilities"
tags:
  - menu-bar
  - notch
  - system-monitoring
  - language-models
repository: "https://github.com/YusufEmreYazici/Centik"
website: "https://github.com/YusufEmreYazici/Centik"
license: "MIT"
licenseUrl: "https://github.com/YusufEmreYazici/Centik/blob/main/LICENSE"
download: "https://github.com/YusufEmreYazici/Centik/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/YusufEmreYazici/Centik"
  - "https://github.com/YusufEmreYazici/Centik/blob/main/LICENSE"
  - "https://github.com/YusufEmreYazici/Centik/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/YusufEmreYazici/Centik/main/Resources/AppIcon.icns"
    credit: "Y. Emre Yazıcı (Çentik)"
    license: "MIT; upstream app icon, trademarks retained"
---

Çentik uses the MacBook notch, or the top of the screen on Macs without one, as a small panel. It shows Spotify and Apple Music playback with artwork and controls, live CPU, memory, GPU, network and disk graphs, clipboard history, a file shelf, pop-ups for new screenshots and finished downloads, meeting countdowns, and alerts from Claude Code and Codex. Its AI chat can use an installed Claude Code or Gemini CLI, a Claude or Gemini API key, or a local Ollama model. It is chat only and cannot read files or run commands. The interface is in English and Turkish.

It needs macOS 14 Sonoma or later, on Apple silicon or Intel. The app is not notarized by Apple yet, so macOS blocks the first launch: open it once, then allow it under System Settings → Privacy & Security → Open Anyway, or clear the quarantine flag with `xattr`. The project says clipboard history, notes and the shelf stay on the Mac, weather is requested from Open-Meteo, and AI prompts go only to the provider you connect.
