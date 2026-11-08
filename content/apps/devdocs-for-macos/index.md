---
name: "DevDocs for macOS"
summary: "An unofficial Mac viewer for DevDocs that puts searchable API documentation in its own app window."
category: "Developer tools"
tags:
  - reference
  - development
  - search
repository: https://github.com/dteoh/devdocs-macos
website: https://github.com/dteoh/devdocs-macos
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/dteoh/devdocs-macos/blob/master/LICENSE.txt
download: https://github.com/dteoh/devdocs-macos/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since July 2021 and no commit since July 2022."
icon: ./assets/icon.png
sources:
  - https://github.com/dteoh/devdocs-macos
  - https://github.com/dteoh/devdocs-macos/blob/master/LICENSE.txt
  - https://github.com/dteoh/devdocs-macos/releases
  - https://devdocs.io
  - https://raw.githubusercontent.com/dteoh/devdocs-macos/master/README.md
  - https://github.com/dteoh/devdocs-macos/releases/tag/v0.7.0
  - https://github.com/dteoh/devdocs-macos/commits/master
  - https://formulae.brew.sh/api/cask/dteoh-devdocs.json
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/dteoh/devdocs-macos/master/devdocs-macos/Assets.xcassets/AppIcon.appiconset/256pt@2x.png
    credit: "mickimnet, DevDocs for macOS contributors"
    license: "GPL-3.0 repository asset"
---

DevDocs for macOS opens the DevDocs API documentation site in a Mac app with its own windows and tabs, so you search and read references outside the browser. It has a global keyboard shortcut, Option-Space by default, which you can change. Command-F searches within the open page, and the interface follows the system's light or dark mode.

The app handles its own `devdocs-macos://` URLs, so scripts can drive it. A search URL opens a new window with a term and, if you give one, a single documentation set, for example Rails. Another URL just opens a new window. The app also accepts ordinary `http://` and `https://` links, but only those on devdocs.io; links to any other domain are ignored. From Terminal, `osascript` with `open location` is enough to send one.

Version 0.7.0, from July 2021, is a ZIP holding a Universal app for Apple silicon and Intel that declares macOS 11 as its minimum. The developer only supports Big Sur and points Mojave and Catalina users to version 0.5.2. The `dteoh-devdocs` cask that the README mentions has been disabled in Homebrew because the app fails its Gatekeeper check. The viewer is unofficial and licensed under the GPL, version 3 or later.
