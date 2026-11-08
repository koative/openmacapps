---
name: "RSS Guard"
summary: "A feed reader and podcast player that reads RSS, Atom and JSON feeds or syncs with services such as Feedly and FreshRSS."
category: "Internet"
tags: ["rss", "feeds", "reading"]
alternativeTo: ["reeder"]
repository: "https://github.com/martinrotter/rssguard"
website: "https://github.com/martinrotter/rssguard"
license: "GPL-3.0"
licenseUrl: "https://github.com/martinrotter/rssguard/blob/master/LICENSE.md"
download: "https://github.com/martinrotter/rssguard/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/martinrotter/rssguard", "https://github.com/martinrotter/rssguard/blob/master/LICENSE.md", "https://github.com/martinrotter/rssguard/blob/master/README.md", "https://github.com/martinrotter/rssguard/releases", "https://github.com/martinrotter/rssguard/releases/tag/5.2.5", "https://rssguard.readthedocs.io/en/stable/downloads.html", "https://rssguard.readthedocs.io/en/stable/supported-os.html", "https://rssguard.readthedocs.io/en/stable/features/article-display.html", "https://rssguard.readthedocs.io/en/stable/features/filters.html", "https://rssguard.readthedocs.io/en/stable/features/labels.html", "https://reederapp.com/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/martinrotter/rssguard/master/resources/graphics/rssguard.png", "credit": "RSS Guard contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

RSS Guard pulls articles from RSS, Atom, JSON, iCalendar and Sitemap feeds into one reader. You can keep plain feeds in local folders, or add an online account and let RSS Guard sync with it.

- Supported services include Feedly, Nextcloud News, Tiny Tiny RSS, Gmail and services built on the Google Reader API, such as FreshRSS, Inoreader and Miniflux.
- Any number of labels can go on an article, and some services sync them.
- Article filters are scripts that run on incoming articles to mark them important, strip ads or reject them. A visual generator builds simple ones.
- A built-in player based on mpv or ffmpeg plays podcast audio and video.
- Feeds can also arrive over the Gemini protocol, and real-time Atom entries over XMPP.

Filters are aimed at advanced users, since a script can slow down feed updates and download more data.

Every release comes in two variants. The web build renders pages with Qt WebEngine, loads images normally and can print to PDF, at the cost of a larger download. The text build uses the simpler QTextBrowser and avoids the graphics-driver crashes WebEngine causes on some systems. For version 5.2.5 the text DMG holds an Apple silicon app built for macOS 15 or later. It carries no Developer ID signature, so Gatekeeper rejects it. Get it from the GitHub releases page; rssguard.com is an unrelated site.

Reeder runs on iOS and macOS and syncs your place in the timeline between devices. RSS Guard covers Windows, Linux, BSD, OS/2 and macOS instead, and leaves syncing to the service you connect.
