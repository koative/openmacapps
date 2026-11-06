---
name: "Codenotch"
summary: "Notch-style overlay with a usage ring per AI coding tool, plus an alert when an agent finishes or is waiting for you."
category: "Developer tools"
tags:
  - coding-agents
  - usage-tracking
  - notch
  - menu-bar
  - cross-platform
repository: "https://github.com/vinzdg/codenotch"
website: "https://github.com/vinzdg/codenotch"
license: "MIT"
licenseUrl: "https://github.com/vinzdg/codenotch/blob/main/LICENSE"
download: "https://github.com/vinzdg/codenotch/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/vinzdg/codenotch"
  - "https://github.com/vinzdg/codenotch/blob/main/LICENSE"
  - "https://github.com/vinzdg/codenotch/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/vinzdg/codenotch/main/Sources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Vinz"
    license: "MIT; upstream app icon, trademarks retained"
---

Codenotch pins a small black notch to any edge of the screen with one ring per AI coding service, filled by how much of the current usage window is spent; hovering a ring shows each limit and when it resets. It covers Claude Code, Codex, Cursor, GitHub Copilot, Antigravity, Grok, Kimi, Amp and others, plus local models in Ollama, LM Studio and oMLX. Most providers are read with the sign-in the tool already keeps on the Mac, so there is no separate login; a few use a pasted key or an in-app web sign-in.

It is meant for developers who switch between several coding agents and their limits. A turning arc inside a ring means a session is still working, an amber ring means it is waiting for you, and the notch opens briefly with a sound when an agent stops. Notifications fire when a limit passes 80% and 100%, the menu bar item can show five-hour limits as text, and a phone companion app can pair over the local network.

Codenotch needs macOS 15 or later and is a universal build. Releases are signed and notarized and install updates in the background through Sparkle unless you switch that off. No provider publishes an official usage API, so readings come from internal endpoints, local caches and keychain items that can change without notice; reading a token from the keychain may prompt for access. A Windows port is built from the same repository.
