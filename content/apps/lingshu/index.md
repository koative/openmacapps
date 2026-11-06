---
name: "LingShu"
summary: "Model-agnostic macOS agent that runs locally, builds editable slides and documents, and checks its own output."
category: "AI"
tags:
  - agents
  - coding-agents
  - local-first
  - model-agnostic
repository: "https://github.com/RoyZhao1991/LingShu"
website: "https://royzhao1991.github.io/LingShu/"
license: "Apache-2.0"
licenseUrl: "https://github.com/RoyZhao1991/LingShu/blob/main/LICENSE"
download: "https://github.com/RoyZhao1991/LingShu/releases/tag/v0.1.0-alpha.9"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/RoyZhao1991/LingShu"
  - "https://github.com/RoyZhao1991/LingShu/blob/main/LICENSE"
  - "https://github.com/RoyZhao1991/LingShu/releases/tag/v0.1.0-alpha.9"
  - "https://royzhao1991.github.io/LingShu/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/RoyZhao1991/LingShu/main/Assets.xcassets/AppIcon.appiconset/lingshu-1024.png"
    credit: "LingShu contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

LingShu is a native Mac app and agent runtime for tasks that end in files, not only code. From one brief it can plan the work, create an editable PowerPoint or Word document, preview and revise it, and pass the result to an independent checker before it is marked done. You choose the model: OpenAI, Anthropic, DeepSeek, MiniMax or a compatible endpoint, with an API token. The runtime, memory and artifacts stay on your Mac. The README places it beside Codex and Claude Code and says it can read accessibility snapshots and operate Mac apps you authorize. It suits people who want documents and presentations produced and checked on their own machine.

It needs macOS 14 or later and ships as a Universal DMG for Apple silicon and Intel. The v0.1.0-alpha.9 release is a pre-release, and the README says its DMG is signed with a Developer ID certificate and notarized by Apple. The project calls itself alpha: it is under active development, can act on local files and apps once you grant macOS permissions, and the README recommends keeping backups of important work. A separate Windows technical preview exists with reduced capabilities.
