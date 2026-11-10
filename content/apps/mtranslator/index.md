---
name: mTRANSLATOR
summary: "Translates Bethesda mod plugins and string tables on a Mac, with SST dictionaries, local memory and optional machine translation."
category: Games
tags:
  - modding
  - translation
  - skyrim
  - fallout
  - localization
repository: https://github.com/starbudweiser/mTRANSLATOR
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/mTRANSLATOR/blob/main/LICENSE
download: https://github.com/starbudweiser/mTRANSLATOR/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "The translation table with tag protection and the line editor."
    source: https://github.com/starbudweiser/mTRANSLATOR/blob/main/docs/screenshots/02_project.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/mTRANSLATOR
  - https://github.com/starbudweiser/mTRANSLATOR/blob/main/LICENSE
  - https://github.com/starbudweiser/mTRANSLATOR/releases
  - https://raw.githubusercontent.com/starbudweiser/mTRANSLATOR/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mTRANSLATOR/blob/main/docs/screenshots/02_project.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mTRANSLATOR/releases/download/v2.0.0/mTRANSLATOR_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mTRANSLATOR opens plugins from Skyrim Special Edition, Fallout 4 and Starfield and lets you translate their text line by line or in batches. It reads and writes .esp, .esm and .esl files, .strings, .dlstrings and .ilstrings tables, and MCM `.txt` files.

Suggestions come from three places:

- SST dictionaries in the xTranslator format, applied at once for exact matches and offered for review when close;
- a local memory that keeps every line you validate and reuses it first on the next mod;
- machine translation through Google Translate, or Gemini with your own key.

Game tags such as `<Alias=…>`, `[pagebreak]` and Papyrus variables are protected during machine translation. Batch mode translates several plugins at once, dictionaries first and the machine for the rest.

Find and replace supports regular expressions, and a diff view compares two versions of a mod. Exports include the translated plugin with a timestamped backup, SST, xTranslator XML, CSV, TXT and JSON. The interface language is separate from the translation language.

It covers the main xTranslator workflow on macOS, without Wine. Releases are arm64 builds for macOS 15 or later, notarized, with the interface in English, French, Spanish and Italian.
