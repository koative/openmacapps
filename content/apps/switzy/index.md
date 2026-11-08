---
name: Switzy
summary: Switches the active Git identity and its SSH key from the menu bar, for example between work and personal accounts.
category: Developer tools
tags:
- git
- ssh
- menu-bar
repository: https://github.com/yefga/Switzy
website: https://github.com/yefga/Switzy
license: MIT
licenseUrl: https://github.com/yefga/Switzy/blob/main/LICENSE
download: https://github.com/yefga/Switzy/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/yefga/Switzy
- https://github.com/yefga/Switzy/blob/main/LICENSE
- https://github.com/yefga/Switzy/releases
- https://raw.githubusercontent.com/yefga/Switzy/main/README.md
- https://raw.githubusercontent.com/yefga/Switzy/main/macOS/README.md
- https://github.com/yefga/Switzy/releases/tag/v1.4.0
- https://github.com/yefga/Switzy/releases/tag/v1.0.1
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/yefga/Switzy/main/macOS/Resources/Assets.xcassets/AppIcon.appiconset/1024.png
  credit: Yefga
  license: MIT-licensed repository asset; no separate icon terms stated
---

Switzy keeps one Git profile per identity, each with a user name, email address, SSH key and optional signing key, and lets you change the active one from the menu bar. Picking a profile rewrites your global Git configuration, so the next commit and push go out under the right account.

The SSH side is handled too. Switzy can generate, import and delete keys, adds the active profile's key to ssh-agent and removes the previous one when you switch. Since version 1.4.0, pushes are pinned to the profile's own key, so a key loaded for another account cannot be picked up by mistake, and commit signing turns on whenever a profile has a signing key.

Version 1.4.0 also added folder rules. You assign a directory to a profile, and every repository beneath it uses that identity through Git's own `includeIf` setting. Those rules keep working in Terminal, Sourcetree or an IDE even when Switzy is not running, and the menu bar profile covers every repository outside them.

The 1.4.0 disk image holds a Universal app for Apple silicon and Intel that needs macOS 13 or later; both the image and the app are notarized. Switzy updates itself through Sparkle and is also available from the developer's Homebrew tap. Linux and Windows versions are planned, with no builds yet.
