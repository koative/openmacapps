---
name: "Harness"
summary: "Gives an AI agent a goal in plain language and drives your iOS, macOS or web app, reporting where a user would get stuck."
category: "Developer tools"
tags:
  - testing
  - agents
  - automation
  - developer-utilities
repository: "https://github.com/awizemann/harness"
website: "https://awizemann.github.io/harness/"
license: "MIT"
licenseUrl: "https://github.com/awizemann/harness/blob/main/LICENSE"
download: "https://github.com/awizemann/harness/releases/download/v0.8.4/Harness-v0.8.4-Universal.zip"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/awizemann/harness"
  - "https://github.com/awizemann/harness/blob/main/LICENSE"
  - "https://github.com/awizemann/harness/releases"
  - "https://awizemann.github.io/harness/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/awizemann/harness/main/Harness/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Alan Wizemann"
    license: "MIT; upstream app icon, trademarks retained"
---

Harness is a developer tool for user-style testing rather than scripted UI tests. You write a goal and a persona, and an agent builds or launches the target, reads screenshots, clicks, types and scrolls, then reports whether the goal succeeded and where the flow caused friction. Each run keeps a replayable path of screens and actions, plus timestamped friction events. It can also run as an MCP server, so another agent can drive a session step by step. It suits teams that want to see how a new user would fare on a flow.

It requires macOS 14 or later and is a universal build for Apple silicon and Intel. The 0.8.4 release is Developer ID signed and notarized. The macOS target needs Screen Recording and Accessibility permission. Cloud model runs need your own API keys for Anthropic, OpenAI or Google, while Ollama runs models on the Mac. The README calls the project an alpha.
