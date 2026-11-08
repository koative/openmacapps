---
name: "Usage4Claude"
summary: "Shows how much of your Claude and Codex subscription limits you have used, and when each resets, in the menu bar."
category: "AI"
tags: ["menu-bar", "usage", "monitoring"]
repository: "https://github.com/f-is-h/Usage4Claude"
website: "https://u4c.fi5h.xyz/"
license: "MIT"
licenseUrl: "https://github.com/f-is-h/Usage4Claude/blob/main/LICENSE"
download: "https://github.com/f-is-h/Usage4Claude/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/f-is-h/Usage4Claude", "https://github.com/f-is-h/Usage4Claude/blob/main/LICENSE", "https://github.com/f-is-h/Usage4Claude/releases", "https://u4c.fi5h.xyz/", "https://github.com/f-is-h/Usage4Claude/blob/main/README.md", "https://github.com/f-is-h/Usage4Claude/releases/tag/v3.5.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/f-is-h/Usage4Claude/main/docs/images/AppIcon.icns", "credit": "f-is-h", "license": "MIT repository asset; trademarks retained"}]
---

Usage4Claude puts your Claude and Codex subscription limits in the menu bar as small icons, one shape and color per limit, that darken as usage climbs. Click one for a detail window with every limit and its reset time.

Claude usage is one total across Claude Code, claude.ai, Cowork and the desktop and mobile apps. The app shows its five-hour and seven-day limits, Extra Usage and weekly limits per model. Codex gets its five-hour and seven-day limits and the credits balance. Each limit appears as a ring, or on a pace chart that plots the share used against time elapsed.

- Notifications fire at thresholds you set between 50 and 100 percent, and again when a limit resets.
- Smart refresh checks once a minute while usage moves and slows to every ten minutes when it stops.
- Several Claude and Codex accounts can be added, each with an alias.
- A badge flags announced Codex quota resets, taken from the community site codex-reset.com.

Sign-in happens in your default browser, so passkeys, Google, Microsoft and enterprise SSO all work. For Claude you can paste a session key instead. Free Claude accounts have no usage data to read, and on Team and Enterprise plans an admin has to enable the member usage dashboard. The app relies on undocumented APIs, which is why it is not on the App Store.

Usage4Claude needs macOS 13 or later and runs on Intel and Apple silicon. It is not notarized, so you allow the first launch once in Privacy & Security settings. After that, Sparkle installs updates from inside the app.

Tokens and session keys are kept in the Keychain, and the app runs in the App Sandbox. The developer says there is no server and no telemetry, and the project has no affiliation with Anthropic or OpenAI.
