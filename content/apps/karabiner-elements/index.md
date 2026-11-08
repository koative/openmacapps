---
name: Karabiner-Elements
summary: Remap keys and build complex keyboard rules for macOS.
category: Utilities
tags:
  - keyboard
  - remapping
  - automation
  - keyboard-customization
alternativeTo:
  - autohotkey
repository: https://github.com/pqrs-org/Karabiner-Elements
website: https://karabiner-elements.pqrs.org/
license: Unlicense
licenseUrl: https://github.com/pqrs-org/Karabiner-Elements/blob/main/LICENSE.md
download: https://github.com/pqrs-org/Karabiner-Elements/releases
freeDownload: true
homebrew: "karabiner-elements"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/pqrs-org/Karabiner-Elements
  - https://github.com/pqrs-org/Karabiner-Elements/blob/main/LICENSE.md
  - https://github.com/pqrs-org/Karabiner-Elements/blob/main/README.md
  - https://github.com/pqrs-org/Karabiner-Elements/releases
  - https://karabiner-elements.pqrs.org/docs/privacy/
  - https://karabiner-elements.pqrs.org/docs/manual/misc/required-macos-settings/
  - https://karabiner-elements.pqrs.org/docs/pricing/
assets:
  - path: ./assets/icon.png
    source: https://github.com/pqrs-org/Karabiner-Elements/blob/7d32eb20ee5e93d842966375e7f8761e21baceaa/files/icons/v13/KarabinerElements/exported/KarabinerElements.png
    credit: Karabiner-Elements contributors
    license: Unlicense; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Karabiner-Elements catches keyboard input before macOS acts on it and rewrites it by your rules. Simple modifications, set in its Settings window, swap one key for another, such as Caps Lock for Control. Complex modifications cover key combinations and conditions, including rules that change with the app in front.

Complex rules are written in JSON. You can write your own or import ready-made sets from a community library. It includes Emacs and Vi key bindings, a diamond cursor, mouse keys and a guard against pressing Command-Q by accident. EventViewer, bundled with the app, shows what each key press sends. AutoHotkey does this kind of remapping on Windows with a scripting language. Karabiner-Elements runs only on macOS, and its rules declare what a key should do rather than run as scripts, although a rule can call a shell command.

Version 16 supports macOS 13 Ventura and later on both Apple silicon and Intel; for macOS 27 the project lists Apple silicon Macs only. Older installers for systems back to OS X 10.9 stay on the official site. The download is a disk image holding an installer package signed with a Developer ID and notarized by Apple. Setup asks you to approve a driver extension, which supplies a virtual keyboard and mouse, to grant Accessibility permission and to keep its background items enabled.

The developer says keystrokes and settings are processed on the Mac and never sent out. Update checks send the app version to the developer's server, which logs the IP address and time like any web request, and automatic checks can be turned off. The app is free; donations are optional.
