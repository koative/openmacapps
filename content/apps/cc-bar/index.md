---
name: "cc-bar"
summary: "Menu bar app tracking Codex, Claude Code, Cursor and Antigravity quotas and reset times, plus local token and cost totals."
category: "AI"
tags:
  - usage-tracking
  - coding-agents
  - menu-bar
repository: "https://github.com/nanvon/cc-bar"
website: "https://github.com/nanvon/cc-bar"
license: "MIT"
licenseUrl: "https://github.com/nanvon/cc-bar/blob/main/LICENSE"
download: "https://github.com/nanvon/cc-bar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nanvon/cc-bar"
  - "https://github.com/nanvon/cc-bar/blob/main/LICENSE"
  - "https://github.com/nanvon/cc-bar/releases/tag/v1.1.37"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/nanvon/cc-bar/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "nanvon"
    license: "MIT; upstream app icon, trademarks retained"
---

cc-bar shows the remaining quota and reset countdown for several AI coding tools: Codex, Claude Code, Cursor and Antigravity, with OpenCode Go and Command Code also supported. It appears in the menu bar, in a floating desktop window or in a popover. From local session logs it also totals tokens and estimated cost by service, project and conversation, and it can send a notification when a five-hour or weekly quota runs low. Credentials are read from the places each tool already uses; Claude Code credentials are only read, never refreshed, so the CLI is not signed out.

It suits people who pay for several coding-agent subscriptions and want their limits in view while they work. The README is mainly in Chinese, and an English version is linked from it. The author states that the app has no usage telemetry, and the Sparkle updater only checks for and installs updates.

The app needs macOS 14 or later and the tools you want to monitor must already be signed in on the Mac. The release build is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings, Privacy & Security; if macOS says the app is damaged, the README suggests removing the quarantine attribute from `/Applications/CCBar.app`. When a credential is only in the Keychain, the app asks for read access on first use.
