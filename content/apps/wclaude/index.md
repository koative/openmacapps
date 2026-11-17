---
name: wCLAUDE
summary: "Gives AI agents a real, visible browser to drive over MCP, with uploads of any size, tidy downloads and Keychain sign-in."
category: AI
tags:
  - mcp
  - ai-agents
  - browser
  - automation
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/wCLAUDE
website: https://github.com/starbudweiser/wCLAUDE
license: MIT
licenseUrl: https://github.com/starbudweiser/wCLAUDE/blob/main/LICENSE
download: "https://github.com/starbudweiser/wCLAUDE/releases/latest"
macos: "13"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/wCLAUDE
  - https://github.com/starbudweiser/wCLAUDE/blob/main/LICENSE
  - https://github.com/starbudweiser/wCLAUDE/releases
  - https://raw.githubusercontent.com/starbudweiser/wCLAUDE/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/wCLAUDE/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/wCLAUDE/releases/download/v1.3.5/wCLAUDE-1.3.5-macOS-arm64.zip
    credit: wCLAUDE contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The wCLAUDE browser window showing a public example page, with tabs and the iPhone, Keychain, Downloads and Watch toolbar."
    source: https://github.com/starbudweiser/wCLAUDE/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
wCLAUDE is a browser window that an AI agent drives while you watch. Any agent that speaks MCP, such as Claude Code, Claude Desktop, Cursor or Codex CLI, connects to its built-in server and can open tabs, read pages, click, type and upload files of any size.

The window is visible and uses your own signed-in sessions. When a page needs you, for a sign-in, a CAPTCHA or an unusual-activity block, the agent hands over and waits until you have finished. wCLAUDE never tries to get past those checks.

Other tools help with everyday chores:

- a per-site iPhone mode for features that only exist in mobile layouts;
- downloads saved under their real names in a dedicated folder;
- sign-in forms filled from the macOS Keychain after you approve a system dialog, so the agent never sees the password;
- YouTube uploads and analytics through the official API;
- a page watch that checks pages, feeds and releases with no AI inside.

The app is built with Electron and Chromium. Releases are arm64 builds for macOS 13 or later, signed and notarized, in English, French, Spanish and Italian, with automatic updates from GitHub.
