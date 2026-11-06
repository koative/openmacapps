---
name: "Claudometer"
summary: "Menu bar readout of Claude and ChatGPT usage limits, styled like their settings screens, with service status."
category: "AI"
tags:
  - usage-tracking
  - menu-bar
  - ai-client
  - monitoring
repository: "https://github.com/ananmouaz/claudometer"
website: "https://github.com/ananmouaz/claudometer"
license: "MIT"
licenseUrl: "https://github.com/ananmouaz/claudometer/blob/main/LICENSE"
download: "https://github.com/ananmouaz/claudometer/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/ananmouaz/claudometer"
  - "https://github.com/ananmouaz/claudometer/blob/main/LICENSE"
  - "https://github.com/ananmouaz/claudometer/releases"
---

Claudometer shows how much of your Claude and ChatGPT usage limits you have used, in the menu bar and in a popover laid out like each service's own usage screen. It also shows live status from both services. You sign in to Claude inside the app, which keeps the session in its own cookie jar; for ChatGPT it reads the login that the Codex CLI stores locally, if you use it. It suits people who regularly reach usage caps and want a constant readout.

The build is unsigned and not notarized, so macOS blocks the first launch; the README gives Open Anyway under Privacy & Security or an `xattr` command as ways past it. The README does not state a minimum macOS version, and separate Apple silicon and Intel DMGs are published. The app is not affiliated with Anthropic. It uses the same usage calls that the claude.ai website makes, so a change on that site can break it. The README says there is no telemetry and no backend.
