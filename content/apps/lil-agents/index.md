---
name: "lil agents"
summary: "Two animated characters walk above the Dock; click one to chat with Claude Code, Codex, Copilot, Gemini CLI or OpenCode."
category: "AI"
tags:
  - coding-agents
  - dock
  - menu-bar
  - animation
repository: "https://github.com/ryanstephen/lil-agents"
website: "https://lilagents.xyz"
license: "MIT"
licenseUrl: "https://github.com/ryanstephen/lil-agents/blob/main/LICENSE"
download: "https://github.com/ryanstephen/lil-agents/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ryanstephen/lil-agents"
  - "https://github.com/ryanstephen/lil-agents/blob/main/LICENSE"
  - "https://github.com/ryanstephen/lil-agents/releases"
  - "https://lilagents.xyz"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ryanstephen/lil-agents/main/LilAgents/Assets.xcassets/AppIcon.appiconset/icon_512x512.png"
    credit: "Ryan Stephen"
    license: "MIT; upstream app icon, trademarks retained"
---

lil agents puts two animated characters, Bruce and Jazz, on top of the Dock, where they walk back and forth. Clicking one opens a small chat popover connected to an AI command-line agent running on your Mac: Claude Code, OpenAI Codex, GitHub Copilot, Gemini CLI or OpenCode, and since version 1.2.2 a self-hosted OpenClaw gateway. Each character can use a different provider, chosen from the popover title or the menu bar.

It is a playful front end for people who already use one of these agents and want it a click away. The popover has themes, a few slash commands and a copy button, and the characters show thinking bubbles and play a sound when a reply is done. The app itself does not collect or send chat content; whatever the chosen CLI sends goes to its own provider.

lil agents needs macOS 14 or later and at least one supported CLI installed; the build is universal for Apple silicon and Intel. The release zip is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings. Updates come through Sparkle, which reports the app and macOS versions. The latest release dates from April 2026.
