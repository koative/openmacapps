---
name: "OpenClaw"
summary: "A self-hosted AI assistant whose menu bar app runs a local gateway, chats with you and links it to your messaging apps."
category: "AI"
tags:
  - agents
  - chat
  - menu-bar
  - messaging
  - automation
  - self-hosted
repository: https://github.com/openclaw/openclaw
website: https://openclaw.ai
license: "MIT"
licenseUrl: https://github.com/openclaw/openclaw/blob/main/LICENSE
download: https://docs.openclaw.ai/platforms/macos
homebrew: "openclaw"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/openclaw/openclaw
  - https://github.com/openclaw/openclaw/blob/main/LICENSE
  - https://docs.openclaw.ai/platforms/macos
  - https://github.com/openclaw/openclaw/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/openclaw/openclaw/main/apps/macos/Sources/OpenClaw/Resources/OpenClaw.icns
    credit: "OpenClaw Foundation"
    license: "MIT; upstream project asset, trademarks retained"
---

OpenClaw is a personal AI assistant that you host yourself. A background service called the Gateway keeps its sessions, memory and credentials on your machine, connects to the model you choose (a hosted API, a Codex or Claude login, or a local model through Ollama, LM Studio or llama.cpp) and can relay conversations to Discord, iMessage, Slack, Telegram, WhatsApp and other chat services.

The macOS app is the menu bar front end. On first launch it prepares its bundled runtime, starts a Gateway on the Mac and opens a dashboard with chat, a quick-chat shortcut, voice input and settings; it can also connect to a Gateway running on another computer. The app requires macOS 26.2 or later, with Apple silicon, Intel and universal DMGs on GitHub; some releases only ship the command-line package, so use the newest one that includes a Mac build.

The assistant can be granted wide powers on the Mac, including running commands, computer control and importing browser cookies into its own browser profile, and its desktop sharing capability is on by default (it uses macOS Screen Sharing once you enable that in System Settings). Sensitive capabilities ask for confirmation, and the project advises treating incoming chat messages as untrusted. It has no paid tier; it checks for updates daily, and anonymous usage statistics are opt-in.
