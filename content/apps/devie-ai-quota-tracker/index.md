---
name: "Devie AI Quota Tracker"
summary: "Menu bar app that tracks quota across AI subscriptions such as Claude Code, Codex, Gemini CLI and Copilot."
category: "AI"
tags:
  - usage-tracking
  - menu-bar
  - coding-agents
repository: "https://github.com/mathdevie/devie-ai-quota-tracker"
website: "https://github.com/mathdevie/devie-ai-quota-tracker"
license: "MIT"
licenseUrl: "https://github.com/mathdevie/devie-ai-quota-tracker/blob/main/LICENSE"
download: "https://github.com/mathdevie/devie-ai-quota-tracker/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mathdevie/devie-ai-quota-tracker"
  - "https://github.com/mathdevie/devie-ai-quota-tracker/blob/main/LICENSE"
  - "https://github.com/mathdevie/devie-ai-quota-tracker/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/mathdevie/devie-ai-quota-tracker/main/src-desktop/icons/icon.png"
    credit: "Math Devie"
    license: "MIT; upstream app icon, trademarks retained"
---

Devie AI Quota Tracker shows how much of each AI subscription quota remains, in the menu bar and in a dashboard. It covers Claude Code, Codex, Gemini CLI, Antigravity, GitHub Copilot and Cursor, supports several accounts per provider, and can send macOS notifications for low quota, an imminent reset or a completed reset. You sign in to each provider with OAuth; the README says it does not reuse the CLI logins already on your Mac. It is for people who juggle several AI tools or accounts and want reset dates in one place.

The DMG is built for Apple silicon, and the README's badge lists macOS 12 or later. The README does not say whether the build is notarized. Quota checks go directly to each provider, and tokens are stored in local files on your Mac. Anonymous usage events and crash reports go to PostHog, and they are on until you turn them off in Settings, Privacy. The project is MIT licensed.
