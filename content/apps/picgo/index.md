---
name: "PicGo"
summary: "Uploads images to an image host by drag, paste or shortcut and copies the link as Markdown, HTML or a URL."
category: "Utilities"
tags: ["images", "upload", "markdown", "plugins", "cross-platform"]
repository: "https://github.com/Molunerfinn/PicGo"
website: "https://picgo.app"
license: "MIT"
licenseUrl: "https://github.com/Molunerfinn/PicGo/blob/dev/LICENSE"
download: "https://github.com/Molunerfinn/PicGo/releases"
freeDownload: true
homebrew: "picgo"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Molunerfinn/PicGo", "https://github.com/Molunerfinn/PicGo/blob/dev/LICENSE", "https://github.com/Molunerfinn/PicGo/releases", "https://raw.githubusercontent.com/Molunerfinn/PicGo/dev/README.md", "https://github.com/Molunerfinn/PicGo/releases/tag/v3.0.3", "https://picgo.app"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Molunerfinn/PicGo/dev/build/icons/icon.icns", "credit": "Molunerfinn and PicGo contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

PicGo uploads an image to a hosting service you have set up and copies the link to the clipboard once the upload finishes. The link can be Markdown, HTML, a bare URL or your own template, ready to paste into a blog post, notes or documentation.

- Drag files onto the window, upload what is on the clipboard, or use the Finder context menu.
- Command-Shift-U opens the upload window from any app, and you can change the shortcut.
- Typora, Obsidian, VS Code, Neovim and other editors can pass pasted images to PicGo, natively or through plugins.
- An HTTP API accepts uploads from scripts and other tools.
- Plugins add hosts and processing such as compression, watermarks, renaming and moving Markdown images to a new host.

Built-in hosts include GitHub, Imgur, SM.MS, Qiniu, Tencent Cloud COS, UPYUN and Alibaba Cloud OSS. AWS S3, Cloudflare R2 and MinIO come through plugins, and the project no longer adds new hosts to the core app. Official Agent Skills and a DeepSeek Harness plugin let AI tools upload through your PicGo setup too.

Version 3.0.3 comes as separate DMGs for Apple silicon and Intel, and the Apple silicon build needs macOS 12 or later. It is also a Homebrew cask. PicGo is an Electron app, free under the MIT license, with Windows and Linux builds as well.
