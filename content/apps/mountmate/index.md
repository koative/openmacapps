---
name: MountMate
summary: "Mounts and unmounts external drives and reconnects network shares from the menu bar."
category: Utilities
tags:
  - external-drives
  - menu-bar
  - network-shares
repository: https://github.com/homielab/mountmate
website: https://homielab.com/en/page/mountmate
license: MIT
licenseUrl: https://github.com/homielab/mountmate/blob/main/LICENSE
download: https://github.com/homielab/mountmate/releases
freeDownload: true
homebrew: "mountmate"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/homielab/mountmate", "https://github.com/homielab/mountmate/blob/main/LICENSE", "https://github.com/homielab/mountmate/blob/main/README.md", "https://github.com/homielab/mountmate/releases", "https://github.com/homielab/mountmate/releases/tag/v6.5", "https://homielab.com/en/page/mountmate"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/homielab/mountmate/blob/6226176fb10f1b76082460d8a8a4fb4b406c72b1/docs/assets/icon.png
    credit: MountMate contributors
    license: MIT; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/homielab/mountmate/blob/6226176fb10f1b76082460d8a8a4fb4b406c72b1/docs/screenshots/dark.png
    credit: MountMate contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: MountMate menu listing external volumes and their mounting controls.
    source: https://github.com/homielab/mountmate/blob/6226176fb10f1b76082460d8a8a4fb4b406c72b1/docs/screenshots/dark.png
    credit: MountMate contributors
icon: ./assets/icon.png
---

MountMate lists your external drives in a menu bar popover and mounts, unmounts or force-ejects each one with a click. It was built for a spinning backup disk that macOS keeps waking: unmount it, and it stays quiet until you mount it again from the menu, with no Disk Utility or Terminal.

- Disks can unmount before the Mac sleeps or when the screen locks, and mount again on wake. A per-volume idle timer unmounts a drive after 1 to 60 minutes without reads or writes.
- Selected USB disks can be blocked from mounting at plug-in or login, and optionally at startup through an /etc/fstab rule, which asks for your admin password.
- SMB and NFS shares mount at login, and Keep Alive reconnects shares and volumes that drop.
- Encrypted APFS volumes unlock from the popover, with the password kept in the Keychain if you choose.
- A volume can mount read-only, to protect a backup or inspect a damaged drive.
- Thirteen Shortcuts actions, along with global keyboard shortcuts for Mount All and Unmount All, put the same controls in automations.

Each row shows free space, with an orange warning when a volume passes a fill level you set and a red triangle when the disk's SMART status reports failing. You can hide, protect or pin volumes, and Apple RAID sets appear as one disk.

The developer says MountMate does not track you or read your files, and goes online only to check for updates through Sparkle. MountMate needs macOS 13 or later. Version 6.5 comes as a DMG or ZIP, and the DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized.
