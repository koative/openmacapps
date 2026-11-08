---
name: "Adrafinil"
summary: "Keeps a Mac awake with the lid closed only while AI coding agents are working."
category: "AI"
tags: ["coding-agents", "sleep", "power", "menu-bar"]
repository: "https://github.com/kageroumado/adrafinil"
website: "https://kagerou.glass/adrafinil/"
license: "MIT"
licenseUrl: "https://github.com/kageroumado/adrafinil/blob/main/LICENSE"
download: "https://github.com/kageroumado/adrafinil/releases"
freeDownload: true
homebrew: "adrafinil"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/kageroumado/adrafinil", "https://github.com/kageroumado/adrafinil/blob/main/LICENSE", "https://github.com/kageroumado/adrafinil/releases", "https://raw.githubusercontent.com/kageroumado/adrafinil/main/README.md", "https://kagerou.glass/adrafinil/", "https://github.com/kageroumado/adrafinil/releases/tag/v1.14.1"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/kageroumado/adrafinil/main/.github/adrafinil-icon.png", "credit": "kageroumado", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Adrafinil keeps a MacBook awake with the lid shut, but only while a coding agent is in the middle of a turn. You install its hooks into the agents you use from Settings, close the lid, and the Mac keeps working; once the last agent goes idle, the hold is released and the Mac can sleep normally.

Each agent session takes and drops its own hold, so several agents can overlap and sleep returns only after the final one finishes. Hooks ship for ten agents, among them Claude Code, Codex, Cursor, Gemini CLI, Aider, Cline and OpenCode. For other tools there is a command-line client with `acquire`, `release` and timed `hold --for` commands, plus MCP access and command wrappers.

- A thermal cutout drops holds when the Mac gets too hot.
- Holds from agents that quit or stall are released automatically.
- An optional chime confirms the hold when you close the lid, and the screen locks.
- Opening the lid can show a summary of session length and temperature.
- Uninstalling removes the hook entries it added to each agent.

Version 1.14.1 requires macOS 26.4 or later and is built for Apple silicon only; the app inside its disk image is Developer ID-signed and notarized. The README links a macOS 15 backport kept in a separate repository, and the app is also available as a Homebrew cask.

Closed-lid operation goes through a privileged root helper that needs administrator approval. The helper uses `pmset disablesleep`, which also blocks idle sleep while a hold is active. Usage counting is opt-in: the developer says that if you agree, one anonymous check-in is sent per day of use, and turning it off deletes what was sent.
