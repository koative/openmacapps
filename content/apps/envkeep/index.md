---
name: "Envkeep"
summary: "Age-encrypted vault for project secrets, with a native macOS app and a CLI that prints one value on demand."
category: "Developer tools"
tags:
  - encryption
  - security
  - developer-utilities
  - terminal
repository: "https://github.com/jackofshadowz/envkeep"
website: "https://jackofshadowz.github.io/envkeep/"
license: "MIT"
licenseUrl: "https://github.com/jackofshadowz/envkeep/blob/main/LICENSE"
download: "https://github.com/jackofshadowz/envkeep/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/jackofshadowz/envkeep"
  - "https://github.com/jackofshadowz/envkeep/blob/main/LICENSE"
  - "https://github.com/jackofshadowz/envkeep/releases/latest"
  - "https://jackofshadowz.github.io/envkeep/"
---

Envkeep keeps a project's environment secrets in one age-encrypted vault file, so only ciphertext reaches the disk or a shared private git repository. You manage the vault in a native macOS window, or from a command-line tool whose `get` command prints a single value, so a coding agent can use one key without the key being pasted into a chat. The README includes setup notes for Claude Code, Cursor and aider. It suits developers who keep API keys in `.env` files and want them out of plain text.

The build script sets the minimum to macOS 12.0. The README lists macOS, the `age` tool (installed with Homebrew) and Python 3 as requirements, and says the app is ad-hoc signed and not notarized, so the first launch has to be allowed: right-click the app and choose Open, or clear the quarantine flag as the release notes describe. The CLI runs with your permissions, so an agent you let run commands can read any secret it names. The Touch ID and two-factor gates cover only the app's reveal path, not the CLI. The first release, v1.0.0, dates from June 2026, and the README calls the tool lightweight rather than a replacement for a secrets server.
