---
name: AppPorts
summary: "Moves large apps and their data to an external drive while keeping launchers on your Mac."
category: Utilities
tags:
  - storage
  - external-drives
  - app-management
repository: https://github.com/wzh4869/AppPorts
website: https://appports.shimoko.com
license: Apache-2.0
licenseUrl: https://github.com/wzh4869/AppPorts/blob/main/LICENSE
download: https://github.com/wzh4869/AppPorts/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/wzh4869/AppPorts", "https://github.com/wzh4869/AppPorts/blob/main/LICENSE", "https://raw.githubusercontent.com/wzh4869/AppPorts/main/README.md", "https://appports.shimoko.com", "https://github.com/wzh4869/AppPorts/releases", "https://github.com/wzh4869/AppPorts/releases/tag/2.1.0"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/wzh4869/AppPorts/blob/b8e150a3e25f43db222faed920b57421b6169752/User_docs/docs/public/logo.png
    credit: AppPorts contributors
    license: Apache-2.0; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/wzh4869/AppPorts/blob/b8e150a3e25f43db222faed920b57421b6169752/assets/screenshots/en/appports-main.png
    credit: AppPorts contributors
    license: Apache-2.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: AppPorts interface showing applications and migration controls for external storage.
    source: https://github.com/wzh4869/AppPorts/blob/b8e150a3e25f43db222faed920b57421b6169752/assets/screenshots/en/appports-main.png
    credit: AppPorts contributors
icon: ./assets/icon.png
---

AppPorts frees space on the internal disk by moving apps and their data to an external drive. Choose an external app library, quit the app you want to move, and migrate it; a small launcher with the usual icon stays behind, so Finder and the Dock still open it.

The method depends on what is being moved:

- Ordinary Mac apps get a lightweight local launcher, while the full app lives on the drive.
- Apps that update themselves through Sparkle or Electron can be locked on the drive, and you unlock them before updating.
- On macOS 15.1 and later, App Store apps use the system's own support for installing on external storage.
- App containers, such as WeChat history, are mounted from an unencrypted external APFS volume at their original path, so their signatures stay intact.
- Other data and tool folders such as `~/.npm` are replaced by symbolic links.

System apps cannot be moved, and running apps have to be quit first. Apps and data can be moved back once the drive is connected and the Mac has room.

AppPorts needs macOS 12 or later on Apple silicon or Intel, and the 2.1.0 disk image is not notarized. The drive has to stay connected while you use migrated apps, and a stable external SSD is recommended. Readiness checks walk you through Full Disk Access. Back up important data first.

Upgrading to macOS 27 needs one step beforehand. Install the latest AppPorts and open it once, so it can update its background re-signing script; on macOS 27 that login re-signing is switched off and old tasks are cleaned up.
