---
name: MacSift
summary: A disk cleaner that groups removable files by app and sends selections to the Trash, never deleting outright.
category: Utilities
tags:
- cleanup
- storage
- disk-usage
- disk-cleaner
alternativeTo:
- cleanmymac
- ccleaner
repository: https://github.com/Lcharvol/MacSift
website: https://lcharvol.github.io/MacSift/
license: MIT
licenseUrl: https://github.com/Lcharvol/MacSift/blob/main/LICENSE
download: https://github.com/Lcharvol/MacSift/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/Lcharvol/MacSift
- https://github.com/Lcharvol/MacSift/blob/main/LICENSE
- https://github.com/Lcharvol/MacSift/releases
- https://lcharvol.github.io/MacSift/
- https://raw.githubusercontent.com/Lcharvol/MacSift/main/README.md
- https://github.com/Lcharvol/MacSift/releases/tag/v0.5.0
- https://macpaw.com/cleanmymac
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/Lcharvol/MacSift/main/AppIcon.icns
  credit: Lucas Charvolin
  license: MIT repository asset; MacSift name and icon retained by the author
---

MacSift finds what is filling your disk and shows it to you before anything moves. You run a scan, look through the results, tick what you want gone, and the app sends those items to the Trash. Finder can put any of them back until you empty it.

Each file lands in one of eleven categories, each with a risk label of safe, review or caution:

- caches, logs and temporary files
- Xcode leftovers and developer caches from tools such as npm, pip, cargo and Homebrew
- support folders of apps no longer in `/Applications`, plus Mail attachments
- iOS device backups and local Time Machine snapshots
- large files in your home folder and downloads older than 90 days

Results are grouped by the app that owns them, so thousands of files inside one Safari cache folder become a single row. Clicking a row opens an inspector with the five largest files, Quick Look and Reveal in Finder.

New installs start in dry-run mode. Cleaning always passes through a preview and a confirmation, and selections above 10 GB bring an extra warning. The engine refuses to touch `/System`, `/usr`, `/bin` and `/sbin`, and every scan and cleanup is logged under `~/Library/Logs/MacSift`. The author states that the app makes no network requests and has no telemetry.

CleanMyMac also takes on malware and performance problems; MacSift sticks to finding space and moving it to the Trash. The app runs on Apple Silicon with macOS Sequoia or later and needs Full Disk Access. It is ad-hoc signed rather than notarized, so the first launch has to be approved in Privacy & Security, or you can install it with the author's Homebrew tap, which removes the quarantine flag.
