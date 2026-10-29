---
name: "magpie"
summary: "A menu bar app and local gateway that points each coding agent at any model, API key or subscription, with failover."
category: "AI"
tags:
  - coding-agents
  - model-providers
  - menu-bar
  - cross-platform
repository: https://github.com/yetone/magpie
website: https://usemagpie.ai
license: "MIT"
licenseUrl: https://github.com/yetone/magpie/blob/main/LICENSE
download: https://github.com/yetone/magpie/releases
homebrew: "magpie"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/yetone/magpie
  - https://github.com/yetone/magpie/blob/main/LICENSE
  - https://github.com/yetone/magpie/releases
  - https://usemagpie.ai
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/yetone/magpie/main/build/darwin/magpie.icns
    credit: "yetone (magpie)"
    license: "MIT; upstream app icon, trademarks retained"
---

magpie lets you choose which model each coding agent uses, such as Claude Code, Codex, Gemini CLI or OpenCode, from one list in the menu bar. It edits the relevant setting in each agent's own config and runs a local gateway that translates between the OpenAI, Anthropic and Gemini APIs, so an agent can run on another vendor's model, a local model or a subscription you are signed in to elsewhere.

Routing groups and multiple accounts per provider let requests move on when a quota runs out, and optional masking replaces keys and personal data in prompts before they leave the computer. You still need your own API keys or subscriptions. It is written in Go and also offers a window, terminal UI, web UI and CLI on macOS, Windows and Linux; the website lists macOS 12 or later, and the Mac builds are signed and notarized.
