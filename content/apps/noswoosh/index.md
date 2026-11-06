---
name: "noswoosh"
summary: "Removes the slide animation when switching macOS Spaces, triggered by a three-finger swipe or Ctrl+arrow keys."
category: "Utilities"
tags:
  - spaces
  - animation
  - window-management
  - accessibility
repository: "https://github.com/mmathys/noswoosh"
website: "https://github.com/mmathys/noswoosh"
license: "MIT"
licenseUrl: "https://github.com/mmathys/noswoosh/blob/main/LICENSE"
download: "https://github.com/mmathys/noswoosh/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mmathys/noswoosh"
  - "https://github.com/mmathys/noswoosh/blob/main/LICENSE"
  - "https://github.com/mmathys/noswoosh/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/mmathys/noswoosh/main/assets/icon-rounded.png"
    credit: "Max Mathys"
    license: "MIT; upstream app icon, trademarks retained"
---

noswoosh switches between macOS Spaces without the sliding animation. A three-finger horizontal swipe or Ctrl+Left and Ctrl+Right then changes Space instantly, and the README says it does this without disabling System Integrity Protection or the global Reduce Motion setting. It runs as a small login daemon, and it needs Accessibility permission because macOS only accepts its synthetic events after that is granted. It can be installed from Homebrew or built from source with the Xcode Command Line Tools.

It works on macOS 26.6 and later, including macOS 27; the README says macOS 26.0 to 26.5 are not supported because of a window-server bug that Apple fixed in 26.6. It relies on private, reverse-engineered interfaces, so a future macOS release can stop the switching until the project adapts it. The release build is notarized by Apple. Spaces may also switch in an unexpected order unless "Automatically rearrange Spaces based on most recent use" is turned off in Desktop & Dock.
