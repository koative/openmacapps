---
name: "ezNTFS"
summary: "Mounts external NTFS disks read-write through macFUSE and NTFS-3G, with auto mount per disk, verified copying and safe ejection."
category: "Utilities"
tags:
  - ntfs
  - file-system
  - external-drives
  - macfuse
  - windows
repository: "https://github.com/ixiehao/ezNTFS"
website: "https://ixiehao.github.io/ezNTFS/"
license: "MIT"
licenseUrl: "https://github.com/ixiehao/ezNTFS/blob/main/LICENSE"
download: "https://github.com/ixiehao/ezNTFS/releases/latest"
macos: "14"
arch: apple-silicon
notarized: false
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
icon: ./assets/icon.png
sources:
  - "https://github.com/ixiehao/ezNTFS"
  - "https://github.com/ixiehao/ezNTFS/blob/main/LICENSE"
  - "https://github.com/ixiehao/ezNTFS/releases/latest"
  - "https://github.com/ixiehao/ezNTFS/releases/tag/v0.5.0"
  - "https://github.com/ixiehao/ezNTFS/blob/main/docs/THIRD_PARTY.md"
  - "https://ixiehao.github.io/ezNTFS/"
screenshots:
  - src: ./assets/screenshot.png
    alt: "ezNTFS listing three external NTFS disks, one mounted read-write with Auto Mount on, with Mount Read-Write, Copy & Verify and Safely Eject buttons."
    source: https://github.com/ixiehao/ezNTFS/blob/85871df1a7631141381486995230be14e7faf55e/website/assets/ezntfs-en.png
    credit: ezNTFS contributors
assets:
  - path: ./assets/icon.png
    source: https://github.com/ixiehao/ezNTFS/blob/85871df1a7631141381486995230be14e7faf55e/Resources/Brand/AppIcon.svg
    credit: ezNTFS contributors
    license: MIT; upstream app icon rendered from SVG to PNG, trademarks retained
  - path: ./assets/screenshot.png
    source: https://github.com/ixiehao/ezNTFS/blob/85871df1a7631141381486995230be14e7faf55e/website/assets/ezntfs-en.png
    credit: ezNTFS contributors
    license: MIT
---

ezNTFS lets a Mac write to external disks formatted as NTFS, the Windows file system that macOS only reads. Each connected disk gets a card with its size, free space and state, and a button to mount it read-write. Turn on Auto Mount for a disk and it is mounted that way each time it is connected. The app stays in the menu bar when its window is closed.

Copy & Verify copies files and folders one at a time, then reads every copy back and checks its SHA-256 digest before the batch appears in a new folder. Safely Eject ejects the whole physical disk with all its volumes.

The work is done by NTFS-3G on top of macFUSE. It needs more setup than most apps:

- macFUSE 5.5.0 has to be installed first from its official installer
- the installer is an unsigned PKG that asks for an administrator password
- it adds a mount service that runs as root
- macOS starts that service only when the app asks to mount a disk

The service accepts requests only from the ezNTFS app and its command-line tool, and macOS may ask you to grant it raw disk access in Privacy & Security.

The app's code is under the MIT license; the bundled NTFS-3G driver is GPL-2.0 and ships with its source. The ntfsmac app, also in this catalog, mounts NTFS through a small Linux virtual machine instead of macFUSE.

It needs macOS 14 or later on Apple silicon. In version 0.5.0 the app is ad-hoc signed and the package is neither signed nor notarized; the release page lists SHA-256 checksums. The only network request is the update check against GitHub.
