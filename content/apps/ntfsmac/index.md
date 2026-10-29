---
name: "ntfsmac"
summary: "A menu-bar app that mounts NTFS and ext4 drives read/write on Apple silicon Macs through a small Linux virtual machine."
category: "Utilities"
tags:
  - ntfs
  - file-system
  - menu-bar
  - apple-silicon
  - external-drives
repository: https://github.com/khr898/ntfsmac
website: https://github.com/khr898/ntfsmac
license: "MIT"
licenseUrl: https://github.com/khr898/ntfsmac/blob/main/LICENSE
download: https://github.com/khr898/ntfsmac/releases
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/khr898/ntfsmac
  - https://github.com/khr898/ntfsmac/blob/main/LICENSE
  - https://github.com/khr898/ntfsmac/blob/main/THIRD_PARTY_LICENSES.md
  - https://github.com/khr898/ntfsmac/blob/main/SECURITY.md
  - https://github.com/khr898/ntfsmac/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/khr898/ntfsmac/blob/main/gui/Resources/AppIcon.icns
    credit: "ntfsmac contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

ntfsmac gives Apple silicon Macs write access to NTFS drives without a kernel extension or any change to System Integrity Protection, and without using FSKit. It wraps the anylinuxfs project: a small libkrun Linux virtual machine opens the drive with ntfs-3g (or the kernel ntfs3 driver) and shares it back to macOS over NFS on a private network bridge. The same path mounts ext2, ext3 and ext4 partitions and can unlock BitLocker volumes with a password or recovery key.

The menu-bar app lists connected drives and mounts them with a colour-coded status icon, and a command-line tool covers the same tasks. A privileged helper performs mounts and adjusts packet-filter rules and routes for each session, and Full Disk Access is needed. The project is maintained by one person, its builds are ad-hoc signed rather than notarized, it requires macOS 13 or later on Apple silicon, and its README describes the GUI as still being built out. Its own code is MIT-licensed, while the runtime it relies on, including anylinuxfs, the Linux kernel and ntfs-3g, carries GPL licenses.
