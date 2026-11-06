---
name: "Llamaport"
summary: "macOS app for running local GGUF models through llama-server, with resumable Hugging Face downloads."
category: "AI"
tags:
  - language-models
  - local-ai
  - downloads
repository: "https://github.com/smkamranqadri/llamaport"
website: "https://github.com/smkamranqadri/llamaport"
license: "MIT"
licenseUrl: "https://github.com/smkamranqadri/llamaport/blob/main/LICENSE"
download: "https://github.com/smkamranqadri/llamaport/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/smkamranqadri/llamaport"
  - "https://github.com/smkamranqadri/llamaport/blob/main/LICENSE"
  - "https://github.com/smkamranqadri/llamaport/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/smkamranqadri/llamaport/main/src-tauri/icons/icon.icns"
    credit: "Muhammad Kamran (Llamaport)"
    license: "MIT; upstream app icon, trademarks retained"
---

Llamaport is a small macOS app for running one local GGUF model at a time through llama.cpp's llama-server. It reads each model's header to show quantisation and context length, shows the full launch command before it starts, and runs a test that checks the process, port, health endpoint and a real chat completion. It can also search Hugging Face for GGUF repositories and download files over four ranged connections. Downloads resume after a kill and are checked against their SHA-256. It suits people who already run llama.cpp and want less command-line work.

It runs on Apple silicon or Intel and needs a separate llama-server, installed with `brew install llama.cpp`; the app does not bundle llama.cpp. The Intel half of the universal DMG has never been run on an Intel Mac, and the README limits Intel to macOS 26. The build is unsigned and not notarized, so the first launch is blocked until you choose Open Anyway in System Settings or clear the quarantine flag. The server binds to 127.0.0.1 with no authentication, so anything on the Mac can reach it while a model runs.
