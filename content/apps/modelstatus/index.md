---
name: "ModelStatus"
summary: "Menu bar monitor for local AI model servers such as Ollama, LM Studio and vLLM, showing loaded models and memory use."
category: "Developer tools"
tags:
  - local-ai
  - menu-bar
  - system-monitoring
  - monitoring
repository: "https://github.com/lucasmullikin/ModelStatus"
website: "https://github.com/lucasmullikin/ModelStatus"
license: "MIT"
licenseUrl: "https://github.com/lucasmullikin/ModelStatus/blob/main/LICENSE"
download: "https://github.com/lucasmullikin/ModelStatus/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/lucasmullikin/ModelStatus"
  - "https://github.com/lucasmullikin/ModelStatus/blob/main/LICENSE"
  - "https://github.com/lucasmullikin/ModelStatus/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/lucasmullikin/ModelStatus/main/ModelStatus/Resources/AppIcon.icns"
    credit: "Lucrative Pictures LLC"
    license: "MIT; upstream app icon, trademarks retained"
---

ModelStatus watches several model servers at once, local or remote, and shows from the menu bar which ones are reachable, which models are loaded and how much unified memory they use. It detects Ollama, LM Studio, vLLM and OpenAI-compatible servers such as llama.cpp and MLX, and can unload or load models on Ollama and LM Studio. Authorization headers for servers behind a tunnel are kept in the macOS Keychain. It suits people who run models on their own hardware and want a quick status check.

It needs macOS 13 or later. The GitHub release is unsigned and not notarized; the README tells you to remove the quarantine flag with `xattr` before the first launch, so Apple's check is skipped for that build. A sandboxed version is also sold on the Mac App Store for $6.99 with fewer features, such as starting and stopping Ollama; the GitHub and Homebrew builds are free. The README states that the app has no telemetry and sends requests only to the servers you configure.
