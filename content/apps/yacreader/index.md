---
name: "YACReader"
summary: "A comic book reader and library manager for CBZ and CBR collections, with a server for reading on phones and in browsers."
category: "Media"
tags:
  - comics
  - reader
  - cross-platform
repository: https://github.com/YACReader/yacreader
website: https://www.yacreader.com
license: "GPL-3.0"
licenseUrl: https://github.com/YACReader/yacreader/blob/develop/COPYING.txt
download: https://www.yacreader.com/downloads
homebrew: "yacreader"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/YACReader/yacreader
  - https://github.com/YACReader/yacreader/blob/develop/COPYING.txt
  - https://www.yacreader.com/downloads
  - https://github.com/YACReader/yacreader/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/YACReader/yacreader/develop/YACReader/YACReader.icns
    credit: "Luis Ángel San Martín Rodríguez and YACReader contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

YACReader is a comic book reader that comes with YACReaderLibrary, a companion app for organising a collection. The reader opens comic archives such as CBZ and CBR and offers single-page and double-page views. The library leaves your folders as they are on disk and builds a browsable catalogue on top, with covers, reading progress and metadata from Comic Vine or ComicInfo.xml files.

YACReaderLibrary includes a server, so the project's iOS and Android apps or a web browser can browse the collection remotely and keep reading progress in sync; the mobile apps are separate downloads. The macOS download is a universal build for Apple silicon and Intel Macs, and Homebrew lists macOS 12 as the minimum. It is built with Qt and also runs on Windows and Linux.
