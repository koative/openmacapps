---
name: "baRSS"
summary: "A menu bar RSS and Atom reader that checks feeds in the background and opens new articles in your browser."
category: "Internet"
tags:
  - rss
  - feeds
  - menu-bar
  - reading
repository: https://github.com/relikd/baRSS
website: https://github.com/relikd/baRSS
license: "MIT"
licenseUrl: https://github.com/relikd/baRSS/blob/main/LICENSE
download: https://github.com/relikd/baRSS/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/relikd/baRSS
  - https://github.com/relikd/baRSS/blob/main/LICENSE
  - https://github.com/relikd/baRSS/releases/tag/v1.6.2
  - https://raw.githubusercontent.com/relikd/baRSS/main/README.md
  - https://github.com/relikd/baRSS/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/relikd/baRSS/main/baRSS/Artwork/AppIcon.icns
    credit: "relikd"
    license: "MIT repository asset; trademarks retained"
---

baRSS checks your RSS and Atom subscriptions in the background and lists new articles in a menu under its menu bar icon, with a dot on the unread ones. Choosing an article opens it in your browser. The app has no reader view of its own.

The developer built it for a small footprint. The release is a ZIP of about half a megabyte, and the developer says the app uses under 30 MB of memory and keeps no cookies or cached web sessions. You set how often feeds refresh, and requests reuse ETag and Last-Modified headers, so a feed that has not changed is not downloaded again.

baRSS needs macOS 10.13 or later and runs on Apple silicon and Intel. It has no option to start at login, so you add it to Login Items yourself. Release 1.6.2 is not notarized, and the README's Homebrew instructions clear the quarantine flag after installing from the developer's tap.

A few controls sit behind the Option key. Option-clicking an article marks it read or unread without opening it. Holding Option while you open the menu shows articles that the "Show only unread" setting hides. In the feed editor, Option reveals a regular-expression converter for sites that publish no feed. Some settings, such as the tint of the menu bar icon, exist only as `defaults` commands. The README also gives a one-line command that backs up your subscriptions as OPML.
