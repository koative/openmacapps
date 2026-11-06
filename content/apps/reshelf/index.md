---
name: "reshelf"
summary: "Local catalogue of open-source repos on shelves, with clones grouped by category and updates pulled on demand."
category: "Developer tools"
tags:
  - git
  - github
  - organization
  - workspaces
repository: "https://github.com/aka-kika/reshelf"
website: "https://aka-kika.github.io/reshelf/"
license: "MIT"
licenseUrl: "https://github.com/aka-kika/reshelf/blob/main/LICENSE"
download: "https://github.com/aka-kika/reshelf/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/aka-kika/reshelf"
  - "https://github.com/aka-kika/reshelf/blob/main/LICENSE"
  - "https://github.com/aka-kika/reshelf/releases"
  - "https://aka-kika.github.io/reshelf/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/aka-kika/reshelf/releases/download/v1.16.1/reshelf-1.16.1.dmg"
    credit: "reshelf contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

reshelf keeps a list of the open-source repositories you care about, sorted onto shelves and categories. You capture a repo from GitHub, clone it into a folder per category, and pull updates for clones that are behind. Each license gets a plain-language explanation of what you may do with it. It suits developers who collect many projects, or who want to point AI agents at a known set of code, and who do not want an account or a cloud service.

It needs macOS 14 or later and is a universal build. The disk image is signed and notarized. Data stays under `~/reshelf` in SwiftData, SQLite and JSON files. The app contacts GitHub when you capture a repo or refresh its details, and checks for updates through Sparkle. Capture Assist uses on-device Apple Intelligence on Macs that support it, and it is optional.
