---
name: "ClawdHome"
summary: "A console for running several OpenClaw or Hermes AI agents on one Mac, each isolated in its own macOS user account."
category: "AI"
tags:
  - agents
  - security
  - local-first
repository: https://github.com/ThinkInAIXYZ/clawdhome
website: https://clawdhome.app
license: "Apache-2.0"
licenseUrl: https://github.com/ThinkInAIXYZ/clawdhome/blob/main/LICENSE
download: https://github.com/ThinkInAIXYZ/clawdhome/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/ThinkInAIXYZ/clawdhome
  - https://github.com/ThinkInAIXYZ/clawdhome/blob/main/LICENSE
  - https://github.com/ThinkInAIXYZ/clawdhome/releases
  - https://clawdhome.app
  - https://raw.githubusercontent.com/ThinkInAIXYZ/clawdhome/main/README.md
  - https://github.com/ThinkInAIXYZ/clawdhome/releases/tag/v1.13.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ThinkInAIXYZ/clawdhome/main/ClawdHome/AppIcon.icns
    credit: "ThinkInAIXYZ and ClawdHome contributors"
    license: "Apache-2.0 repository asset; ClawdHome name and icon retained by the project"
---

ClawdHome runs several OpenClaw and Hermes Agent instances on one Mac and gives each one a separate macOS user account. That account holds the agent's runtime, data directory and Keychain items, so a misbehaving agent is fenced in by ordinary user permissions instead of sharing your login.

The SwiftUI panel never runs privileged commands itself. User creation, process control, installs and file operations go through a helper that runs as a LaunchDaemon and accepts a fixed set of XPC calls.

- A setup wizard, gateway start and stop, config hot-reload and Cron-style scheduled tasks live in the same window.
- Each isolated instance gets its own managed browser layer, so cookies and CDP sessions stay out of your main browser profile.
- Backups can cover one instance or all of them, with restore to an earlier point.
- API keys sit in a separate Keychain, and one model profile can be applied to many agents, including custom providers and local model services.
- Agents connect to chat channels such as Telegram, Slack, WhatsApp, Feishu and WeChat.

ClawdHome needs macOS 14 or later. Releases ship as separate installer packages for Apple silicon and Intel; the Apple silicon package for 1.13.0 is signed with a Developer ID and notarized. The interface is in English and Chinese.

OpenClaw and Hermes can run side by side with their own settings while sharing the key store and backups. A diagnostics center checks permissions, configuration, gateway and network, and a watchdog restarts instances that fail. The developer says the core features work offline and nothing leaves the Mac unless you turn on a cloud service.
