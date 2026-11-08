---
name: "String Studio"
summary: "Editor for Apple .xcstrings localization catalogs, with AI translation and per-string status tracking."
category: "Developer tools"
tags:
  - xcode
  - localization
  - translation
repository: "https://github.com/L1cardo/String-Studio"
website: "https://github.com/L1cardo/String-Studio"
license: "GPL-3.0"
licenseUrl: "https://github.com/L1cardo/String-Studio/blob/main/LICENSE"
download: "https://github.com/L1cardo/String-Studio/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/L1cardo/String-Studio/blob/main/README.md"
  - "https://github.com/L1cardo/String-Studio/releases/tag/v1.0.0(1)"
  - "https://github.com/L1cardo/String-Studio"
  - "https://github.com/L1cardo/String-Studio/blob/main/LICENSE"
  - "https://github.com/L1cardo/String-Studio/releases"
  - "https://apps.apple.com/app/id6753932371"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/L1cardo/String-Studio/releases/download/v1.0.0%281%29/String.Studio.zip"
    credit: "L1cardo"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Open an `.xcstrings` file in String Studio and every string appears in a table with a column for each language, where you type translations in place. A sidebar lists the languages, and you add new targets from there.

- Search finds a string by its key or its text.
- Filters narrow the table to one translation state (new, translated, needs review or don't translate) or to one language.
- Batch translation sends the strings you select to an AI provider for the languages you choose.
- Edits are saved as you work, in Apple's `.xcstrings` format, which also carries translator comments, device-specific variations and translation states.

String Studio needs macOS 15 or later. The GitHub release, 1.0.0 from October 2025, is a ZIP with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. The README also links a Mac App Store version. The code is written in SwiftUI and released under the GPL version 3.

AI translation needs setup first. In Settings you choose a provider, enter your own API key and test the connection. The default prompts are written with Apple developers and Apple's design guidelines in mind, and you can rewrite them.
