---
name: "HeyMate"
summary: "Free, open-source AI assistant for macOS that answers about your screen, speaks guidance and uses your own model keys."
category: "AI"
tags:
  - language-models
  - chat
  - automation
repository: "https://github.com/UmarSiddiqui/heymate"
website: "https://sayheymate.vercel.app"
license: "MIT"
licenseUrl: "https://github.com/UmarSiddiqui/heymate/blob/main/LICENSE"
download: "https://github.com/UmarSiddiqui/heymate/releases/latest/download/HeyMate.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/UmarSiddiqui/heymate"
  - "https://github.com/UmarSiddiqui/heymate/blob/main/LICENSE"
  - "https://github.com/UmarSiddiqui/heymate/releases/latest"
  - "https://sayheymate.vercel.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/UmarSiddiqui/heymate/main/heymate/HeyMate/Assets.xcassets/AppIcon.appiconset/512-mac-v8.png"
    credit: "Umar Siddiqui"
    license: "MIT; upstream app icon, trademarks retained"
---

HeyMate is an assistant that lives on your Mac. Hold Control and Option, ask a question and it answers aloud, can point at the part of the screen it is explaining, and with your approval can click and type for you. You connect it to ChatGPT (Codex), Claude, or a custom service that speaks the Anthropic or OpenAI API format, including local servers. It suits people who want an assistant that runs on their own provider accounts, with no HeyMate subscription.

It needs macOS 14.2 or later and runs on Apple silicon and Intel Macs. The README says current builds are not notarized by Apple: they use a self-signed certificate, so the first launch must be allowed under System Settings → Privacy & Security → Open Anyway. Chats and memory stay on your Mac, but questions and screen context go to the provider you choose. Screen guidance needs a vision-capable model, and provider, voice and connector charges are separate from HeyMate.
