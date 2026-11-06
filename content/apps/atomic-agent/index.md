---
name: "Atomic Agent"
summary: "Local-first AI agent that keeps its state on your machine and runs on local llama.cpp models or cloud providers."
category: "AI"
tags:
  - local-ai
  - agents
  - local-first
repository: "https://github.com/AtomicBot-ai/atomic-agent"
website: "https://atomicagent.io"
license: "MIT"
licenseUrl: "https://github.com/AtomicBot-ai/atomic-agent/blob/main/LICENSE"
download: "https://github.com/AtomicBot-ai/atomic-agent/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/AtomicBot-ai/atomic-agent"
  - "https://github.com/AtomicBot-ai/atomic-agent/blob/main/LICENSE"
  - "https://github.com/AtomicBot-ai/atomic-agent/releases"
  - "https://atomicagent.io"
---

Atomic Agent is an AI agent that runs its control loop and state on your own machine. It can browse the web, read and edit files, run shell commands after you approve them, and keep sessions, memory and tasks between runs. Models run through llama.cpp on the machine by default; cloud providers are optional, and its Fusion mode lets one model plan while workers run on a second provider. It suits people who want an agent they can inspect and run on their own hardware, and it ships as a terminal interface and a desktop app built on the same agent.

The desktop build in the 0.0.7 release is an arm64 DMG for Apple silicon Macs; the README says Intel Macs are not supported yet. The project calls itself a developer preview, so its APIs, commands and configuration still change and a pinned release is safer for integrations. Anonymous usage analytics and crash reports sent to Sentry are on by default; both can be turned off with `/privacy analytics off`. Browser tasks need Chrome, Edge or another Chromium-family browser, and the git tools need git installed.
