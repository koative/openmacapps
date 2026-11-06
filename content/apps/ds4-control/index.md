---
name: "DS4 Control"
summary: "Menu bar app that downloads DeepSeek V4 models, runs the local ds4 server and launches chat or coding agents against it."
category: "AI"
tags:
  - local-ai
  - language-models
  - menu-bar
  - coding-agents
repository: "https://github.com/notatestuser/ds4-control"
website: "https://github.com/notatestuser/ds4-control"
license: "MIT"
licenseUrl: "https://github.com/notatestuser/ds4-control/blob/main/LICENSE"
download: "https://github.com/notatestuser/ds4-control/releases"
homebrew: "ds4-control"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/notatestuser/ds4-control"
  - "https://github.com/notatestuser/ds4-control/blob/main/LICENSE"
  - "https://github.com/notatestuser/ds4-control/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/notatestuser/ds4-control/main/Resources/icon.png"
    credit: "DS4 Control contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

DS4 Control runs DeepSeek V4 models on a Mac through antirez's ds4 inference server, which ships inside the app. From the menu bar it picks a model variant that fits the installed memory, downloads the weights with a resumable parallel downloader, starts and supervises the server, and shows small gauges for memory, GPU, power and CPU. Buttons open a chat window or start Claude Code or Pi against the local model, with up to a one-million-token context.

It is for owners of high-memory Apple silicon Macs who want to run a large open-weight model locally for agentic coding instead of using a hosted API.

The app needs macOS 15 or later on Apple silicon and is signed and notarized; it is also available as a Homebrew cask. The hardware bar is high: at least 96 GiB of unified memory, where 96 to 127 GiB also means raising the Metal wired memory limit, and the V4 Pro model needs 512 GiB. The weights take hundreds of gigabytes of disk, for example 341 GiB for V4.1 Flash at Q2. Resource gauges read power data through a private macOS interface.
