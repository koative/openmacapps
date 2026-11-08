---
name: "Linked"
summary: "A distraction-free daily journal that stores one entry per day as local files and searches across them."
category: "Writing"
tags:
  - notes
  - distraction-free
  - cross-platform
repository: "https://github.com/lostdesign/linked"
website: "https://uselinked.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/lostdesign/linked/blob/master/LICENSE"
download: "https://github.com/lostdesign/linked/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since June 2023 and no commit since April 2024."
icon: ./assets/icon.png
sources:
  - "https://github.com/lostdesign/linked"
  - "https://github.com/lostdesign/linked/blob/master/LICENSE"
  - "https://github.com/lostdesign/linked/releases"
  - "https://uselinked.com"
  - "https://raw.githubusercontent.com/lostdesign/linked/master/README.md"
  - "https://github.com/lostdesign/linked/releases/tag/v1.5.2"
  - "https://github.com/lostdesign/linked/releases/tag/v1.5.0"
  - "https://github.com/lostdesign/linked/commits/master"
  - "https://raw.githubusercontent.com/lostdesign/linked/master/src/background.js"
  - "https://raw.githubusercontent.com/lostdesign/linked/master/src/updater.js"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/lostdesign/linked/master/build/icons/icon.icns"
    credit: "lostdesign"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Linked keeps a journal with one page per day, and you write whatever the day needs: thoughts, a to-do list, a block of code. A page has no length limit. Press Command-N or Command-P to step to the next or previous day, add Shift to jump a week, and press Command-period to come back to today.

- The editor handles text styles, lists, to-do items and fenced code blocks. Typing a slash opens a menu of commands.
- Command-K opens a full-text search across every day you have written.
- Each day is saved as a JSON file, sorted into one folder per year under `~/Documents/linked`. You can choose a different data folder in settings.
- The interface is translated into many languages and switches between dark and light themes.

To leave a code block, press Command-Return, the down arrow, or Return three times. The developer says the app needs no internet connection and that your data is stored locally. Linked checks for updates daily by default, or weekly if you change it in settings, and asks before downloading one.

Releases for macOS come as a DMG and a ZIP. The DMG holds an Intel (x86_64) Electron app, Developer ID-signed and notarized, with OS X 10.11 as its minimum. Roadmap items such as linking days together, a month overview and sync between devices have not shipped.
