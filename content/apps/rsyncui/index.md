---
name: RsyncUI
summary: Saves rsync jobs as reusable tasks with dry-run estimates, snapshots, schedules and SSH key setup.
category: Utilities
tags:
  - backup
  - sync
  - files
repository: https://github.com/rsyncOSX/RsyncUI
website: https://rsyncui.netlify.app/docs/
license: MIT
licenseUrl: https://github.com/rsyncOSX/RsyncUI/blob/main/Licence.MD
download: https://github.com/rsyncOSX/RsyncUI/releases
freeDownload: true
homebrew: "rsyncui"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/rsyncOSX/RsyncUI
  - https://github.com/rsyncOSX/RsyncUI/blob/main/Licence.MD
  - https://github.com/rsyncOSX/RsyncUI/blob/main/README.md
  - https://github.com/rsyncOSX/RsyncUI/releases
  - https://raw.githubusercontent.com/rsyncOSX/RsyncUI/main/README.md
  - https://rsyncui.netlify.app/docs/getting-started/important/
  - https://rsyncui.netlify.app/docs/core-features/snapshots/
  - https://rsyncui.netlify.app/docs/core-features/schedule/
  - https://github.com/rsyncOSX/RsyncUI/releases/tag/v3.1.0
  - https://rsyncui.netlify.app/docs/core-features/restore/
  - https://rsyncui.netlify.app/docs/core-features/profiles/
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://github.com/rsyncOSX/RsyncUI/tree/ad7fff9dd50a0bf7370812c4f0f1e4e461d9453b/RsyncUIicon.icon
    credit: RsyncUI contributors
    license: MIT; upstream project asset, trademarks retained
  - path: ./assets/screenshot.png
    source: https://github.com/rsyncOSX/RsyncUI/blob/ad7fff9dd50a0bf7370812c4f0f1e4e461d9453b/images/rsyncui.png
    credit: RsyncUI contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: RsyncUI main application window for managing synchronization tasks.
    source: https://github.com/rsyncOSX/RsyncUI/blob/ad7fff9dd50a0bf7370812c4f0f1e4e461d9453b/images/rsyncui.png
    credit: RsyncUI contributors
---

RsyncUI saves each rsync job as a task with its source, destination and parameters, then runs it from a list when you need it. You choose options in the app and it builds the rsync and SSH arguments, so a repeat sync takes a click.

- A dry run estimates each task first and reports how many files would be copied, created or deleted, and how much data would move.
- Snapshot tasks use rsync's `--link-dest`, so each run stores only changed and deleted files and hard-links the rest. They need rsync 3.x.
- Profiles keep separate sets of tasks, and tasks not run within a set number of days turn red.
- The SSH settings create keys for passwordless login to remote servers.
- Restore pulls files back from a remote server, with a dry-run preview first. Local disks are left to Finder.

Rsync does the actual copying, and RsyncUI will not stop a bad parameter. New tasks leave `--delete` off, so the destination keeps files you removed from the source until you turn it on. With `--delete` on and an empty source, rsync deletes everything at the destination, which is why the documentation asks for a dry run of every new task. Progress updates misbehave with the openrsync that ships in `/usr/bin`, and the project suggests installing a current rsync.

Schedules run only while RsyncUI is open. Tasks missed while the Mac sleeps appear in the Schedule view and do not run on their own, and the app makes no disk images.

RsyncUI needs macOS 14 Sonoma or later. Releases come as a Universal DMG and an Apple silicon DMG, and the app inside is signed with a Developer ID and notarized.
