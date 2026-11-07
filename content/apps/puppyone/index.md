---
name: "puppyone"
summary: "Desktop folder that local and cloud AI agents can read and write, with Git-based version history; local use needs no account."
category: "Productivity"
tags:
  - file-manager
  - local-first
  - agents
  - git
repository: "https://github.com/puppyone-ai/puppyone"
website: "https://www.puppyone.ai"
license: "Apache-2.0"
licenseUrl: "https://github.com/puppyone-ai/puppyone/blob/main/LICENSE"
download: "https://github.com/puppyone-ai/puppyone/releases/download/v0.4.2/puppyone-0.4.2-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/puppyone-ai/puppyone"
  - "https://github.com/puppyone-ai/puppyone/blob/main/LICENSE"
  - "https://github.com/puppyone-ai/puppyone/releases"
  - "https://www.puppyone.ai/en/download"
assets:
  - path: ./assets/icon.png
    source: https://github.com/puppyone-ai/puppyone/releases/download/v0.4.2/puppyone-0.4.2-arm64.dmg
    credit: puppyone contributors
    license: Apache-2.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

puppyone is a folder for AI agents. You open a folder on your computer, and local agents, either in their own apps or in puppyone's built-in agent, can read and write its files. The folder can also be put in puppyone Cloud, which the project hosts by default, so agents such as ChatGPT (Web) and Manus can reach the same files through MCP, the CLI or SSH. Every folder runs on Git, so a file or the whole folder can be reverted to an earlier version. It suits people who want several agents to work on the same documents.

The README lists macOS and Windows downloads and says local use needs no account. It also says the app sends basic product analytics, which can be turned off in Settings → Privacy. The v0.4.2 release provides an Apple silicon DMG, and the README gives no minimum macOS version. Cloud agents cannot reach a folder that stays only on your computer.
