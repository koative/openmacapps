---
name: "CodexReset"
summary: "Menu bar companion that resumes Codex conversations paused by a usage limit once your usage is back."
category: "AI"
tags:
  - coding-agents
  - automation
  - menu-bar
repository: "https://github.com/boyso/codex-reset"
website: "https://codexresets.org"
license: "MIT"
licenseUrl: "https://github.com/boyso/codex-reset/blob/main/LICENSE"
download: "https://github.com/boyso/codex-reset/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/boyso/codex-reset"
  - "https://github.com/boyso/codex-reset/blob/main/LICENSE"
  - "https://github.com/boyso/codex-reset/releases"
  - "https://codexresets.org"
---

CodexReset watches the 5-hour and weekly usage windows of the Codex desktop app and finds conversations that stopped at a usage limit. When usage is back, it sends a command, by default "继续", to the conversations you have ticked in its panel. It suits people who run several Codex threads at once and do not want to return to each paused one by hand. It talks only to the local Codex app, through Codex's local app-server where possible, and otherwise by pasting into the window.

The app needs macOS 14 or later and the Codex desktop app, which it does not bundle. The README says it is not an official OpenAI product, was reverse-engineered from local behaviour and may break after Codex updates. The fallback channel needs Accessibility permission. The release zip is signed with a development certificate and is not notarized, so the first launch has to be allowed in System Settings. Automatic resumes use your usage in the normal way.
