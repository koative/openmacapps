---
name: "AnythingLLM"
summary: "A desktop AI workspace for chatting with models and organizing document collections."
category: "AI"
tags: ["local-ai", "documents", "chat"]
repository: "https://github.com/Mintplex-Labs/anything-llm"
website: "https://anythingllm.com"
license: "MIT"
licenseUrl: "https://github.com/Mintplex-Labs/anything-llm/blob/master/LICENSE"
download: "https://anythingllm.com/download"
freeDownload: true
homebrew: "anythingllm"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Mintplex-Labs/anything-llm", "https://github.com/Mintplex-Labs/anything-llm/blob/master/LICENSE", "https://anythingllm.com/download", "https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/master/README.md", "https://docs.anythingllm.com/installation-desktop/macos", "https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.19.0"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Mintplex-Labs/anything-llm/blob/master/frontend/src/media/logo/anything-llm-icon.png", "credit": "AnythingLLM contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

AnythingLLM lets you chat with a language model about your own documents. You create a workspace, drag in PDFs, Word files or text, and ask questions; answers come with citations of the sources they drew on.

- A built-in engine runs local models, or you connect Ollama, LM Studio, OpenAI, Anthropic, Gemini and many other providers.
- Agents can search the web, read and write local files and call MCP servers.
- A no-code builder chains agent steps into flows.
- Scheduled tasks run prompts on a cron schedule.

The desktop app needs no account. The developer says models, documents and chat history stay on the Mac by default. It still sends anonymous usage events, such as the fact that a chat was sent, to PostHog, and you can turn this off under Privacy in the sidebar. Multi-user accounts, white-labelling and the embeddable chat widget exist only in the Docker version.

There are separate DMGs for Apple silicon and Intel, and the documentation notes that M-series chips run local models considerably faster. The code is MIT-licensed, while each model and outside provider keeps its own terms.
