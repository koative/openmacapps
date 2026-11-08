---
name: "Vienna"
summary: "A long-running feed reader for RSS, Atom and JSON Feed with a mail-style layout and optional sync."
category: "Internet"
tags:
  - rss
  - feeds
  - reading
alternativeTo:
  - reeder
repository: https://github.com/ViennaRSS/vienna-rss
website: https://www.vienna-rss.com
license: "Apache-2.0"
licenseUrl: https://github.com/ViennaRSS/vienna-rss/blob/master/LICENCE.md
download: https://github.com/ViennaRSS/vienna-rss/releases
freeDownload: true
homebrew: "vienna"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/ViennaRSS/vienna-rss
  - https://github.com/ViennaRSS/vienna-rss/blob/master/LICENCE.md
  - https://github.com/ViennaRSS/vienna-rss/releases
  - https://formulae.brew.sh/cask/vienna
  - https://github.com/ViennaRSS/vienna-rss/blob/master/README.md
  - https://www.vienna-rss.com/about
  - https://www.vienna-rss.com/faq
  - https://github.com/ViennaRSS/vienna-rss/releases/tag/v/3.10.8
  - https://reederapp.com/
  - https://www.vienna-rss.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ViennaRSS/vienna-rss/master/Vienna/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "Vienna contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Vienna reads RSS, Atom and JSON Feed subscriptions in a layout borrowed from Apple Mail. You skim headlines and summaries in a list, then open an article in a pared-down browser view to read it in full. It can fetch feeds straight from each website, or sync through a server that speaks the Open Reader API, such as FreshRSS or Inoreader.

- Press Space to page through the current article and move on to the next unread one; R toggles read status and F toggles a flag.
- Auto Expire moves articles older than a set number of days to the Trash, leaving unread and flagged ones alone.
- Article styles pair an HTML template with a CSS file, and you can write your own.
- Plug-ins add toolbar and menu actions from a plist file, and AppleScript scripts can drive the app.

The Activity window shows how each subscription fared on its last refresh, with HTTP headers for debugging. Your articles live in a messages.db file under Application Support, which you can move elsewhere.

Reeder takes another route: its current version mixes feeds with videos, podcasts and social posts in one timeline and syncs your position across devices through iCloud. Vienna stays a Mac-only feed reader that keeps its articles in a local database.

Version 3.10.8 needs macOS 10.13 or later and ships as a DMG holding a Universal app for Apple silicon and Intel. The app inside is signed with a Developer ID and notarized. Vienna is free under the Apache 2.0 license.
