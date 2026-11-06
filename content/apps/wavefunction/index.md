---
name: "Wavefunction"
summary: "Open-source desktop coding agent that works with local models, your own API keys or a ChatGPT sign-in."
category: "AI"
tags:
  - coding-agents
  - local-ai
  - language-models
repository: "https://github.com/stoyan-stoyanov/wavefunction"
website: "https://www.wavefunction.si"
license: "MIT"
licenseUrl: "https://github.com/stoyan-stoyanov/wavefunction/blob/main/LICENSE"
download: "https://github.com/stoyan-stoyanov/wavefunction/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/stoyan-stoyanov/wavefunction"
  - "https://github.com/stoyan-stoyanov/wavefunction/blob/main/LICENSE"
  - "https://github.com/stoyan-stoyanov/wavefunction/releases"
  - "https://www.wavefunction.si"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/stoyan-stoyanov/wavefunction/main/src-tauri/icons/icon.png"
    credit: "Morphologic AI Inc."
    license: "MIT; upstream app icon, trademarks retained"
---

Wavefunction is a desktop coding agent. Each chat is a separate conversation with its own model, folder and history, and chats can run side by side. In a Git repository a new chat starts on its own branch and checkout. The agent can start helper chats for bigger tasks, fork a conversation or rewind it to an earlier point, and run routines on a schedule while the app is open. Connectors and MCP servers extend what it can reach, and a computer-use mode works in a local Docker container instead of your own screen. It is for developers who want a simple desktop agent that works with the model providers they choose.

The README says the app is signed and notarized by Apple and updates itself. It needs a Mac with Apple silicon and macOS 11 or later. Model usage is billed by your provider. Commands run in the macOS sandbox by default, and a fixed check asks before commands it recognizes as irreversible, which the README says does not catch every case. Computer use needs Docker Desktop and a model that can read images. Provider and connector keys are stored as plain local files that only your user account can read; they are not encrypted. The project is MIT licensed.
