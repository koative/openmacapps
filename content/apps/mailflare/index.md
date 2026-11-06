---
name: "Mailflare"
summary: "Native Mac mail app for Mailflare, Gmail, Outlook, iCloud and custom servers, with offline reading and AI drafting."
category: "Productivity"
tags:
  - email
  - self-hosted
  - native
repository: "https://github.com/hieunc229/mailflare-macos"
website: "https://github.com/hieunc229/mailflare-macos"
license: "AGPL-3.0"
licenseUrl: "https://github.com/hieunc229/mailflare-macos/blob/main/LICENSE"
download: "https://github.com/hieunc229/mailflare-macos/releases/download/1.6/Mailflare-v1.6.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/hieunc229/mailflare-macos"
  - "https://github.com/hieunc229/mailflare-macos/blob/main/LICENSE"
  - "https://github.com/hieunc229/mailflare-macos/releases/tag/1.6"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/hieunc229/mailflare-macos/main/Mailflare/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Mailflare contributors (hieunc229)"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

Mailflare for macOS is a mail app built for the self-hosted Mailflare server, which runs on Cloudflare. It also signs in to Gmail, Outlook, iCloud and custom servers. Mail is saved on the Mac so it opens quickly and can be read offline. It supports several accounts with one inbox per account or all together, rich-text composing, drafts and undo. It suits people who run their own mail server and want a native client that also handles ordinary accounts.

It requires macOS 15.3 or later. The optional AI features send the mail they read to the provider you choose, such as OpenAI, Anthropic, Groq or a local Ollama model, and the AI never sends mail itself. The README says passwords and keys are kept in the Keychain and that the app connects only to your mail servers, GitHub for updates, and your AI provider. The upstream materials do not say whether the zip is notarized.
