---
name: "Tidymint"
summary: "A Mac cleaner that explains each item, sends everything to the Trash first and can undo the last clean."
category: "Utilities"
tags:
  - cleanup
  - disk-usage
  - uninstaller
  - storage
  - disk-cleaner
alternativeTo:
  - cleanmymac
repository: "https://github.com/HaiTrung-Workspace/tidymint"
website: "https://tidymint.app"
license: "MIT"
licenseUrl: "https://github.com/HaiTrung-Workspace/tidymint/blob/main/LICENSE"
download: "https://github.com/HaiTrung-Workspace/tidymint/releases/latest"
macos: "14"
arch: both
notarized: true
homebrew: "haitrung-workspace/tidymint/tidymint"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-26"
icon: "./assets/icon.png"
sources:
  - "https://github.com/HaiTrung-Workspace/tidymint"
  - "https://github.com/HaiTrung-Workspace/tidymint/blob/main/LICENSE"
  - "https://github.com/HaiTrung-Workspace/tidymint/releases"
  - "https://tidymint.app"
  - "https://github.com/HaiTrung-Workspace/tidymint/releases/tag/v1.0.0"
  - "https://github.com/HaiTrung-Workspace/tidymint/blob/main/PRIVACY.md"
  - "https://github.com/HaiTrung-Workspace/homebrew-tidymint/blob/main/Casks/tidymint.rb"
  - "https://github.com/koative/openmacapps/issues/85"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/HaiTrung-Workspace/tidymint/main/Resources/AppIcon.png"
    credit: "Tidymint contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Tidymint is a free Mac cleaner in the spirit of CleanMyMac. It scans for caches, logs, old installers, large files, duplicates and the leftovers of removed apps, explains what each group is, and marks it as safe, to review or locked, so risky items are never selected for you. Every clean moves files to the Trash, and the Trash page can put the last run back. Before removing duplicates it can check the project folders you name for scripts that still reference a file.

It also maps disk usage as bubbles, removes apps together with their support files, and has per-app pages for chat apps and browsers.

The cleaner is MIT-licensed, but not all of the released app is. Its Mint tools for window tiling, a file shelf, the menu bar and the clipboard are closed source, so a build from the repository has only the cleaner. Tidymint Plus adds paid tools after a 14-day trial, sold one at a time or as a bundle.

Once a day the update check sends usage statistics, such as which tools you use and whether the copy is free or paid, and this cannot be turned off. Files and their names never leave the Mac.

Version 1.0.0 runs on macOS 14 or later on Apple silicon and Intel, in English and Vietnamese. It is signed with a Developer ID and notarized, and it also installs with Homebrew from the developer's tap.
