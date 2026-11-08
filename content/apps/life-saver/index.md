---
name: "Life Saver"
summary: "An abstract screensaver based on Conway's Game of Life, with color-scheme presets and adjustable settings."
category: "Media"
tags:
  - screensaver
  - desktop
repository: https://github.com/amiantos/lifesaver
website: https://github.com/amiantos/lifesaver
license: "MPL-2.0"
licenseUrl: https://github.com/amiantos/lifesaver/blob/master/LICENSE
download: https://amiantos.s3.amazonaws.com/lifesaver-1.2.zip
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
sources:
  - https://github.com/amiantos/lifesaver
  - https://github.com/amiantos/lifesaver/blob/master/LICENSE
  - https://amiantos.s3.amazonaws.com/lifesaver-1.2.zip
  - https://github.com/amiantos/lifesaver/releases
  - https://raw.githubusercontent.com/amiantos/lifesaver/master/README.md
  - https://raw.githubusercontent.com/amiantos/lifesaver/master/CHANGES.md
  - https://github.com/amiantos/lifesaver/releases/tag/v1.2
  - https://apps.apple.com/us/app/life-saver-tv/id1470667717
  - https://github.com/amiantos/lifesaver/blob/master/Life%20Saver.xcodeproj/project.pbxproj
---

Life Saver plays Conway's Game of Life as a Mac screensaver. SpriteKit draws it as an abstract animation, and the screensaver's options sheet sets the color scheme and other settings.

- Color schemes come as presets, and the sheet selects the matching preset when your own colors equal one.
- An option picks a random color preset each time the screensaver starts.
- Size options run from XS to XL. Version 1.2 added two smaller ones and renamed the old default, M, to L.
- An "extra" animation for dying cells, reworked in version 1.1.

Version 1.1 reduced memory, CPU and energy use, partly by lowering the frame rate to 30 frames per second.

The README links a ZIP of version 1.2. The screensaver inside is built for Intel processors only, requires macOS 10.14, and is signed with a Developer ID and notarized. The 1.2 release page adds a second archive, built with Xcode 26, for anyone the first one fails for.

Life Saver also comes as Life Saver TV, a separate Apple TV app on the App Store. The developer's forum carries devlogs and support, and the Xcode project builds both versions from the same repository under MPL-2.0.
