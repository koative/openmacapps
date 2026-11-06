---
name: "FinderSearch"
summary: "Native macOS file browser with fuzzy filename search powered by the fsearch index."
category: "Utilities"
tags:
  - search
  - files
  - finder
  - file-manager
repository: "https://github.com/zeusinsight/FinderSearch"
website: "https://github.com/zeusinsight/FinderSearch"
license: "MIT"
licenseUrl: "https://github.com/zeusinsight/FinderSearch/blob/main/LICENSE"
download: "https://github.com/zeusinsight/FinderSearch/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/zeusinsight/FinderSearch"
  - "https://github.com/zeusinsight/FinderSearch/blob/main/LICENSE"
  - "https://github.com/zeusinsight/FinderSearch/blob/main/THIRD_PARTY_NOTICES.md"
  - "https://github.com/zeusinsight/FinderSearch/releases"
---

FinderSearch is a file browser built around finding files by name. Typing runs fuzzy matching with relevance ranking, optionally limited to a folder, and filters such as ext:pdf or mtime:<7d. Views include icon, list, column and gallery, with Quick Look previews, tabs, copy and move, batch rename and ZIP tools. Search runs locally, and the search engine is fsearch, which the project vendors unmodified under its MIT license. It is aimed at filename lookup; content search is not supported yet.

Requires macOS 15 or later on Apple silicon; the README says Intel builds are unverified. The DMG is not Developer ID signed or notarized, so macOS may block the first launch: use Privacy & Security → Open Anyway. Full Disk Access is needed to search protected folders. Content search, Finder extensions, AirDrop and folder merging are not supported yet.
