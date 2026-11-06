---
name: "CopyWheel"
summary: "Menu bar app that opens a radial menu at the cursor so you can pick a saved text snippet and copy it."
category: "Productivity"
tags:
  - snippets
  - clipboard
  - keyboard-shortcuts
  - menu-bar
repository: "https://github.com/weselski/copywheel"
website: "https://github.com/weselski/copywheel"
license: "MIT"
licenseUrl: "https://github.com/weselski/copywheel/blob/main/LICENSE"
download: "https://github.com/weselski/copywheel/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/weselski/copywheel"
  - "https://github.com/weselski/copywheel/blob/main/LICENSE"
  - "https://github.com/weselski/copywheel/releases/latest"
---

CopyWheel is a small menu bar app. A global hotkey, Control-Option-C by default, opens a radial menu at the cursor. Clicking a slice, or pressing a number key, copies that snippet to the clipboard, and arrow keys can rotate through the wheel. An optional outer ring shows the last ten copied texts, kept in memory only and skipping password-manager entries. Secret snippets are stored in the Keychain. It suits people who reuse the same saved texts and want them without opening a notes app.

The source targets macOS 13 (Package.swift sets `.v13`), and the README's build steps need Xcode rather than only the command line tools. The release is not notarized, so the first launch needs approval under Privacy & Security or a quarantine-removal command; the README also offers a Homebrew install with `--no-quarantine`. Caveats: regular snippets are plain JSON in your Application Support folder, and the mouse-button trigger depends on your mouse software mapping a button to the hotkey.
