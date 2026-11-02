---
name: "goose"
summary: "A general-purpose AI agent with a desktop app that edits code, runs commands and uses MCP extensions with the model you choose."
category: "AI"
tags:
  - coding-agents
  - agents
  - automation
  - cross-platform
alternativeTo:
  - claude-code
repository: https://github.com/aaif-goose/goose
website: https://goose-docs.ai
license: "Apache-2.0"
licenseUrl: https://github.com/aaif-goose/goose/blob/main/LICENSE
download: https://goose-docs.ai/docs/getting-started/installation
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/aaif-goose/goose
  - https://github.com/aaif-goose/goose/blob/main/LICENSE
  - https://goose-docs.ai/docs/getting-started/installation
  - https://github.com/aaif-goose/goose/releases
  - https://github.com/aaif-goose/goose/blob/main/documentation/docs/guides/usage-data.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/aaif-goose/goose/blob/main/ui/desktop/src/images/icon.icns
    credit: "goose contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

goose is an AI agent that runs on your own machine. You describe a task in a chat window and it works through it step by step: reading and editing files, running shell commands, and calling tools exposed by Model Context Protocol extensions. It is often used for coding, but the same loop handles research, data work and other multi-step jobs. The same project also ships a command-line version.

goose does not include a model of its own. You connect it to a provider such as Anthropic, OpenAI, Google, OpenRouter or a local Ollama server with an API key, or sign in with an existing subscription where supported. Prompts and the files the agent reads go to whichever provider you pick.

The macOS desktop app comes in separate Apple silicon and Intel downloads. On first launch it asks whether to share anonymous usage data, and that choice can be changed later in Settings. The project, first released by Block, is now part of the Agentic AI Foundation at the Linux Foundation.
