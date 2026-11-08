---
name: "TopOff"
summary: "Checks for outdated Homebrew packages in the background and updates them from the menu bar."
category: "Developer tools"
tags:
  - homebrew
  - updates
  - package-manager
  - menu-bar
repository: "https://github.com/ihazgithub/TopOff"
website: "https://github.com/ihazgithub/TopOff"
license: "MIT"
licenseUrl: "https://github.com/ihazgithub/TopOff/blob/main/LICENSE"
download: "https://github.com/ihazgithub/TopOff/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/ihazgithub/TopOff"
  - "https://github.com/ihazgithub/TopOff/blob/main/LICENSE"
  - "https://github.com/ihazgithub/TopOff/releases"
  - "https://raw.githubusercontent.com/ihazgithub/TopOff/main/README.md"
  - "https://github.com/ihazgithub/TopOff/releases/tag/v2.2"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/ihazgithub/TopOff/main/TopOff/TopOff/Assets.xcassets/AppIcon.appiconset/icon_256x256.png"
    credit: "Thomas Haslam"
    license: "MIT; upstream app icon, trademarks retained"
---

TopOff checks Homebrew for outdated packages on a schedule and shows the result as a mug in the menu bar, full when everything is current and half full when updates wait. Open the menu to see what is outdated. From there you can update everything or update and skip single packages. With more than five, a Show All item opens a window listing each package with its version change.

Update All runs `brew update` and `brew upgrade`. Homebrew normally skips casks that update themselves, such as Chrome or Slack. Update All (Greedy) adds `brew upgrade --greedy` to catch them, and Greedy Mode in Options makes the scheduled checks greedy too.

- Checks run every hour, every 4, 12 or 24 hours, or only when you ask. Four hours is the default.
- During an update the icon animates, and the menu shows which package is being upgraded.
- If a cask needs administrator rights, TopOff asks for your password and tries again.
- After upgrades it runs `brew cleanup`. You can switch automatic cleanup to `brew cleanup --prune=all`, which also deletes Homebrew's cached downloads.
- A notification can announce the end of a run, and the menu then lists the upgraded packages and the disk space recovered.

TopOff needs Homebrew and macOS 14 or later. The DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. TopOff updates itself through Sparkle. The developer says those update checks to GitHub are its only connections and that it has no analytics; anything else a firewall shows during an upgrade comes from Homebrew.
