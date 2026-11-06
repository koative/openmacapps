---
name: "FinderGo"
summary: "Finder Sync extension and toolbar app that opens Terminal, iTerm or Hyper from Finder."
category: "Utilities"
tags:
  - finder
  - terminal
  - menu-bar
repository: "https://github.com/onmyway133/FinderGo"
website: "https://github.com/onmyway133/FinderGo"
license: "MIT"
licenseUrl: "https://github.com/onmyway133/FinderGo/blob/master/LICENSE.md"
download: "https://github.com/onmyway133/FinderGo/releases/download/1.4.0/FinderGo.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/onmyway133/FinderGo"
  - "https://github.com/onmyway133/FinderGo/blob/master/LICENSE.md"
  - "https://github.com/onmyway133/FinderGo/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/onmyway133/FinderGo/blob/master/FinderGo/Assets.xcassets/AppIcon.appiconset/icon_512@2x.png"
    credit: "Khoa Pham"
    license: "MIT; upstream app icon, trademarks retained"
maintenance: "unmaintained"
maintenanceNote: "No release since October 2018 and no commit since November 2023, as of 6 November 2026."
---

FinderGo puts a button for Terminal, iTerm or Hyper in Finder. It comes as a small app you drag onto the Finder toolbar and as a Finder Sync extension, whose scripts the README asks you to copy into place with an install.sh command. The default terminal is chosen with a defaults write command.

The README lists macOS 10.12 support, and the bundle's minimum is 10.12. The executable is x86_64 only, and the build is ad-hoc signed and not notarized, so macOS blocks the first launch. Allow it in System Settings under Privacy & Security, or right-click the app and choose Open, as the README suggests. The last release is from October 2018, and the last commit from November 2023.
