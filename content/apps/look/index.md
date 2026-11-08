---
name: "look"
summary: "A keyboard-first launcher for apps, files, folders, clipboard history and quick commands, with a local index."
category: "Productivity"
tags:
  - launcher
  - search
  - keyboard
  - clipboard
  - cross-platform
alternativeTo:
  - alfred
  - raycast
repository: https://github.com/kunkka19xx/look
website: https://noah-code.com/docs/look
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/kunkka19xx/look/blob/main/LICENSE
download: https://github.com/kunkka19xx/look/releases
freeDownload: true
homebrew: "look"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/kunkka19xx/look
  - https://github.com/kunkka19xx/look/blob/main/LICENSE
  - https://github.com/kunkka19xx/look/releases
  - https://formulae.brew.sh/cask/look
  - https://github.com/kunkka19xx/look/blob/main/README.md
  - https://github.com/kunkka19xx/look/releases/tag/v0.7.4
  - https://www.alfredapp.com/powerpack/
  - https://www.raycast.com/pricing
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/kunkka19xx/look/main/apps/macos/LauncherApp/look-app/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "kunkka19xx and look contributors"
    license: "GPL-3.0-or-later repository asset; trademarks retained"
---

look is a launcher you summon from the keyboard. Type into its search field to open apps, files and folders, pull something back from clipboard history or run a quick command, then press Return. The README suggests giving it Command-Space after turning off Spotlight's shortcut, or choosing another hotkey in `~/.look/config`.

- Command-F reveals the selected item in Finder, Command-E opens it in your editor and Command-T opens a terminal there.
- Command-K shows an action menu for the selected row, and Command-D moves a file to the Trash.
- Command-/ switches to command mode, where built-in commands such as `calc`, `pomo`, `todo`, `kill` and `shell` run.
- Clipboard history keeps text and images.
- You can add your own result rows from directories, files and commands.

On the Mac the window is a SwiftUI app over a Rust search core, with no browser engine and no background daemons. According to the developer, your search index, clipboard and history are kept locally and nothing is sent as telemetry. Themes include Catppuccin, Tokyo Night, Gruvbox, Dracula and a light Kindle preset.

Version 0.7.4 requires macOS 15 or later. It ships as two ZIPs, one for Apple silicon and one for Intel, and both are Developer ID-signed and notarized. The Homebrew cask picks the right build for your processor. The same project also builds versions for Windows and Linux.

Alfred keeps its workflows in the paid Powerpack, and Raycast offers a free personal plan alongside a paid Pro plan and a community extension store. look has no paid tier and no extension store.
