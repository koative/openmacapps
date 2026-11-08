---
name: "Jan"
summary: "A desktop workspace for chatting with local models and supported remote AI services."
category: "AI"
tags: ["local-ai", "chat", "language-models"]
alternativeTo: ["lm-studio"]
repository: "https://github.com/janhq/jan"
website: "https://jan.ai"
license: "Apache-2.0"
licenseUrl: "https://github.com/janhq/jan/blob/main/LICENSE"
download: "https://jan.ai/download"
freeDownload: true
homebrew: "jan"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/janhq/jan", "https://github.com/janhq/jan/blob/main/LICENSE", "https://jan.ai/download", "https://raw.githubusercontent.com/janhq/jan/main/README.md", "https://jan.ai", "https://jan.ai/docs/desktop/mac", "https://github.com/janhq/jan/releases/tag/v0.8.8"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/janhq/jan/blob/main/src-tauri/icons/icon.png", "credit": "Jan contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Jan downloads open-weight language models and runs them on your Mac, or sends your chats to a cloud provider you connect instead. You pick a model, start a thread and talk to it in a chat window, with the model running on your own hardware.

- Models such as Llama, Gemma, Qwen and GPT-oss come from Hugging Face and run through a bundled llama.cpp engine.
- Cloud providers include OpenAI, Anthropic, Mistral, Groq and MiniMax, set up beside the local models.
- Assistants hold their own instructions for a given kind of task.
- A local server on `localhost:1337` speaks the OpenAI API, so other apps can use a model Jan has loaded.
- Model Context Protocol support lets a model call outside tools.

Local inference needs Apple silicon. On Intel Macs the bundled engine does not load models, and only remote providers are left. Memory decides model size: the docs put 8 GB at about 3B-parameter models, 16 GB at 7B and 32 GB at 13B, with at least 10 GB of free disk. Jan needs macOS 13.6 or later. The download is a Universal DMG whose main binary runs on both chips, and the app inside is Developer ID-signed and notarized.

Models, threads, settings and logs sit in `~/Library/Application Support/Jan/data`. The developer says nothing in that folder is sent to the cloud.

LM Studio also downloads models and runs a local server, but it is closed source. Jan's code is under the Apache 2.0 license.
