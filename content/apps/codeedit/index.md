---
name: "CodeEdit"
summary: "Edits code in a Swift-built Mac editor with a file navigator, terminal, task runner, Git tools and project search."
category: "Developer tools"
tags: ["code-editor", "native", "development"]
repository: "https://github.com/CodeEditApp/CodeEdit"
website: "https://www.codeedit.app"
license: "MIT"
licenseUrl: "https://github.com/CodeEditApp/CodeEdit/blob/main/LICENSE.md"
download: "https://github.com/CodeEditApp/CodeEdit/releases"
freeDownload: true
homebrew: "codeedit"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/CodeEditApp/CodeEdit", "https://github.com/CodeEditApp/CodeEdit/blob/main/LICENSE.md", "https://github.com/CodeEditApp/CodeEdit/releases", "https://www.codeedit.app/", "https://www.codeedit.app/whats-new", "https://github.com/CodeEditApp/CodeEdit/blob/main/README.md", "https://github.com/CodeEditApp/CodeEdit/releases/tag/v0.3.6"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/CodeEditApp/CodeEdit/blob/main/.github/CodeEdit-Icon-128%402x.png", "credit": "CodeEdit contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

You open a project folder in CodeEdit and edit its files in tabs, with a file navigator, a terminal and task output in the same window. The editor is written in Swift for macOS and aimed at code that does not target Apple platforms; its developers describe it as a supplement to Xcode rather than a replacement.

Its feature list names syntax highlighting, code completion, find and replace across a project, snippets, task running, debugging, Git integration, code review and extensions. The README still warns that CodeEdit is in development and not ready for production work.

Version 0.3.6 comes as a DMG holding a Universal app for Apple silicon and Intel. It needs macOS 13 or later, and both the disk image and the app are signed with a Developer ID and notarized. CodeEdit is MIT-licensed, and the team says it will stay free and open source.

Recent releases show where it stands:

- Version 0.3.5 added a minimap, folding by indentation and a visual guide at a chosen column.
- Since 0.3.5, a single command hides the whole interface around the editor.
- Version 0.3.6 runs tasks in a full terminal emulator, started with Command-R and stopped with Command-period.
- Open files reload when another program changes them, and CodeEdit reopens your files and tabs where you left them.

A menu in settings installs language servers, and the 0.3.6 release notes call that part experimental and likely to change.

