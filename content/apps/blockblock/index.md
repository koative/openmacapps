---
name: BlockBlock
summary: Alerts you when software adds itself to a location that makes it start at login or boot.
category: Privacy & security
tags:
  - security
  - persistence
  - monitoring
repository: https://github.com/objective-see/BlockBlock
website: https://github.com/objective-see/BlockBlock
license: GPL-3.0
licenseUrl: https://github.com/objective-see/BlockBlock/blob/master/LICENSE.md
download: https://github.com/objective-see/BlockBlock/releases
freeDownload: true
homebrew: "blockblock"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources:
  - https://github.com/objective-see/BlockBlock
  - https://github.com/objective-see/BlockBlock/blob/master/LICENSE.md
  - https://github.com/objective-see/BlockBlock/blob/master/README.md
  - https://github.com/objective-see/BlockBlock/releases
  - https://objective-see.org/products/blockblock.html
  - https://github.com/objective-see/BlockBlock/releases/tag/v2.5.2
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/BlockBlock/blob/9d53e2230633a5a692bd82717c678c50ca98f30c/Daemon/Daemon/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: BlockBlock contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

BlockBlock watches the places where macOS software registers itself to start at login or boot, and shows an alert when something new lands there. Malware often installs itself this way so that it survives a restart.

Each alert names the process that made the change, the file it modified and the item it added, with links to look up the process and the item on VirusTotal. Click Allow if you trust them, or Block to have BlockBlock delete the persisted item. Either choice becomes a rule unless you tick the temporary option, and a rule can match any combination of process, file and item. Rules sit in a window opened from the menu bar icon, where you can delete them, and every response is logged to `/Library/Objective-See/BlockBlock/BlockBlock.log`.

Three optional protections can be turned on during installation or later in settings. Notarization mode blocks downloaded programs that are not notarized, or every such program when its All option is on. Block Script mode stops downloaded scripts. Paste Protection blocks pastes into Terminal, or only suspicious ones when heuristics are enabled, and needs the Accessibility permission for the helper app.

An alert does not mean the Mac is infected, since legitimate software persists too, BlockBlock included. The app uses Apple's Endpoint Security framework, so installing it shows an authorization prompt and needs Full Disk Access. Version 2.5.2 needs macOS 10.15 or later and ships as a ZIP holding a notarized Universal installer for Apple silicon and Intel.
