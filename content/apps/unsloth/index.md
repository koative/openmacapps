---
name: "Unsloth"
summary: "A beta desktop app for running, chatting with and fine-tuning local language, image and audio models."
category: "AI"
tags:
  - local-ai
  - language-models
  - fine-tuning
  - image-generation
  - cross-platform
repository: https://github.com/unslothai/unsloth
website: https://unsloth.ai
license: "AGPL-3.0 AND Apache-2.0"
licenseUrl: https://github.com/unslothai/unsloth/blob/main/studio/LICENSE.AGPL-3.0
download: https://unsloth.ai/download
homebrew: "unsloth"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/unslothai/unsloth
  - https://github.com/unslothai/unsloth/blob/main/studio/LICENSE.AGPL-3.0
  - https://github.com/unslothai/unsloth/blob/main/LICENSE
  - https://github.com/unslothai/unsloth/releases
  - https://unsloth.ai/docs/desktop
  - https://unsloth.ai/docs/get-started/install/mac
assets:
  - path: ./assets/icon.png
    source: https://github.com/unslothai/unsloth/blob/main/studio/src-tauri/icons/icon.png
    credit: "Unsloth AI"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

Unsloth is best known as a Python library for fine-tuning language models quickly with less memory. Unsloth Desktop wraps that work in a Tauri app: you pick a model and quantization from its model hub, download it, and chat with it locally, with GGUF and MLX formats supported on the Mac.

The same app trains models. It can fine-tune text, embedding, text-to-speech and diffusion models with LoRA, QLoRA or full fine-tuning, export the result to formats such as GGUF, and generate images. Chats can call tools, run code in a sandbox and search the web, with permission prompts before a model touches files or the network. Models can be served to other apps through an OpenAI-compatible API, shared on the local network or exposed through a Cloudflare tunnel, and connected to coding agents such as Claude Code or Codex.

Unsloth Desktop is labelled beta. On first launch it finishes installing its runtime, which takes a while and needs a connection. The app's interface is under AGPL-3.0, while the core Unsloth library it uses is under Apache-2.0.
