---
name: "cctop"
summary: "A keyboard-first menu bar view of AI coding sessions that shows which need you and jumps straight back to them."
category: "AI"
tags:
  - coding-agents
  - menu-bar
  - keyboard-shortcuts
repository: https://github.com/st0012/cctop
website: https://cctop.app
license: "MIT"
licenseUrl: https://github.com/st0012/cctop/blob/master/LICENSE
download: https://github.com/st0012/cctop/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/st0012/cctop
  - https://github.com/st0012/cctop/blob/master/LICENSE
  - https://github.com/st0012/cctop/releases
  - https://raw.githubusercontent.com/st0012/cctop/master/README.md
  - https://github.com/st0012/cctop/releases/tag/v0.21.4
  - https://cctop.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/st0012/cctop/master/menubar/CctopMenubar/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Stan Lo"
    license: "MIT; upstream project asset, trademarks retained"
---

cctop shows your AI coding sessions in one menu bar panel, each marked as working, idle or waiting for you. The icon turns orange or red when a session needs attention. Press the global hotkey and numbered badges appear on the session cards; press a number to jump back to that session.

The jump goes as far as each app allows. In iTerm2, Warp, cmux, Kitty, Ghostty, Terminal and Codex Desktop it lands on the exact tab, pane or thread. VS Code, Cursor, Windsurf and Zed get the project window, Claude Desktop is only brought forward, and if nothing matches cctop opens the folder in Finder. Some targets need setup: iTerm2, Ghostty and Terminal require Automation permission, and Kitty needs remote control enabled.

Sessions come from Claude Code, Claude Desktop, Codex CLI and Desktop, opencode and pi, connected through plugins or hooks you install from Settings. Codex hooks have to be trusted once in a Codex CLI session. A second tab keeps recent projects, and Cleanup finds worktrees left by ended sessions, checks their Git state and removes the ones you choose.

Each session is a small JSON file in `~/.cctop/sessions/`. The developer says there is no analytics, telemetry or session upload, and that network access is used only for update checks.

cctop needs macOS 13 and must live in an Applications folder so the plugins can find its helper. Releases come in separate Apple silicon and Intel builds, both signed and notarized, and Sparkle checks for updates.
