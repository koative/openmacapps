---
name: "AI Switch Desktop"
summary: "Local-first desktop app for switching between saved profiles of Claude Code, Codex CLI, Gemini CLI and Antigravity CLI."
category: "Developer tools"
tags:
  - coding-agents
  - developer-utilities
  - local-first
repository: "https://github.com/burakdede/aisw-desktop"
website: "https://aiswitcher.dev"
license: "MIT"
licenseUrl: "https://github.com/burakdede/aisw-desktop/blob/main/LICENSE"
download: "https://github.com/burakdede/aisw-desktop/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/burakdede/aisw-desktop"
  - "https://github.com/burakdede/aisw-desktop/blob/main/LICENSE"
  - "https://github.com/burakdede/aisw-desktop/releases"
  - "https://aiswitcher.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/burakdede/aisw-desktop/blob/main/src-tauri/icons/icon.icns"
    credit: "AI Switch Desktop contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

AI Switch Desktop keeps saved profiles for Claude Code, Codex CLI, Gemini CLI and Antigravity CLI and switches one tool or a saved set of tools from a native window. It can also run diagnostics, verification, repair and backup. The switching, backup and sign-in logic lives in the `aisw` runtime, which the app can bundle, use from the system, or take from a custom path. It suits people who keep several accounts for these command-line tools on one Mac.

The README calls it an alpha with rough edges and runtime integration issues expected. It does not state a minimum macOS version or whether the build is notarized, so this entry does not claim either. The release disk image I checked is an Apple silicon (aarch64) build.
