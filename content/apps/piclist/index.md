---
name: "PicList"
summary: "Uploads images to cloud storage or image hosts and manages the files already stored there."
category: "Utilities"
tags:
  - images
  - cloud
  - markdown
  - plugins
  - cross-platform
repository: https://github.com/Kuingsmile/PicList
website: https://piclist.cn
license: "MIT"
licenseUrl: https://github.com/Kuingsmile/PicList/blob/dev/LICENSE
download: https://github.com/Kuingsmile/PicList/releases
freeDownload: true
homebrew: "piclist"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Kuingsmile/PicList
  - https://github.com/Kuingsmile/PicList/blob/dev/LICENSE
  - https://github.com/Kuingsmile/PicList/releases
  - https://formulae.brew.sh/cask/piclist
  - https://piclist.cn/
  - https://github.com/Kuingsmile/PicList/blob/dev/README.md
  - https://github.com/Kuingsmile/PicList/releases/tag/v3.6.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Kuingsmile/PicList/dev/build/icons/512x512.png
    credit: "Kuingsmile, Molunerfinn and PicList contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

PicList uploads images to a storage service you control and copies a link in the format your editor needs. Drop or paste a screenshot, and it lands on a host such as Cloudflare R2, GitHub or WebDAV, ready as Markdown, HTML, a plain URL, UBB or a custom format. It builds on PicGo's upload workflow and adds management of the storage behind it.

- The cloud manager browses, searches, deletes and batch-renames files already in your buckets.
- Image tools watermark, compress, resize, rotate and convert files before upload, set per host.
- Lifecycle scripts automate custom steps without a separate Node.js install.
- Gallery and settings can sync between computers over WebDAV or Git.

The desktop app is built on Electron for macOS, Windows and Linux, and its documentation site is in Chinese and English. Mac releases come as separate disk images for Apple silicon and Intel.

Typora 1.6 and later can select PicList directly as its uploader. Obsidian connects through the Image Auto Upload plugin and PicList's local endpoint at 127.0.0.1:36677, and a VS Code extension, VS-PicList, does the same for that editor. Most existing PicGo plugins work. The same developer also maintains PicHoro, an Android client, and PicList-Core, the command-line core that runs as a separate upload server in Docker.
