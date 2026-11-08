---
name: betterglobekey
summary: Reworks the Globe key to cycle through groups of input sources, with an optional settings app.
category: Utilities
tags:
- keyboard
- input
- languages
- remapping
- keyboard-customization
repository: https://github.com/Serpentiel/betterglobekey
website: https://github.com/Serpentiel/betterglobekey
license: MIT
licenseUrl: https://github.com/Serpentiel/betterglobekey/blob/main/LICENSE.md
download: https://github.com/Serpentiel/betterglobekey/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/Serpentiel/betterglobekey
- https://github.com/Serpentiel/betterglobekey/blob/main/LICENSE.md
- https://github.com/Serpentiel/betterglobekey/releases
- https://formulae.brew.sh/formula/betterglobekey
- https://raw.githubusercontent.com/Serpentiel/betterglobekey/main/README.md
- https://github.com/Serpentiel/betterglobekey/releases/tag/v4.3.2
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/Serpentiel/betterglobekey/main/companion/src-tauri/icons/icon.png
  credit: Aleksandr Zaruchevskii
  license: MIT; upstream project asset, trademarks retained
---

betterglobekey changes what the Globe key does when you switch keyboard input sources. You sort your input sources into collections, which are your own ordered lists, and the key moves through them.

- One press moves to the following source in the active collection.
- A double press jumps to the next collection.
- Adding Shift goes back, to the previous source or, with a double press, the previous collection.
- A small on-screen display names the source you landed on and the collection it belongs to.

Other keys, such as Caps Lock or Right Command, can act as the trigger too, which covers keyboards without a Globe key.

Setup happens in Terminal. You install it with Homebrew, list your input source IDs with `betterglobekey list`, write them into `~/.betterglobekey.yaml`, and run it as a Homebrew service. The service reloads the file whenever it changes. It needs the Accessibility permission, and the Globe key must be set to Do Nothing in System Settings > Keyboard so macOS stops switching sources itself. `betterglobekey doctor` checks both.

Version 4.3.2 of the optional companion app is a Universal DMG for macOS 13 or later, and each release also carries the command-line tool as separate Apple silicon and Intel binaries. If you would rather not edit YAML, the companion writes the configuration for you.
