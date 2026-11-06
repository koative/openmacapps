---
name: "Phosphor"
summary: "macOS SSH terminal with Docker, server metrics, SFTP and an MCP server that gives agents scoped access to your hosts."
category: "Developer tools"
tags:
  - terminal
  - ssh
  - docker
  - coding-agents
alternativeTo:
  - termius
repository: "https://github.com/Kirusshenkin/terminalOs"
website: "https://github.com/Kirusshenkin/terminalOs"
license: "MIT"
licenseUrl: "https://github.com/Kirusshenkin/terminalOs/blob/main/LICENSE"
download: "https://github.com/Kirusshenkin/terminalOs/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Kirusshenkin/terminalOs"
  - "https://github.com/Kirusshenkin/terminalOs/blob/main/LICENSE"
  - "https://github.com/Kirusshenkin/terminalOs/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Kirusshenkin/terminalOs/main/Resources/AppIcon.icns"
    credit: "The Phosphor authors"
    license: "MIT; upstream app icon, trademarks retained"
---

Phosphor is a macOS terminal for managing your own servers. It keeps one SSH connection per host and runs the shell, Docker container lists and logs, server metrics, SFTP transfers and `authorized_keys` editing over it. The app unlocks with Touch ID, and keys can live in the Keychain or the Secure Enclave. It also ships an MCP server, so Claude Code or Claude Desktop can list hosts, read metrics and follow logs. Every host starts disabled and needs a read-only, confirm or full mode, and every call is written to an audit log. It suits people who run a few servers and want to give an agent access without handing over keys.

The app bundle is arm64 only, and its Info.plist sets a minimum of macOS 14.0, although the README says it was built and tested on macOS 26. It is ad-hoc signed and not notarized, so allow the first launch under System Settings → Privacy & Security. There is no in-app updater yet, and the README lists the native Citadel transport, the corner pet and Sparkle updates as not built. The interface is in English and Russian.
