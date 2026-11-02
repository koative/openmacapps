---
name: "ShichiZip"
summary: "A native macOS take on the 7-Zip File Manager that opens, extracts and creates every archive format 7-Zip supports."
category: "Utilities"
tags:
  - archives
  - compression
  - files
  - quick-look
  - finder
  - native
alternativeTo:
  - the-unarchiver
repository: https://github.com/idawnlight/ShichiZip
website: https://github.com/idawnlight/ShichiZip
license: "LGPL-2.1"
licenseUrl: https://github.com/idawnlight/ShichiZip/blob/main/LICENSE
download: https://github.com/idawnlight/ShichiZip/releases
homebrew: "shichizip"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/idawnlight/ShichiZip
  - https://github.com/idawnlight/ShichiZip/blob/main/LICENSE
  - https://github.com/idawnlight/ShichiZip/releases
  - https://github.com/ip7z/7zip/blob/main/DOC/License.txt
assets:
  - path: ./assets/icon.png
    source: https://github.com/idawnlight/ShichiZip/releases/download/v0.3.4/ShichiZip-v0.3.4-arm64.zip
    credit: "ShichiZip contributors"
    license: "LGPL-2.1; official app icon extracted unmodified from the release bundle, trademarks retained"
---

ShichiZip rebuilds most of the 7-Zip File Manager as a native Mac app on top of the upstream 7-Zip code, so it reads and writes the same long list of formats, from 7z and ZIP to RAR, TAR, disk images and installers. You can browse an archive like a folder, add or replace files, set ZIP encryption and passwords, and use a one-click smart extract that picks a destination and drops redundant top-level folders.

It adds Mac touches that 7-Zip itself lacks: Quick Look previews of archives and of files inside them, Finder Quick Actions, and an option to strip resource forks. Builds are published for Apple silicon and Intel, each in a mainline edition and a "ZS" edition based on the 7-Zip Zstandard fork with extra codecs. The project is young, with versions still below 1.0.

ShichiZip's own code is LGPL-2.1. The bundled 7-Zip sources keep their own terms, mostly LGPL with some BSD files, and the RAR decoder carries 7-Zip's unRAR restriction, which forbids using that code to recreate RAR compression.
