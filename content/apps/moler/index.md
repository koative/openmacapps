---
name: "Moler"
summary: "Native Swift interface for the Mole disk cleaner: clears caches, purges build leftovers and shows disk usage."
category: "Utilities"
tags:
  - disk-cleaner
  - cleanup
  - disk-usage
alternativeTo:
  - cleanmymac
repository: "https://github.com/niyongsheng/moler"
website: "https://moler.looplooptech.com/"
license: "MIT"
licenseUrl: "https://github.com/niyongsheng/moler/blob/main/LICENSE"
download: "https://github.com/niyongsheng/moler/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/niyongsheng/moler"
  - "https://github.com/niyongsheng/moler/blob/main/LICENSE"
  - "https://github.com/niyongsheng/moler/releases/latest"
  - "https://moler.looplooptech.com/"
---

Moler is a disk cleaner for macOS with a native Swift interface. It shows system health and disk use, scans for caches and leftovers to clear, purges build artifacts from Xcode, Gradle and CocoaPods, and refreshes system caches with a dry-run preview. It also draws a colour-coded disk treemap and uninstalls apps with their sizes shown. It is for developers and anyone whose disk fills up with build output and caches.

It requires macOS 14.0 or later on Apple silicon; the release contains an arm64 build. Moler depends on the `mo` command-line tool from the Mole project, which has to be installed separately with `brew install mole`. The build is not notarized, so the first launch has to be allowed in System Settings.
