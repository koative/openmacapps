---
name: "Cardinal"
summary: "A file-name search window with Everything-style query syntax, filters and Quick Look previews."
category: "Utilities"
tags:
  - search
  - files
  - finder
  - quick-look
repository: https://github.com/cardisoft/cardinal
website: https://github.com/cardisoft/cardinal
license: "MIT"
licenseUrl: https://github.com/cardisoft/cardinal/blob/master/LICENSE
download: https://github.com/cardisoft/cardinal/releases
freeDownload: true
homebrew: "cardinal-search"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/cardisoft/cardinal
  - https://github.com/cardisoft/cardinal/blob/master/LICENSE
  - https://github.com/cardisoft/cardinal/releases
  - https://formulae.brew.sh/cask/cardinal-search
  - https://raw.githubusercontent.com/cardisoft/cardinal/master/README.md
  - https://github.com/cardisoft/cardinal/blob/master/doc/pub/search-syntax.md
  - https://github.com/cardisoft/cardinal/releases/tag/v0.1.23
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cardisoft/cardinal/master/cardinal/mac-icon_1024x1024.png
    credit: "Cardinal contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Cardinal finds files on your Mac by name. You press Command-Shift-Space from any app, start typing, and the list of matching paths narrows with each key. The query language follows Everything, the Windows search tool, so a space between words means both must match and a semicolon inside a filter means either.

- `ext:`, `type:` and `*.pdf` limit results to an extension or a group such as pictures, archives or code.
- `size:>100MB` and `dm:pastyear` filter by size and modification date.
- `in:` sets the folder to search, `tag:` matches Finder tags, and `content:` looks for a string inside the files.
- `regex:` takes a regular expression, and `**` searches every subfolder under a path.

Slashes around a word force a prefix, suffix or exact name match, and `Library/Applicat` matches part of a path. A toggle in the window switches case-sensitive matching on and off.

The release page offers DMGs for Apple silicon, Intel and a Universal build. The 0.1.23 Universal DMG is notarized and needs macOS 12 or later. Homebrew installs it as the `cardinal-search` cask.

You work through results from the keyboard. Space shows a Quick Look preview, Command-R reveals the file in Finder, Command-Shift-C copies its path, and the arrow keys in the search field step back through earlier queries. The language switch is in the status bar.
