---
name: "Sigil"
summary: "A multi-platform EPUB editor for creating and fixing ebooks, with code and preview views and plugin support."
category: "Writing"
tags:
  - ebooks
  - editor
  - publishing
  - cross-platform
repository: "https://github.com/Sigil-Ebook/Sigil"
website: "https://sigil-ebook.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/Sigil-Ebook/Sigil/blob/master/COPYING.txt"
download: "https://github.com/Sigil-Ebook/Sigil/releases"
freeDownload: true
homebrew: "sigil"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/Sigil-Ebook/Sigil"
  - "https://github.com/Sigil-Ebook/Sigil/blob/master/COPYING.txt"
  - "https://github.com/Sigil-Ebook/Sigil/releases"
  - "https://sigil-ebook.com"
  - https://raw.githubusercontent.com/Sigil-Ebook/Sigil/master/README.md
  - https://sigil-ebook.com/sigil/
  - https://sigil-ebook.com/sigil/download/
  - https://github.com/Sigil-Ebook/Sigil/releases/tag/2.8.5
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/Sigil-Ebook/Sigil/master/src/Resource_Files/icon/app_icons_orig/app_icon_256.png"
    credit: "Sigil-Ebook contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Sigil opens an EPUB 2 or EPUB 3 book as the set of files it really is, so you can fix the markup, styles and structure by hand. Code View shows the XHTML and CSS directly, and Preview shows how the page renders.

You can start from an existing EPUB or import HTML files, images and style sheets. The work around the text is covered too:

- a Table of Contents generator that handles several heading levels
- a metadata editor
- Find & Replace with full PCRE regular expressions
- spell checking with default and user dictionaries
- tidying of imported files, with optional prettifying of your code
- checkpoints, which save snapshots of the book you can compare against later

Plugins extend the editor, and a community index of them is kept on the MobileRead forums. That is also where to ask questions and request features: the developers close feature requests opened on the GitHub issue tracker, which is reserved for code problems and bugs.

Version 2.8.5 follows the EPUB 3.4 spec changes, swaps the old CSS parser for a modern one and adds AVIF and JPEG XL image support. Sigil needs macOS 13 or later. That release has separate Apple silicon and Intel builds, packaged as .txz archives, and the developers state that the Mac builds are signed and notarized. Windows and Linux versions come from the same code.
