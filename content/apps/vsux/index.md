---
name: "vsux"
summary: "Keeps terminal workspaces, files, Git changes and Markdown previews together on macOS."
category: "Developer tools"
tags: ["workspace", "terminal", "editor", "git", "markdown", "swiftui"]
repository: "https://github.com/shadowDragons/vsux"
website: "https://vsux.sphrag.com/en/"
license: "MIT"
licenseUrl: "https://github.com/shadowDragons/vsux/blob/main/LICENSE"
download: "https://github.com/shadowDragons/vsux/releases/tag/v0.1.2"
macos: "14"
arch: apple-silicon
notarized: false
freeDownload: true
featured: false
added: "2026-11-15"
verified: "2026-11-15"
sources: ["https://github.com/shadowDragons/vsux", "https://github.com/shadowDragons/vsux/blob/main/LICENSE", "https://github.com/shadowDragons/vsux/releases/tag/v0.1.2", "https://vsux.sphrag.com/en/"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/shadowDragons/vsux/blob/main/Resources/AppIcon.icns
    credit: shadowDragons
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Open vsux when several coding projects need to stay visible in one Mac window. Choose a project workspace, open terminals in tabs or split panes, and keep the file tree, editor, Git changes, saved commands and background services beside them. Layouts, working directories and appearance settings are saved locally, so reopening the app restores the workspace arrangement and starts new shells.

Markdown files can be edited beside a live preview. Git views show changed files, staged content and diffs. A command palette opens common actions. The terminal is built on Ghostty's engine and runs the shell and tools already installed on your Mac. vsux does not include an AI agent or MCP server, so you keep using the coding tools you already use.

Quick Tunnel shares a local HTTP service through a temporary Cloudflare link. It needs `cloudflared` installed separately and asks for confirmation first, because anyone with the link can reach the service.

Version 0.1.2 is published as a pre-release for Apple silicon Macs running macOS 14 or later, with English and Simplified Chinese interfaces. The DMG is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings under Privacy & Security. A SHA-256 checksum is published next to it.