---
name: "Atomic Chat"
summary: "Downloads open-weight language models to chat with locally, with an OpenAI-compatible server for other tools."
category: "AI"
tags:
  - local-ai
  - chat
  - ai-client
  - cross-platform
alternativeTo:
  - lm-studio
repository: https://github.com/AtomicBot-ai/Atomic-Chat
website: https://atomic.chat/
license: "Apache-2.0"
licenseUrl: https://github.com/AtomicBot-ai/Atomic-Chat/blob/main/LICENSE
download: https://github.com/AtomicBot-ai/Atomic-Chat/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/AtomicBot-ai/Atomic-Chat
  - https://github.com/AtomicBot-ai/Atomic-Chat/blob/main/LICENSE
  - https://github.com/AtomicBot-ai/Atomic-Chat/releases/latest
  - https://atomic.chat/
  - https://raw.githubusercontent.com/AtomicBot-ai/Atomic-Chat/main/README.md
  - https://lmstudio.ai/
  - https://lmstudio.ai/docs/developer
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/AtomicBot-ai/Atomic-Chat/main/src-tauri/icons/icon.png
    credit: "Atomic Chat"
    license: "Apache-2.0 repository asset; name and icon retained by Atomic Chat"
---

Atomic Chat downloads open-weight language models from Hugging Face and runs them on your own computer. You pick a model such as Llama, Gemma, Qwen or Mistral, load it, and chat with it in a window that keeps conversations in projects.

- Several inference engines sit behind the app, among them llama.cpp, MLX-VLM and Apple's on-device Foundation Models, and each appears only where it can run.
- While a model is loaded, an OpenAI-compatible server answers at `localhost:1337`, so coding agents, command-line tools and editor plugins can use it.
- That server listens only on the loopback address until you change a setting to open it to your network.
- API keys for cloud providers such as OpenAI, Anthropic and Mistral can sit next to local models, and you choose the model per chat.
- MCP servers and custom assistants with their own system prompts extend what a chat can do.

The developer says conversations and keys stay on the machine. For local models, the README suggests 8 GB of RAM for 3B models, 16 GB for 7B and 32 GB for 13B.

Atomic Chat needs macOS 13.6 or later and runs on Intel and Apple silicon Macs. It began as a fork of Jan from Menlo Research and keeps the Apache 2.0 license, and there are versions for Windows, Linux, iOS and Android too.

LM Studio, from Element Labs, also downloads models and serves them through OpenAI-compatible endpoints, and its site offers accounts and cloud services as well.
