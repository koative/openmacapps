---
name: "Lite XL"
summary: "A lightweight text editor extended with Lua plugins and a deliberately compact interface."
category: "Developer tools"
tags: ["code-editor", "lightweight", "lua"]
alternativeTo: ["sublime-text"]
repository: "https://github.com/lite-xl/lite-xl"
website: "https://lite-xl.com"
license: "MIT"
licenseUrl: "https://github.com/lite-xl/lite-xl/blob/master/LICENSE"
download: "https://github.com/lite-xl/lite-xl/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/lite-xl/lite-xl", "https://github.com/lite-xl/lite-xl/blob/master/LICENSE", "https://github.com/lite-xl/lite-xl/releases", "https://raw.githubusercontent.com/lite-xl/lite-xl/master/README.md", "https://github.com/lite-xl/lite-xl/releases/tag/v2.1.8", "https://lite-xl.com", "https://lite-xl.com/setup/getting-started/", "https://lite-xl.com/user-guide/introduction/", "https://lite-xl.com/user-guide/configuration/", "https://raw.githubusercontent.com/lite-xl/lite-xl/v2.1.8/data/core/keymap-macos.lua", "https://www.sublimetext.com/", "https://www.sublimetext.com/download"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/lite-xl/lite-xl/blob/master/resources/icons/lite-xl.svg", "credit": "Lite XL contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.svg"
---

Lite XL edits code inside a project folder: you open a directory, browse it in the file tree and jump between files with a fuzzy finder. Only a thin C layer talks to the operating system. Everything else is Lua, so you can script almost any part of the editor. It is derived from rxi's lite and still runs most lite plugins and all of its color themes.

- Command-Shift-P opens a command palette with fuzzy matching, and Command-P finds a file in the project.
- Multiple cursors, autocomplete and split panes work out of the box.
- Find and replace understands regular expressions and case-sensitive matching.
- Project search lists every match across files in its own tab. It cannot replace across files.
- Open files and folders come back when you restart the editor.

Settings live in a Lua user module, `init.lua`, which the editor reloads as soon as you save it. Key bindings go in the same file. A project can carry its own module too, handy for custom build commands or plugins that only one codebase needs.

Every release ships twice. The base build includes syntax highlighting for nine languages, among them C, Python and Markdown. The addons build adds 112 language plugins, a settings window and dozens of color themes. Both come as Universal, Intel and Apple silicon disk images and need OS X 10.11 or later. The app is ad-hoc signed and not notarized, so macOS asks you to approve it on first launch.

Sublime Text also has multiple selections, plus Goto Anything and a Python API for its packages, and it needs a purchased license for continued use. Lite XL is MIT-licensed, and its plugins are Lua files you can read and edit.
