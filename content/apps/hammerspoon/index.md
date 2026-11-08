---
name: Hammerspoon
summary: Automate windows, shortcuts, and desktop behavior with Lua scripts.
category: Productivity
tags:
  - automation
  - scripting
  - keyboard-shortcuts
alternativeTo:
  - keyboard-maestro
  - autohotkey
repository: https://github.com/Hammerspoon/hammerspoon
website: https://www.hammerspoon.org/
license: MIT
licenseUrl: https://github.com/Hammerspoon/hammerspoon/blob/master/LICENSE
download: https://github.com/Hammerspoon/hammerspoon/releases
freeDownload: true
homebrew: "hammerspoon"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/Hammerspoon/hammerspoon
  - https://github.com/Hammerspoon/hammerspoon/blob/master/LICENSE
  - https://github.com/Hammerspoon/hammerspoon/blob/master/README.md
  - https://github.com/Hammerspoon/hammerspoon/releases
  - https://www.hammerspoon.org/go/
  - https://github.com/Hammerspoon/hammerspoon/releases/tag/1.1.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/Hammerspoon/hammerspoon/blob/23e387e2805a9890066366e0ac96c71b27f0cfd5/Hammerspoon/Images.xcassets/AppIcon.appiconset/256.png
    credit: Hammerspoon contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Hammerspoon runs Lua scripts that control macOS. Out of the box it does nothing: you write a configuration in ~/.hammerspoon/init.lua, opened from its menu bar icon, that ties events to actions. A hotkey can move and resize a set of windows, and a function can run when the Mac joins a particular Wi-Fi network. An alert can appear when the battery runs low.

Its extensions reach applications, windows, the mouse pointer, files, audio devices, the battery, displays, low-level keyboard and mouse events, the clipboard, location services and Wi-Fi. Scripts can also run AppleScript. Spoons are ready-made Lua plugins you add to a configuration, and the project site has a getting-started guide and a full API reference.

Keyboard Maestro handles similar automation with macros assembled from actions in its editor. Hammerspoon has no editor of its own, so every behaviour is code you write or adapt from shared examples. AutoHotkey fills the same scripting role on Windows. Hammerspoon is free under the MIT license and needs no account.

Hammerspoon 1.1.1 requires macOS 13 or later. The download is a universal zip for Apple silicon and Intel, signed with a Developer ID and notarized by Apple. On first launch it asks for Accessibility access. The project's release notes list older versions for Macs running earlier systems.
