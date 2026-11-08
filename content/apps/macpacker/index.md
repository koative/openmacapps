---
name: MacPacker
summary: "Opens archives like folders so you can preview and drag out single files without extracting everything."
category: Utilities
tags:
  - archives
  - compression
  - files
alternativeTo:
  - the-unarchiver
repository: https://github.com/sarensw/MacPacker
website: https://macpacker.app
license: GPL-3.0
licenseUrl: https://github.com/sarensw/MacPacker/blob/main/LICENSE
download: https://github.com/sarensw/MacPacker/releases
freeDownload: true
homebrew: "macpacker"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/sarensw/MacPacker", "https://github.com/sarensw/MacPacker/blob/main/LICENSE", "https://github.com/sarensw/MacPacker/blob/main/README.md", "https://github.com/sarensw/MacPacker/releases", "https://github.com/sarensw/MacPacker/releases/tag/v1.2.0", "https://macpacker.app", "https://theunarchiver.com/"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/sarensw/MacPacker/blob/ab37a6123924a387e015edf75365ccd37a51b99d/assets/AppIcon-iOS-Default-1024x1024%401x.png
    credit: MacPacker contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

MacPacker opens an archive like a folder. You browse its contents, preview files without extracting them and drag out only the items you need.

- An archive inside another archive opens directly, in the app or in Quick Look, without unpacking the outer one first.
- It reads more than 40 formats, among them RAR, 7z, ISO, DMG, VMDK and compressed tarballs, and detects them by content instead of file extension.
- ZIP and 7z archives can be created, edited in place, protected with an AES-256 password and split into volumes.
- Finder gets Quick Look previews and right-click commands to extract or compress, and you choose which commands appear.
- Permissions, symbolic links, custom icons and Finder tags are kept when you archive and extract, so unpacked apps still open.

When an archive holds several top-level items, MacPacker gathers them in a new folder that takes the archive's name. An archive holding one folder extracts as just that folder. Navigation uses the same keys as Finder, with breadcrumbs, sortable columns and search.

The Unarchiver is also free, and its site describes setting it as the default app for all archive files. MacPacker shows what is inside first and lets you pick.

MacPacker needs macOS 14.6 or later; version 0.14.1 was the last for macOS 13. The project says every build is sandboxed, signed and notarized, and the 1.2.0 DMG on GitHub holds a Universal app for Apple silicon and Intel. The same app is on the Mac App Store, where releases arrive a few days later.
