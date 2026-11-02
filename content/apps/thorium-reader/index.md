---
name: "Thorium Reader"
summary: "EDRLab's accessible reading app for EPUB, PDF, DAISY books, audiobooks and comics, with OPDS catalogs and read aloud."
category: "Productivity"
tags:
  - ebooks
  - reading
  - ebook-reader
  - accessibility
  - audiobooks
  - cross-platform
repository: https://github.com/edrlab/thorium-reader
website: https://thorium.edrlab.org
license: "BSD-3-Clause"
licenseUrl: https://github.com/edrlab/thorium-reader/blob/develop/LICENSE
download: https://github.com/edrlab/thorium-reader/releases/latest
homebrew: "thorium"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/edrlab/thorium-reader
  - https://github.com/edrlab/thorium-reader/blob/develop/LICENSE
  - https://github.com/edrlab/thorium-reader/releases
  - https://www.edrlab.org/software/thorium-reader/
assets:
  - path: ./assets/icon.png
    source: https://github.com/edrlab/thorium-reader/blob/develop/resources/icons/512x512.png
    credit: "EDRLab"
    license: "BSD-3-Clause; upstream project asset, trademarks retained"
---

Thorium Reader is a desktop reading app from EDRLab, the non-profit behind the Readium toolkits. It opens EPUB 2 and 3 books in reflowable and fixed layouts, PDF files, DAISY accessible books, audiobooks and Divina comics, and can browse and sign in to OPDS catalogs such as library lending services.

Reading settings cover fonts, spacing, columns, sepia and night modes. It keeps bookmarks, annotations and your place in each book, searches inside a publication, plays synchronized media overlays and reads text aloud. Accessibility is a stated priority, including use with VoiceOver on the Mac.

Separate Apple silicon and Intel disk images are published on GitHub. The official builds can open books protected with the Readium LCP DRM using an additional component that is not part of the open-source code; a build made from the public repository only handles the basic LCP test profile.
