---
name: "ExtendFS"
summary: "A read-only driver that mounts Linux ext2, ext3 and ext4 drives on a Mac through FSKit."
category: "Utilities"
tags:
  - external-drives
  - files
  - linux
repository: https://github.com/kthchew/ExtendFS
website: https://apps.kpchew.com/extendfs/
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/kthchew/ExtendFS/blob/main/LICENSE.md
download: https://github.com/kthchew/ExtendFS/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/kthchew/ExtendFS
  - https://github.com/kthchew/ExtendFS/blob/main/LICENSE.md
  - https://github.com/kthchew/ExtendFS/releases
  - https://github.com/kthchew/ExtendFS/blob/main/COPYING
  - https://apps.apple.com/us/app/extendfs-for-linux-filesystems/id6755664332
  - https://apps.kpchew.com/extendfs/
  - https://github.com/kthchew/ExtendFS/releases/tag/v1.2.2
assets:
  - path: ./assets/icon.png
    source: https://github.com/kthchew/ExtendFS/releases/download/v1.2.1/ExtendFS.app.zip
    credit: "Kenneth Chew"
    license: "GPL-3.0-or-later; official app icon extracted unmodified from the upstream release build, trademarks retained"
---

ExtendFS lets your Mac read drives and disk images formatted with the Linux ext2, ext3 and ext4 file systems. Typical candidates are an external disk or USB stick from a Linux PC, a Raspberry Pi's SD card, storage from a Steam Deck or a hard drive taken out of a NAS.

Setup takes two steps. Open the app once, then switch on its file system extension in System Settings. After that, a supported volume mounts by itself when you plug in the drive or open the image, and it appears in the Finder. If you prefer the terminal, the standard mount command works with it too.

The driver is built on FSKit, Apple's framework for file systems that run in user space. So there is no kernel extension, no FUSE layer such as macFUSE, and no trip to recovery mode to lower security settings. The developer says the driver is sandboxed and can reach only the disk it mounts.

It cannot write to these volumes. Some ext4 features are not supported, among them compression, encryption and meta block groups, and LVM volumes are not supported either. Drives formatted as Btrfs or other Linux file systems won't mount.

ExtendFS needs macOS 15.6 or later. The GitHub release is a ZIP holding a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. A paid Mac App Store version exists with the same features. The code is GPL version 3 or later, with an added permission for distribution through app stores.
