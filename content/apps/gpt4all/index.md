---
name: "GPT4All"
summary: "Downloads language models to your Mac for local chat, with answers that can draw on your own document folders."
category: "AI"
tags: ["local-ai", "chat", "documents"]
alternativeTo: ["lm-studio"]
repository: "https://github.com/nomic-ai/gpt4all"
website: "https://www.nomic.ai/gpt4all"
license: "MIT"
licenseUrl: "https://github.com/nomic-ai/gpt4all/blob/main/LICENSE.txt"
download: "https://www.nomic.ai/gpt4all"
freeDownload: true
homebrew: "gpt4all"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/nomic-ai/gpt4all", "https://github.com/nomic-ai/gpt4all/blob/main/LICENSE.txt", "https://www.nomic.ai/gpt4all", "https://github.com/nomic-ai/gpt4all/blob/main/README.md", "https://github.com/nomic-ai/gpt4all/blob/main/gpt4all-chat/system_requirements.md", "https://docs.gpt4all.io/gpt4all_desktop/quickstart.html", "https://docs.gpt4all.io/gpt4all_desktop/models.html", "https://docs.gpt4all.io/gpt4all_desktop/localdocs.html", "https://github.com/nomic-ai/gpt4all/releases/tag/v3.10.0", "https://lmstudio.ai/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/nomic-ai/gpt4all/blob/main/gpt4all-chat/resources/gpt4all.icns", "credit": "GPT4All contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

GPT4All downloads open language models to your Mac and lets you chat with them there. Click Add Model, search the models on offer, download one, then load it in Chats and type a prompt. The models come from Hugging Face, many of them as GGUF files, and run on a llama.cpp backend.

LocalDocs brings your own files into a chat. You name a collection, link it to a folder, and GPT4All indexes the text with an embedding model that runs on the Mac. Open LocalDocs in a chat and the model answers with snippets from those files, and a Sources button under each reply shows which files it used. Files already indexed can be used before the whole collection is ready.

Each model carries its own license, separate from the app's MIT license, and the documentation lists examples from Apache 2.0 to non-commercial terms. GPT4All is tuned for models of roughly 3 to 13 billion parameters. A 4-bit Llama 3 8B file is 4.66 GB and needs 8 GB of RAM. You can also add an API key for a remote provider; your prompts then go to that provider.

The minimum is macOS Monterey 12.6 on an M1 with 16 GB of RAM, and Nomic recommends an M2 Pro on macOS 14.5 or newer. The macOS download is an installer DMG, Developer ID-signed and notarized. The last release, 3.10.0, came out in February 2025.

LM Studio also downloads and runs local models. Its Bionic agent edits documents and handles coding, automation and computer-control tasks.
