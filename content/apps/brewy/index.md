---
name: "Brewy"
summary: "A native Mac app for Homebrew that browses, installs, upgrades and cleans up formulae, casks, taps and services."
category: "Developer tools"
tags: ["homebrew", "package-manager", "menu-bar", "native"]
repository: "https://github.com/starhaven-io/Brewy"
website: "https://github.com/starhaven-io/Brewy"
license: "AGPL-3.0-only"
licenseUrl: "https://github.com/starhaven-io/Brewy/blob/main/LICENSE"
download: "https://github.com/starhaven-io/Brewy/releases/latest"
homebrew: "brewy"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/starhaven-io/Brewy", "https://github.com/starhaven-io/Brewy/blob/main/LICENSE", "https://github.com/starhaven-io/Brewy/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/starhaven-io/Brewy/blob/main/assets/BrewyIcon.png", "credit": "Patrick Linnane", "license": "AGPL-3.0-only; upstream project asset, trademarks retained"}]
---

Brewy puts your Homebrew installation in a Mac window. It lists installed formulae and casks, pinned and outdated packages, and leaves that nothing else depends on, shows each package's versions and dependency tree, and searches Homebrew to install new ones. Upgrades can run for everything at once or for the packages you pick.

It also manages taps, including checks for archived or moved repositories, starts and stops Homebrew services, runs `brew doctor` and cleanup tasks with a dry-run preview first, and keeps a history of actions. A menu bar item shows how many packages are outdated. With the optional `mas` tool it can list Mac App Store apps too.

Brewy needs macOS 15 or later on an Apple silicon Mac and an existing Homebrew install. It is deliberately not sandboxed because it runs your `brew` command, and it updates itself through Sparkle.
