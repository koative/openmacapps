---
name: "mDOWN"
summary: "Downloads video and audio from web pages from the menu bar, with a yt-dlp engine that updates itself."
category: "Internet"
tags: ["downloader", "yt-dlp", "video", "menu-bar", "mcp", "browser-extension"]
repository: "https://github.com/starbudweiser/mDOWN"
website: "https://starbudweiser.github.io/wshowcase/#mDOWN"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mDOWN/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mDOWN/releases/latest"
macos: "15"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-27"
verified: "2026-11-27"
sources: ["https://github.com/starbudweiser/mDOWN", "https://github.com/starbudweiser/mDOWN/blob/main/LICENSE", "https://github.com/starbudweiser/mDOWN/releases/tag/v1.0.3", "https://github.com/starbudweiser/mDOWN/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The mDOWN window with the yt-dlp engine status and per-site checks on the left, and a download list of Blender open movies and a public-domain cartoon on the right, one paused at 62 percent.", "source": "https://github.com/starbudweiser/mDOWN/blob/main/docs/screenshot.png", "credit": "mDOWN authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mDOWN/blob/main/docs/screenshot.png", "credit": "mDOWN authors", "license": "MIT (mDOWN repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mDOWN/blob/main/assets/icon-1024.png", "credit": "mDOWN authors", "license": "MIT; upstream app icon, trademarks retained"}]
icon: ./assets/icon.png
---

mDOWN downloads video and audio from web pages. Paste a link in the app, or right-click a page in the browser and choose Download with mDOWN. It lives in the menu bar and uses about 30 to 40 MB of memory.

- The extraction engine is yt-dlp, and it updates itself without a new app release. Each update is checksum-verified and self-tested, and it is rolled back automatically if a platform test fails.
- A Chromium extension for Brave, Chrome, Edge and others sends pages to the app, and a bookmarklet does the same in Safari.
- A bundled MCP server lets an agent start, track and cancel downloads. An agent can write only to the folders allowed in the settings, and any other request waits for your approval in the menu bar menu.

The release is built for Apple silicon, requires macOS 15, and is Developer ID signed and notarized.
