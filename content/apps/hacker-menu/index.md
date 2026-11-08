---
name: "Hacker Menu"
summary: "Lists top, Show HN and Ask HN stories from Hacker News in a menu bar window; last released in October 2015."
category: "Internet"
tags:
  - menu-bar
  - feeds
  - reading
repository: "https://github.com/owenthereal/hacker-menu"
website: "https://github.com/owenthereal/hacker-menu"
license: "MIT"
licenseUrl: "https://github.com/owenthereal/hacker-menu/blob/master/LICENSE"
download: "https://github.com/owenthereal/hacker-menu/releases/download/v1.1.5/hacker-menu-mac.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/owenthereal/hacker-menu"
  - "https://github.com/owenthereal/hacker-menu/blob/master/LICENSE"
  - "https://github.com/owenthereal/hacker-menu/releases"
  - "https://raw.githubusercontent.com/owenthereal/hacker-menu/master/README.md"
  - "https://raw.githubusercontent.com/owenthereal/hacker-menu/master/src/index.js"
  - "https://raw.githubusercontent.com/owenthereal/hacker-menu/master/src/server/story_manager.js"
  - "https://raw.githubusercontent.com/owenthereal/hacker-menu/master/src/model/story_type.js"
  - "https://github.com/owenthereal/hacker-menu/releases/tag/v1.1.5"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/owenthereal/hacker-menu/blob/master/images/Icon@1024.icns"
    credit: "Jingwen Owen Ou and Hacker Menu contributors"
    license: "MIT; upstream app icon, trademarks retained"
maintenance: "unmaintained"
maintenanceNote: "No release since October 2015 and no commit since December 2015, as of 6 November 2026."
---

Hacker Menu drops a window down from the menu bar with stories from Hacker News. It has three lists, top stories, Show HN and Ask HN, and clicking a story opens it in your default browser.

Each list holds the first 20 stories and refreshes as Hacker News changes, through the site's Firebase API. The app remembers which stories you have opened and marks them as read, and the menu bar icon changes when new stories arrive.

Hacker Menu is built with Electron and Node.js. Version 1.1.5, from October 2015, is the last release. It is an Intel app for OS X 10.8 or later, signed with a Developer ID, and Apple silicon Macs run it through Rosetta 2. The hackermenu.io domain from the README now shows an unrelated site, so the GitHub releases page is the place to get it.
