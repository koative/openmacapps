---
name: "Llama"
summary: "A small menu bar app from the ggml project that downloads GGUF models and serves them through a local OpenAI-style API."
category: "AI"
tags:
  - local-ai
  - language-models
  - menu-bar
  - native
alternativeTo:
  - lm-studio
repository: https://github.com/ggml-org/Llama-macOS
website: https://llama.app
license: "MIT"
licenseUrl: https://github.com/ggml-org/Llama-macOS/blob/main/LICENSE
download: https://github.com/ggml-org/Llama-macOS/releases
homebrew: "llama-app"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/ggml-org/Llama-macOS
  - https://github.com/ggml-org/Llama-macOS/blob/main/LICENSE
  - https://github.com/ggml-org/Llama-macOS/blob/main/Llama.xcodeproj/project.pbxproj
  - https://github.com/ggml-org/Llama-macOS/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/ggml-org/Llama-macOS/blob/main/Llama/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Llama contributors (ggml-org)"
    license: "MIT; upstream project asset, trademarks retained"
---

Llama is a menu bar front end for llama.cpp, published by the ggml organisation. It starts a local server with an OpenAI-compatible API, recommends models that fit your Mac's memory, installs GGUF models from Hugging Face and loads them only when a request arrives, unloading them again when idle. A built-in web chat is included, and other apps, editors or coding agents can connect to the local endpoint.

If llama.cpp is already installed it is used, otherwise the app downloads a prebuilt binary; models are kept in the standard Hugging Face cache so other tools can share them. Per-model settings can be overridden in a user configuration file.

The server listens only on your Mac by default. Settings can expose it over Tailscale or to the whole local network; it has no password, so the project advises using the network option only on networks you trust. The app's build targets Apple silicon Macs running macOS 15 or later.
