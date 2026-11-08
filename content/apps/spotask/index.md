---
name: "SpotAsk"
summary: "Menu bar assistant: press Option-Space to ask an AI model with your own API key, or act on selected text."
category: "AI"
tags:
  - menu-bar
  - keyboard-shortcuts
  - language-models
  - chat
repository: "https://github.com/shiquda/SpotAsk"
website: "https://shiquda.github.io/SpotAsk/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/shiquda/SpotAsk/blob/main/LICENSE"
download: "https://github.com/shiquda/SpotAsk/releases/download/v0.3.4/SpotAsk-0.3.4-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/shiquda/SpotAsk"
  - "https://github.com/shiquda/SpotAsk/blob/main/LICENSE"
  - "https://github.com/shiquda/SpotAsk/releases"
  - "https://shiquda.github.io/SpotAsk/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/shiquda/SpotAsk/releases/download/v0.3.4/SpotAsk-0.3.4-arm64.dmg
    credit: SpotAsk contributors
    license: AGPL-3.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

SpotAsk is a menu bar tool for quick questions. Press Option-Space, type a question and get an answer from the model you configure, or select text in any app and act on it. It can also hand a question off to ChatGPT or a local AI agent. It suits people who want a fast prompt box across apps and bring their own API keys instead of using a hosted account.

It needs macOS 15 or later. Separate arm64 and x86_64 DMGs are on the releases page. The README says API keys are stored in a local credentials file that only your macOS user can read, not in the Keychain, and are sent only to the provider you set up. It says there is no telemetry. The selection feature asks for Accessibility permission only when you turn it on.
