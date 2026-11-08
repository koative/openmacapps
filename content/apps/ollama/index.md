---
name: "Ollama"
summary: "Run supported language models on your Mac with a desktop app and local API."
category: "AI"
tags: ["local-ai", "language-models", "chat"]
alternativeTo: ["lm-studio"]
repository: "https://github.com/ollama/ollama"
website: "https://ollama.com"
license: "MIT"
licenseUrl: "https://github.com/ollama/ollama/blob/main/LICENSE"
download: "https://ollama.com/download/mac"
freeDownload: true
homebrew: "ollama-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ollama/ollama", "https://github.com/ollama/ollama/blob/main/LICENSE", "https://ollama.com/download/mac", "https://github.com/ollama/ollama/blob/main/docs/macos.mdx", "https://docs.ollama.com/quickstart", "https://docs.ollama.com/faq", "https://ollama.com/blog/new-app"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/ollama/ollama/blob/main/app/darwin/Ollama.app/Contents/Resources/icon.icns", "credit": "Ollama contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Ollama downloads open-weight language models and runs them on your Mac. Pick a model in the app window and chat with it, or type `ollama run` followed by a model name in Terminal. Both talk to a local server that other software can call.

- **Chat window.** You can drop text files and PDFs into a conversation, and send images to models that accept them.
- **Local API.** The server listens on port 11434 of your own machine only, unless you change the `OLLAMA_HOST` setting. It answers its own API as well as OpenAI- and Anthropic-style requests.
- **Connections to other tools.** The app can hook Ollama models into desktop chat clients and coding agents from its Apps screen.
- **Context length.** A settings control raises the context window for long documents, at the cost of more memory.

LM Studio does the same core job of downloading and running models with a local server, but it is closed source. Ollama's code is MIT-licensed. Each model you download keeps its own license.

The macOS documentation lists macOS 14 Sonoma or later. Apple silicon Macs use both CPU and GPU, while Intel Macs run models on the CPU only. Downloaded models are stored in `~/.ollama` and can take tens to hundreds of gigabytes. The largest ones run slowly without a strong GPU.

Local use needs no account. Ollama also offers cloud-hosted models, which require signing in and usage credits or a paid plan. The developer states that it does not see prompts from local models, and that cloud prompts are processed but not stored or used for training.
