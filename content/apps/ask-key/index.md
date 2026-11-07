---
name: "Ask Key"
summary: "Local API key manager that gates AI agents' access to stored keys over MCP behind your approval prompts."
category: "Privacy & security"
tags:
  - coding-agents
  - mcp
  - passwords
  - security
repository: "https://github.com/sudoHG/AskKey"
website: "https://askkey.sudohg.com/"
license: "MIT"
licenseUrl: "https://github.com/sudoHG/AskKey/blob/main/LICENSE"
download: "https://github.com/sudoHG/AskKey/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/sudoHG/AskKey"
  - "https://github.com/sudoHG/AskKey/blob/main/LICENSE"
  - "https://github.com/sudoHG/AskKey/releases/latest"
  - "https://askkey.sudohg.com/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/sudoHG/AskKey/releases/download/v0.6.0/AskKey-0.6.0.dmg
    credit: Ask Key contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Ask Key stores API keys, tokens, passwords and files such as SSH keys in an encrypted local library. Coding agents such as Claude Code, Codex, Cursor and Grok CLI find credentials through an MCP server, and each credential has one permission: allow, ask every time (the default), or hidden. A program that is approved receives the value as an environment variable or a short-lived private file, and the agent receives only the program's output. Timed allowances can cover one credential or a group. It is meant for developers whose agents deploy code or call APIs and who would otherwise paste keys into prompts or `.env` files.

It requires macOS 14 or later on Apple silicon; the README and release notes do not mention Intel. The DMG is notarized, and version 0.5.0 has no automatic updater. Later versions can check for updates, which the README describes as the app's only outbound network requests, and the checks can be turned off. Caveats: the library has no backup or recovery, so keep the originals of your credentials elsewhere; an approved program can print or forward what it receives; and caller names are declared by the agent rather than verified. Ask Key began as a fork of the MIT-licensed Lokalite project, and its NOTICE file keeps that copyright.
