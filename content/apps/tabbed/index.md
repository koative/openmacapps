---
name: "Tabbed"
summary: "Turns any Mac window into a tab; hold Command while dragging windows to group them."
category: "Productivity"
tags:
  - window-management
  - tabs
  - keyboard
repository: "https://github.com/ZimengXiong/tabbed"
website: "https://github.com/ZimengXiong/tabbed"
license: "MIT"
licenseUrl: "https://github.com/ZimengXiong/tabbed/blob/main/LICENSE"
download: "https://github.com/ZimengXiong/tabbed/releases/download/v0.1.2/Tabbed.app.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
sources:
  - "https://github.com/ZimengXiong/tabbed/blob/main/README.md"
  - "https://github.com/ZimengXiong/tabbed/releases/tag/v0.1.1"
  - "https://github.com/ZimengXiong/tabbed"
  - "https://github.com/ZimengXiong/tabbed/blob/main/LICENSE"
  - "https://github.com/ZimengXiong/tabbed/releases/tag/v0.1.2"
---

Hold Command while you drag windows, and Tabbed collects them into a tab group. Any window can become a tab this way.

Tabbed needs the Accessibility permission. Grant it on first launch under Privacy & Security in System Settings. The build is for Apple silicon only (arm64), declares macOS 14 or later, and is released under the MIT license.

The app installs from the developer's Homebrew tap (`ZimengXiong/tools`) or as a ZIP from GitHub. The README's Homebrew steps finish by running `xattr -dr com.apple.quarantine` on the installed app. Gatekeeper rejects the 0.1.2 build, because its signing certificate has been revoked.

Keyboard control came in 0.1.2. Option plus a number jumps to that tab, Option-Tab cycles forward and Option-Shift-Tab cycles back. The bindings live in `~/.config/tabbed.toml`, which Tabbed creates on first launch, and other bindings can be set there too.
