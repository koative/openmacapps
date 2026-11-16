---
name: mSTAGRAM
summary: "Shows the phone version of instagram.com on a Mac, inside a window drawn as an iPhone with a choice of frame finishes."
category: Internet
tags:
  - instagram
  - web-wrapper
  - mobile-web
  - social-media
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/mSTAGRAM
website: https://github.com/starbudweiser/mSTAGRAM
license: MIT
licenseUrl: https://github.com/starbudweiser/mSTAGRAM/blob/main/LICENSE
download: "https://github.com/starbudweiser/mSTAGRAM/releases/latest"
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/mSTAGRAM
  - https://github.com/starbudweiser/mSTAGRAM/blob/main/LICENSE
  - https://github.com/starbudweiser/mSTAGRAM/releases
  - https://raw.githubusercontent.com/starbudweiser/mSTAGRAM/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mSTAGRAM/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mSTAGRAM/releases/download/v1.1.0/mSTAGRAM-1.1.0-macOS.zip
    credit: mSTAGRAM contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The mSTAGRAM iPhone-style window showing a neutral web page in dark mode."
    source: https://github.com/starbudweiser/mSTAGRAM/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
mSTAGRAM opens instagram.com on your Mac in its phone layout, inside a window drawn as a recent iPhone with its frame, Dynamic Island and status bar. The app presents itself to the site as an iPhone, so the mobile pages are served.

That helps with settings Instagram only lets you change from a phone, although some remain reserved to its own iOS app. Your login is kept between launches, and you can pick one of seven frame finishes, from orange to four titanium colors.

The app is written in Swift with AppKit and the system web view, with no third-party code. Another website can be opened in the same phone frame with a command-line argument.

mSTAGRAM is not affiliated with, endorsed by or sponsored by Instagram or Meta, and it does not use their logo. Releases are arm64 builds for macOS 13 or later, notarized, with the interface in English, French, Spanish and Italian. The app checks GitHub once a day and installs signed updates, which you can switch off.
