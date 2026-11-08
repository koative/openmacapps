---
name: "Mac Sai"
summary: "An all-in-one cleanup and maintenance app covering junk files, large files, app removal and startup items."
category: "Utilities"
tags: ["cleanup", "storage", "maintenance", "uninstaller", "disk-cleaner"]
alternativeTo: ["cleanmymac", "appcleaner", "ccleaner"]
repository: "https://github.com/iliyami/MacSai"
website: "https://github.com/iliyami/MacSai"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/iliyami/MacSai/blob/main/LICENSE"
download: "https://github.com/iliyami/MacSai/releases"
freeDownload: true
homebrew: "mac-sai"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/iliyami/MacSai", "https://github.com/iliyami/MacSai/blob/main/LICENSE", "https://github.com/iliyami/MacSai/releases", "https://raw.githubusercontent.com/iliyami/MacSai/main/README.md", "https://github.com/iliyami/MacSai/releases/tag/v1.28.0", "https://macpaw.com/cleanmymac"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/iliyami/MacSai/main/Resources/AppIcon.icns", "credit": "Mac Sai contributors", "license": "BSD-3-Clause repository asset; trademarks retained"}]
---

Mac Sai scans your Mac for caches, logs, leftover app files and other space you can reclaim, lists what it found by module, and moves your selection to the Trash. A one-click Smart Scan runs the cleanup, protection and performance modules together and reports what each one freed.

- System Junk covers more than 16 categories, from user caches and iOS backups to Xcode leftovers, and can strip the unneeded architecture from Universal binaries.
- Project Junk finds rebuildable folders such as `node_modules`, Rust `target` and Python virtualenvs, counting one only when neighbouring files confirm the project type.
- The uninstaller removes an app along with its support files, or resets its preferences and caches while keeping the app.
- Space Lens draws disk usage as a treemap, and the duplicate finder can reclaim space from copies with APFS clones while keeping every copy.

Removals go to the Trash by default, and Clean History can put a whole clean back. System paths such as `/System` and `/usr` are blocked. The malware module matches files against Apple's XProtect signatures already on the Mac and flags known adware patterns, and the project states plainly that it is not an antivirus. Mail Attachments, Privacy and Malware need Full Disk Access. The developer says the app has no telemetry.

CleanMyMac gathers the same kinds of tools into a commercial app from MacPaw, bought after a free trial. Mac Sai has no paid tier and publishes its source under the BSD 3-Clause license. The DMG holds a Universal app for macOS 14 or later, Developer ID-signed and notarized.
