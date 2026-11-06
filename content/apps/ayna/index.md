---
name: "Ayna"
summary: "SwiftUI chat app for macOS, iOS and watchOS that uses your own keys for several AI providers, with MCP tools and memory."
category: "AI"
tags:
  - chat
  - language-models
  - native
  - cross-platform
repository: "https://github.com/sozercan/ayna"
website: "https://github.com/sozercan/ayna"
license: "MIT"
licenseUrl: "https://github.com/sozercan/ayna/blob/main/LICENSE"
download: "https://github.com/sozercan/ayna/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/sozercan/ayna"
  - "https://github.com/sozercan/ayna/blob/main/LICENSE"
  - "https://github.com/sozercan/ayna/releases/latest"
  - "https://github.com/sozercan/ayna/releases/tag/v0.4.0"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/sozercan/ayna/main/Sources/Ayna/App/Assets.xcassets/ayna.appiconset/ayna.png"
    credit: "ayna contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Ayna is a chat client for OpenAI, Anthropic and Azure OpenAI models, and for any OpenAI-compatible endpoint, including local servers such as Ollama. You can send one prompt to several models at once and compare the answers. It also has web and MCP tools with per-tool permissions, image generation, a memory feature, and export of conversations to Markdown or PDF. API keys are stored in the Keychain and conversations are encrypted on disk. The README says the app has no telemetry.

It needs macOS 26 or newer; the macOS download is built for both Apple silicon and Intel. You bring your own provider keys, so hosted models cost whatever your provider charges, while local models need no key. The release is not notarized, so the first launch has to be allowed in System Settings.
