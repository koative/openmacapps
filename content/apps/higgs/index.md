---
name: "Higgs"
summary: "Local LLM server for Apple silicon with OpenAI and Anthropic compatible APIs, a model router and a desktop console."
category: "AI"
tags:
  - local-ai
  - language-models
  - model-providers
  - developer-utilities
alternativeTo:
  - lm-studio
repository: "https://github.com/panbanda/higgs"
website: "https://github.com/panbanda/higgs"
license: "MIT"
licenseUrl: "https://github.com/panbanda/higgs/blob/main/LICENSE"
download: "https://github.com/panbanda/higgs/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/panbanda/higgs"
  - "https://github.com/panbanda/higgs/blob/main/LICENSE"
  - "https://github.com/panbanda/higgs/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/panbanda/higgs/blob/main/apps/desktop/src-tauri/icons/icon.icns"
    credit: "Higgs contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Higgs runs open-weight models from Hugging Face on your Mac using Apple's MLX framework and serves them through one local endpoint. It can also proxy to remote providers such as OpenAI, Anthropic and Ollama, and it translates between the OpenAI and Anthropic request formats, so tools such as Claude Code and Aider can point at it. The desktop app shows the server's request rate, cache hits and token speed, and includes a chat view. It suits people who want a local model server behind their own coding tools.

It is built for Apple silicon; the README does not give a minimum macOS version. The project says the release disk image is unsigned, so the first launch has to be allowed by right-clicking the app and choosing Open.
