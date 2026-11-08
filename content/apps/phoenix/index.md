---
name: "Phoenix"
summary: "A lightweight window and app manager you script in JavaScript to bind keys and react to events."
category: "Utilities"
tags:
  - window-management
  - scripting
  - keyboard-shortcuts
  - automation
  - window-manager
repository: https://github.com/kasper/phoenix
website: https://kasper.github.io/phoenix/
license: "MIT"
licenseUrl: https://github.com/kasper/phoenix/blob/master/LICENSE.md
download: https://github.com/kasper/phoenix/releases
freeDownload: true
homebrew: "phoenix"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/kasper/phoenix
  - https://github.com/kasper/phoenix/blob/master/LICENSE.md
  - https://github.com/kasper/phoenix/releases
  - https://formulae.brew.sh/cask/phoenix
  - "https://raw.githubusercontent.com/kasper/phoenix/master/README.md"
  - "https://github.com/kasper/phoenix/releases/tag/4.0.1"
  - "https://kasper.github.io/phoenix/"
  - "https://kasper.github.io/phoenix/api/events"
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/kasper/phoenix/master/Phoenix/Images.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "Parakeet for Kasper Hirvikoski"
    license: "Licensed by Parakeet to Kasper Hirvikoski for Phoenix only; not covered by the MIT code license"
---

Phoenix lets you build your own window and app manager by writing JavaScript. It reads a script from `~/.phoenix.js`, created on first launch, and runs it from the status bar or as a background process. TypeScript and other languages that compile to JavaScript work too.

In that script you attach your own functions to hotkeys and to system events, and those functions can act on the following.

- Windows, apps, screens and spaces, including moving windows between spaces.
- The mouse pointer.
- Logged messages, notifications, and modals that display content or ask for input.
- External commands, run as you would from a terminal.

On first run, macOS asks you to allow Phoenix under Accessibility in Privacy & Security, which needs an admin account. Version 4.0.1 fixed moving windows between spaces on macOS Sonoma 14.5 and later. Phoenix requires macOS 10.14 or later, and the 4.0.1 download is a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. Homebrew users can install the `phoenix` cask instead.

A tiling layout, a set of hotkeys that throw windows to fixed positions or a rule that runs when an app launches are all things you write yourself. The project wiki collects configurations other users have shared, which is a practical starting point. If you prefer, the script can sit in a Phoenix folder under Application Support or `~/.config` instead.
