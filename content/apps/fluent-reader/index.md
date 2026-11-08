---
name: "Fluent Reader"
summary: "Follow RSS subscriptions in a desktop reader that syncs with feed services and filters articles with regex rules."
category: "Internet"
tags: ["rss", "feeds", "reading"]
alternativeTo: ["reeder"]
repository: "https://github.com/yang991178/fluent-reader"
website: "https://hyliu.me/fluent-reader/"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/yang991178/fluent-reader/blob/master/LICENSE"
download: "https://github.com/yang991178/fluent-reader/releases"
freeDownload: true
homebrew: "fluent-reader"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/yang991178/fluent-reader", "https://github.com/yang991178/fluent-reader/blob/master/LICENSE", "https://github.com/yang991178/fluent-reader/blob/master/README.md", "https://github.com/yang991178/fluent-reader/releases", "https://raw.githubusercontent.com/yang991178/fluent-reader/master/README.md", "https://hyliu.me/fluent-reader/", "https://github.com/yang991178/fluent-reader/releases/tag/v1.3.2", "https://github.com/yang991178/fluent-reader/releases/tag/v1.3.0", "https://apps.apple.com/app/id6761698838", "https://reederapp.com/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/yang991178/fluent-reader/blob/master/build/icon.png", "credit": "Fluent Reader contributors", "license": "BSD-3-Clause; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Add RSS feeds to Fluent Reader, sort them into groups and read new articles in a list or an overlay view. Your library can stay on the computer or sync through a feed service.

For sync it works with Inoreader, Feedbin, The Old Reader and BazQux Reader, and with self-hosted servers that speak the Fever or Google Reader API. Without an account, you import an OPML file and keep everything on the computer. Full application data backups let you move your library to another machine.

- When a feed only carries snippets, it can fetch the full text with Mercury Parser, load the web page inside the app, or open it in your browser.
- Search runs over titles and article text and accepts regular expressions.
- Rules based on regular expressions can hide, star or mark articles as read as they arrive, and since version 1.3.0 they can apply to all feeds or a group.
- It fetches in the background, sends notifications, and uses single-key shortcuts.

The interface follows Microsoft's Fluent design, with a dark mode for both the app and the article view. It is an Electron app, also built for Windows and Linux, and a separate mobile version lives in its own repository. The developer says no personal information is collected and that cookies are cleared on exit.

On the Mac you can download a DMG from GitHub releases or install it from the Mac App Store, where the listing asks for macOS 13 or later.

Reeder drops unread counts in favor of a timeline position synced over iCloud, and mixes in videos, podcasts and social posts. Fluent Reader keeps a classic read/unread model and leaves sync to feed services.
