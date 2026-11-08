---
name: "Hyper"
summary: "A terminal built with web technologies and customized through themes and extensions."
category: "Developer tools"
tags: ["terminal", "extensions", "themes", "terminal-emulator"]
repository: "https://github.com/vercel/hyper"
website: "https://hyper.is"
license: "MIT"
licenseUrl: "https://github.com/vercel/hyper/blob/canary/LICENSE"
download: "https://github.com/vercel/hyper/releases"
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release since January 2023; the repository is archived."
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/vercel/hyper", "https://github.com/vercel/hyper/blob/canary/LICENSE", "https://github.com/vercel/hyper/releases", "https://hyper.is", "https://github.com/vercel/hyper/blob/canary/README.md", "https://github.com/vercel/hyper/releases/tag/v3.4.1"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/vercel/hyper/blob/canary/app/static/icon.png", "credit": "Hyper contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Hyper runs your shell in a window drawn with web technology: Electron hosts the app and xterm.js renders the terminal. You change it by editing one JavaScript file, `.hyper.js`, kept in `~/Library/Application Support/Hyper/` on a Mac.

- Plugins are npm packages. List one under `plugins` in the config and Hyper installs it into `.hyper_plugins`, then shows a notification.
- Themes are plugins too, usually a single hook that rewrites the config.
- Keys can be remapped.
- Settings cover the font, the shell path and its arguments, and environment variables for new sessions.

Extensions hook into the same React components and Redux actions the terminal itself is built from, and into Electron's windows and menus. A plugin can therefore change behavior as well as colors.

Development has stopped, and the GitHub repository is archived and read-only. The last version, 3.4.1, ships as separate Apple silicon and Intel downloads in DMG and ZIP form. The Apple silicon app is a Developer ID build, notarized by Apple, and asks for macOS 10.13 or later.
