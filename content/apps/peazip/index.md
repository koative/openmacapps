---
name: "PeaZip"
summary: "Creates, extracts and encrypts 7Z, ZIP, TAR and many other archive formats, with a built-in file browser."
category: "Utilities"
tags:
  - archives
  - compression
  - encryption
  - cross-platform
alternativeTo:
  - the-unarchiver
repository: "https://github.com/peazip/PeaZip"
website: "https://peazip.github.io"
license: "LGPL-3.0"
licenseUrl: "https://github.com/peazip/PeaZip/blob/sources/LICENSE"
download: "https://peazip.github.io/peazip-macos.html"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/peazip/PeaZip"
  - "https://github.com/peazip/PeaZip/blob/sources/LICENSE"
  - "https://peazip.github.io/peazip-macos.html"
  - "https://github.com/peazip/PeaZip/releases"
  - "https://raw.githubusercontent.com/peazip/PeaZip/sources/README.md"
  - "https://theunarchiver.com/"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/peazip/PeaZip/sources/peazip-sources/res/share/icons/peazip.icns"
    credit: "Giorgio Tani and PeaZip contributors"
    license: "LGPL-3.0; upstream project asset, trademarks retained"
---

PeaZip opens archives in a file-browser window where you can look inside, search and pull out what you need, and it builds new archives from files you add. It reads more than 200 archive types, RAR, ISO, CAB and WIM among them, and writes 7Z, ZIP, ZIPX, TAR, GZ, BZ2, WIM and its own PEA format.

- Encrypted archives use AES, Twofish or Serpent, with optional two-factor authentication and encrypted file names.
- Split files and spanned archives (.001, .r01, .z01) can be joined or created.
- Checksums and hashes verify files, and secure deletion wipes them.
- A task set up in the window can be exported as a command-line script, for example to rerun a backup.

The same Lazarus and Free Pascal program runs on Windows, Linux and BSD, and it uses 7-Zip, Zstd, Brotli, ZPAQ and other open-source engines underneath. The Advanced tab of 7Z creation can switch to Zstd, Brotli or LZ4 once you set the 7z alias to `7zalt` in settings. Standard 7-Zip cannot open those archives.

The download page offers separate DMGs for Apple silicon and Intel, plus a ZIP of the Intel build for older systems. Neither build carries a Developer ID signature, so you drag `peazip.app` to Applications and clear the quarantine flag with an `xattr` command before the first launch. Automator workflows inside the DMG add Extract and Add to archive to the Finder context menu.

The Unarchiver is free too, and it is built for opening and extracting archives. PeaZip also creates and encrypts them.
