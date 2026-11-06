---
name: "Offsend"
summary: "Replaces secrets with reversible tokens so coding agents keep working, with repo policy, git hooks and CI checks."
category: "Developer tools"
tags:
  - coding-agents
  - security
  - privacy
  - git-hooks
repository: "https://github.com/Offsend/Offsend"
website: "https://offsend.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/Offsend/Offsend/blob/main/LICENSE"
download: "https://github.com/Offsend/Offsend/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Offsend/Offsend"
  - "https://github.com/Offsend/Offsend/blob/main/LICENSE"
  - "https://github.com/Offsend/Offsend/releases"
  - "https://offsend.io"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Offsend/Offsend/main/apps/macos/App/Resources/Assets.xcassets/AppIcon.appiconset/icon_128x128%402x.png"
    credit: "Offsend contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Offsend stops API keys, passwords and other secrets from reaching AI coding agents in plain text. It swaps each secret for a reversible `{{TYPE:v1…}}` token that the agent can work with, and `offsend unseal` restores the original value locally. After `offsend setup`, user-level Cursor and Claude hooks seal secret-bearing file reads and tool responses. A repository's `.offsend.yml` adds ignore rules and git pre-commit and post-merge hooks, and a GitHub Action can fail a pull request that would expose secrets. Scanning runs on your machine, and the README says Offsend does not upload scanned file contents, prompts or findings.

The macOS app adds Safe Paste, drag-and-drop file preparation, project audits and watched folders. Its Free tier allows one watched folder and a one-hour mapping lifetime; a Pro tier removes the folder limit and allows mappings up to 24 hours. The CLI runs on macOS and on Linux (x86_64 and arm64). The README calls the hooks defense in depth rather than a guarantee: cloud sessions and editors without those hooks are outside it. It does not say whether the macOS app is notarized. Building from source needs macOS 13 or later, Xcode 16 and Tuist.
