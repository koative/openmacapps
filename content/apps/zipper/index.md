---
name: "Zipper"
summary: "Archive tool that creates zip and 7z files with exclusions and encryption, and extracts zip, rar and 7z."
category: "Utilities"
tags:
  - archives
  - compression
  - files
  - the-unarchiver
alternativeTo:
  - the-unarchiver
repository: "https://github.com/kshah00/zipper"
website: "https://github.com/kshah00/zipper"
license: "MIT"
licenseUrl: "https://github.com/kshah00/zipper/blob/main/LICENSE"
download: "https://github.com/kshah00/zipper/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kshah00/zipper"
  - "https://github.com/kshah00/zipper/blob/main/LICENSE"
  - "https://github.com/kshah00/zipper/releases/tag/v1.0.1"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/kshah00/zipper/main/Sources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Krish Shah"
    license: "MIT; upstream app icon, trademarks retained"
---

Zipper is a SwiftUI archive tool. It creates zip and 7z archives, can leave out selected files and folders, can encrypt the result, and since version 1.0.1 can skip the files listed in a .gitignore when it makes a zip. It extracts zip, rar and 7z files, but it cannot create RAR archives. It suits people who want to package folders or open archives without the command line, and unlike The Unarchiver it also creates archives.

Zipper's Info.plist sets macOS 13 or later as the minimum version, although the README does not state one. The 1.0.1 DMG is a universal build signed with a Developer ID and notarized by Apple. The README also lists a Mac App Store version and a Homebrew cask from a third-party tap.
