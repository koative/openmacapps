---
name: "AI Assistant"
summary: "Menu bar AI helper for selected text and attachments, using Apple's on-device model or a local MLX Gemma server."
category: "AI"
tags:
  - local-ai
  - chat
  - menu-bar
repository: "https://github.com/Joaov41/Aiassistant"
website: "https://ai.assistant.community/"
license: "MIT"
licenseUrl: "https://github.com/Joaov41/Aiassistant/blob/main/LICENSE"
download: "https://github.com/Joaov41/Aiassistant/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Joaov41/Aiassistant"
  - "https://github.com/Joaov41/Aiassistant/blob/main/LICENSE"
  - "https://github.com/Joaov41/Aiassistant/releases/latest"
  - "https://ai.assistant.community/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Joaov41/Aiassistant/releases/download/v2.0.1/Aiassistant.dmg"
    credit: "John Val"
    license: "MIT; upstream app icon, trademarks retained"
---

AI Assistant is a menu bar app for asking AI about selected text, rewriting that text in place in supported editors, and attaching PDFs, documents, emails, images or window captures. A double-tap of Left Shift opens the chat popup, and quick actions cover summaries, key points and translation. You choose between Apple's on-device model, a local MLX Gemma server or your own OpenAI-compatible server. It is for people who want AI help across apps.

It requires macOS 27 or later. The v2.0.1 DMG is signed with a Developer ID and notarized by Apple, but its release notes say Private Cloud Compute is unavailable in that build. The on-device model needs an Apple Intelligence-capable Mac, and Local MLX needs Apple silicon plus a separate Python runtime. The app needs Accessibility permission for selected text and Screen Recording for window capture. Neither the on-device nor the MLX option enforces a local-only policy, and the Local OpenAI option sends context to the server you configure.
