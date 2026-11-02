---
name: "macai"
summary: "A native macOS chat client for ChatGPT, Claude, Gemini, Grok, Ollama and other OpenAI-compatible AI services."
category: "AI"
tags:
  - ai-client
  - chat
  - native
  - local-ai
repository: https://github.com/Renset/macai
website: https://macai.chat
license: "Apache-2.0"
licenseUrl: https://github.com/Renset/macai/blob/main/LICENSE.md
download: https://github.com/Renset/macai/releases
homebrew: "macai"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/Renset/macai
  - https://github.com/Renset/macai/blob/main/LICENSE.md
  - https://github.com/Renset/macai/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Renset/macai/main/macai/Assets.xcassets/AppIcon.appiconset/macai_256.png
    credit: "macai contributors (Renset)"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

macai is a SwiftUI chat app that talks to AI models through their APIs. You add one or more services, such as OpenAI, Anthropic, Google Gemini, xAI, Perplexity, OpenRouter or a local Ollama server, and switch between them per chat. It supports image input, image generation, web search and reasoning models where the provider offers them, plus reusable assistant personas and chat import and export.

Cloud services need your own API key. Chats and settings can sync across devices through iCloud. The developer says the app has no telemetry of its own. It needs macOS 14 or later and ships as a notarized universal build for Apple silicon and Intel Macs.
