---
name: "ccglance"
summary: "Floating always-on-top panel showing Claude Code activity instead of a menu bar item."
category: "Developer tools"
tags:
  - coding-agents
  - usage-tracking
  - monitoring
  - native
repository: "https://github.com/hatoya/ccglance"
website: "https://github.com/hatoya/ccglance"
license: "MIT"
licenseUrl: "https://github.com/hatoya/ccglance/blob/main/LICENSE"
download: "https://github.com/hatoya/ccglance/releases/latest/download/ccglance.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/hatoya/ccglance"
  - "https://github.com/hatoya/ccglance/blob/main/LICENSE"
  - "https://github.com/hatoya/ccglance/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/hatoya/ccglance/main/icon/AppIcon.icns"
    credit: "hatoya"
    license: "MIT; upstream app icon, trademarks retained"
---

ccglance shows each Claude Code session as a row in a small translucent panel that stays above other windows, so you can park it on a second display. Rows show whether a session is working, waiting for a permission prompt (a yellow pulse) or finished, and idle sessions show the state of their branch's pull request when the GitHub CLI is installed. The panel never takes focus from the app you are typing in, and it has no Dock icon. It is for people who run several Claude Code sessions at once and want their state in view without a menu bar item.

On first launch it adds Claude Code hooks to `~/.claude/settings.json`, leaving existing hooks in place and saving a backup. Restart any Claude Code session that was already open. The app checks GitHub Releases for updates and can install them in place. Claude Desktop's Chat and Cowork modes are not supported, because they have no hooks; the Code tab is.

Requires an Apple Silicon Mac on macOS 12 or later, Claude Code (CLI or Desktop app) and Node.js for the hooks script. The prebuilt release does not run on Intel Macs; build from source for those. The release is Developer ID signed and notarized, so Gatekeeper opens it without extra steps. The project is unofficial and not affiliated with Anthropic.
