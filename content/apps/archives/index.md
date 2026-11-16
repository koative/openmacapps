---
name: ARCHiVES
summary: "Extracts ZIP, RAR, 7z and TAR archives with a double-click and creates archives, with or without a password, from Finder Services."
category: Utilities
tags:
  - archive
  - unzip
  - compression
  - finder
  - desktop-mac-toolkit
alternativeTo:
  - the-unarchiver
repository: https://github.com/starbudweiser/ARCHiVES
website: https://github.com/starbudweiser/ARCHiVES
license: MIT
licenseUrl: https://github.com/starbudweiser/ARCHiVES/blob/main/LICENSE
download: "https://github.com/starbudweiser/ARCHiVES/releases/latest"
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/ARCHiVES
  - https://github.com/starbudweiser/ARCHiVES/blob/main/LICENSE
  - https://github.com/starbudweiser/ARCHiVES/releases
  - https://raw.githubusercontent.com/starbudweiser/ARCHiVES/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/ARCHiVES/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/ARCHiVES/releases/download/v1.0.1/ARCHiVES-1.0.1-macOS-arm64.zip
    credit: ARCHiVES contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The ARCHiVES settings window, showing the ZIP/7Z default format and the compression level selector (none, fast, normal, maximum)."
    source: https://github.com/starbudweiser/ARCHiVES/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
ARCHiVES extracts an archive when you double-click it in the Finder, into a folder named after the file and placed next to it. ZIP, RAR, 7z, TAR, GZ, BZ2 and XZ files are handled, among others.

Creating archives goes through Finder Services. Right-click a selection and choose Extract, Create, or Create a protected archive, and set the compression level in the app.

Passwords work for extraction from ZIP, 7z and RAR files, and for creation in ZIP and 7z. RAR files cannot be created, because the format is proprietary. The engine combines the libarchive library that ships with macOS and a bundled 7-Zip binary, which handles passwords and serves as a fallback for RAR.

Compared with The Unarchiver, ARCHiVES also creates archives, including password-protected ones, from the same right-click menu. Releases are arm64 builds for macOS 15 or later, notarized, with the interface in English, French, Spanish and Italian. The app checks GitHub for new versions and verifies their signature before installing.
