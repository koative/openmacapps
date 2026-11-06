---
name: "Mino"
summary: "Menu bar app that tracks GitHub releases, with Homebrew cask integration and quick adds from copied repository URLs."
category: "Developer tools"
tags:
  - github
  - git
  - homebrew
  - menu-bar
repository: "https://github.com/nad-bit/Mino"
website: "https://github.com/nad-bit/Mino"
license: "MIT"
licenseUrl: "https://github.com/nad-bit/Mino/blob/main/LICENSE"
download: "https://github.com/nad-bit/Mino/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nad-bit/Mino"
  - "https://github.com/nad-bit/Mino/blob/main/LICENSE"
  - "https://github.com/nad-bit/Mino/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/nad-bit/Mino/releases/download/v2.3.2/Mino_v2.3.2_Universal.zip"
    credit: "nad-bit"
    license: "MIT; upstream app icon, trademarks retained"
---

Mino is a menu bar app that keeps a list of GitHub repositories and shows their latest releases and notes in a popover. You can add a repository by copying its URL, or add a Homebrew cask and let Mino resolve its repository, and it detects casks you have installed. From the menu it can also install or update a cask. It suits people who follow many open-source tools and install them from releases or Homebrew.

The app needs macOS 12 or later; the release zip is a universal build for Apple silicon and Intel. The zip is ad-hoc signed and not notarized, so macOS can block the first launch, and the README gives an `xattr` command to remove the quarantine flag. Running Homebrew installs and updates requires the App Management permission in System Settings, because Mino modifies apps in `/Applications`. Homebrew is optional and only needed for the cask features.
