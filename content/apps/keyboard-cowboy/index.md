---
name: Keyboard Cowboy
summary: Creates keyboard workflows and context-sensitive automation for your Mac.
category: Productivity
tags:
  - automation
  - keyboard-shortcuts
  - workflows
alternativeTo:
  - keyboard-maestro
  - autohotkey
repository: https://github.com/zenangst/KeyboardCowboy
website: https://github.com/zenangst/KeyboardCowboy
license: MIT
licenseUrl: https://github.com/zenangst/KeyboardCowboy/blob/main/LICENSE.md
download: https://github.com/zenangst/KeyboardCowboy/releases
freeDownload: true
homebrew: "keyboard-cowboy"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/zenangst/KeyboardCowboy
  - https://github.com/zenangst/KeyboardCowboy/blob/main/LICENSE.md
  - https://github.com/zenangst/KeyboardCowboy/blob/main/README.md
  - https://github.com/zenangst/KeyboardCowboy/releases
  - https://github.com/zenangst/KeyboardCowboy/releases/tag/3.28.4
  - https://github.com/zenangst/KeyboardCowboy/wiki/Triggers
  - https://github.com/zenangst/KeyboardCowboy/wiki/Workflows
  - https://github.com/zenangst/KeyboardCowboy/wiki/Commands
  - https://www.keyboardmaestro.com/main/
  - https://wiki.keyboardmaestro.com/manual/Features
assets:
  - path: ./assets/icon.png
    source: https://github.com/zenangst/KeyboardCowboy/blob/851ee081da4eb55359d75bc3009256bf8afb8074/App/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Keyboard Cowboy contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Keyboard Cowboy runs workflows, sequences of commands started by a keyboard shortcut, a typed snippet, or an app launching, quitting or coming to the front. One workflow can open an app and then a file in it, choose a menu bar item, type text, run a script or a Shortcut, and switch windows or, on macOS Sequoia, tile them.

Commands in a workflow run one after another, with an optional delay between them, or all at once. Workflows live in groups, and you drag them to change their order.

Shortcut triggers have several options:

- A trigger can be a single keystroke or a sequence of keys.
- A leader key works like Vim's: press it, then type the rest of the sequence within a short timeout. If nothing matches, the leader key reaches the app as normal typing.
- Hold for X seconds runs the workflow only after you keep the shortcut down, which guards against accidents.
- Passthrough lets the keystroke continue to the system after the workflow fires, and Allow Repeat repeats the command while the key is held.

Keyboard Cowboy stops listening while you type in a password field or another secure input mode. The developer says it collects no personal data and keeps everything on the Mac.

Version 3.28.4 needs macOS 13 or later. Its DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.

Keyboard Maestro also starts macros from hotkeys, app events and schedules, with hundreds of built-in actions including flow control and loops, and it is sold as a one-time purchase. Keyboard Cowboy builds its triggers around the keyboard, with leader keys and key sequences, and its source is MIT-licensed.
