---
name: "Lumi"
summary: "Ask from any app and get answers from your files and connected tools, using your signed-in Claude Code."
category: "AI"
tags:
  - coding-agents
  - local-ai
  - search
  - menu-bar
repository: "https://github.com/loomtable/lumi"
website: "https://lumi.loomtable.com"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/loomtable/lumi/blob/main/LICENSE"
download: "https://github.com/loomtable/lumi/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/loomtable/lumi"
  - "https://github.com/loomtable/lumi/blob/main/LICENSE"
  - "https://github.com/loomtable/lumi/releases/latest"
  - "https://lumi.loomtable.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/loomtable/lumi/releases/latest/download/Lumi.dmg"
    credit: "Loomtable"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

Lumi is a menu bar assistant. You tap a key in any app, right ⌥ by default, and ask by voice or by typing. It looks at the front window and your selection, searches Documents, Downloads and Desktop, and answers with one spoken line, a small card or a ring around the relevant text on screen. Answers come from Claude Code running on your Mac, and it can use the tools you connect through MCP, such as Slack, Notion, GitHub or Drive. Changes it proposes wait for your approval. It suits people who want answers from their own files and accounts without a separate chat service.

It requires macOS 26 on Apple silicon, Claude Code 2.1.312 or later, and a signed-in Claude account; questions count against that plan or API usage, and answers need internet access. The app is not notarized: the README says it is not yet signed with an Apple Developer ID, so the first launch needs Open Anyway in System Settings. It needs Input Monitoring, Accessibility and Screen Recording permissions, and the screenshot of the front window is sent to Anthropic when you ask a question.
