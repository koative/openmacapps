---
name: "ClearDisk"
summary: "Finds developer caches from the menu bar and moves the ones you pick to the Trash."
category: "Developer tools"
tags:
  - cleanup
  - storage
  - menu-bar
  - development
  - disk-cleaner
repository: https://github.com/bysiber/cleardisk
website: https://bysiber.github.io/cleardisk/
license: "MIT"
licenseUrl: https://github.com/bysiber/cleardisk/blob/main/LICENSE
download: https://github.com/bysiber/cleardisk/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/bysiber/cleardisk
  - https://github.com/bysiber/cleardisk/blob/main/LICENSE
  - https://github.com/bysiber/cleardisk/releases
  - https://raw.githubusercontent.com/bysiber/cleardisk/main/README.md
  - https://github.com/bysiber/cleardisk/releases/tag/v2.3.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/bysiber/cleardisk/main/Resources/AppIcon.png
    credit: "Kadir Can Ozden and ClearDisk contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

ClearDisk sits in the menu bar showing how full your disk is, and it measures the caches that build tools and package managers leave behind. Open it to see Xcode DerivedData, simulators, npm, Homebrew, pip, Cargo, Gradle, Docker and dozens of other known locations with their sizes, then pick what to clean.

- Every cache carries a one-line explanation of what it holds and what happens after removal.
- A risk label marks each entry as safe to rebuild, costly to re-download, or possibly holding data you cannot get back. Docker's container data is in the last group.
- A project scanner looks through your code folders for stale build output such as `node_modules`, `.next` and other per-project artifacts.
- DerivedData is broken down by project, and the app warns you when Xcode is running before it touches Xcode caches.

Cleaning moves items to the Trash, so they can be restored until you empty it, and the app counts reclaimed space separately from space merely sent to the Trash. The menu bar icon changes color at 80 and 90 percent usage, with a notification at each step, and a forecast estimates when the disk will fill from its recent history.

ClearDisk needs macOS 14 or later. The DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and updates arrive through Sparkle. A Homebrew cask is available from the developer's own tap.

Cache cleanup checks only ClearDisk's list of known locations and does not index the whole disk. The developer says its only network traffic is the update check against GitHub Releases, with no analytics.
