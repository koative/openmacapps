---
name: eSLIFY
summary: "Flags Skyrim plugins as light masters (ESL) after checking that their FormIDs fit, with optional backups."
category: Games
tags:
  - skyrim
  - modding
  - plugins
  - load-order
repository: https://github.com/starbudweiser/eSLIFY
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/eSLIFY/blob/main/LICENSE
download: https://github.com/starbudweiser/eSLIFY/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "Eligibility check of a whole Data folder."
    source: https://github.com/starbudweiser/eSLIFY/blob/main/docs/screenshots/02_check.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/eSLIFY
  - https://github.com/starbudweiser/eSLIFY/blob/main/LICENSE
  - https://github.com/starbudweiser/eSLIFY/releases
  - https://raw.githubusercontent.com/starbudweiser/eSLIFY/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/eSLIFY/blob/main/docs/screenshots/02_check.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/eSLIFY/releases/download/v2.0.0/eSLIFY_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

eSLIFY sets the ESL flag on Skyrim plugins, but only on those that can take it safely. Light plugins do not count toward the 254-plugin limit, and flagging one whose own FormIDs fall outside the light range breaks it.

Add plugins or a whole folder by drag and drop. For each file the app shows its status (eligible, not eligible, already ESL), the number of new records and the range of its own FormIDs. Eligibility means own FormIDs between 0x800 and 0xFFF and a suitable header version.

When a plugin does not qualify, the reason is spelled out, for example FormIDs to compact in xEdit first or a header that must be 1.71. One click flags the eligible plugins of the selection or of the whole list. An optional .bak copy of each file is written before it changes.

It does one part of what xEdit's ESL tools do, without the compaction step, which still needs xEdit. The app is written in Swift and ships as an arm64 build for macOS 15 or later, notarized. A daily check offers new releases but installs nothing on its own. The interface is in English, French, Spanish and Italian.
