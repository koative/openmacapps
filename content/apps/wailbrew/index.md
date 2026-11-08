---
name: "WailBrew"
summary: "A graphical front end for Homebrew to browse, install, update and remove formulae, casks, taps and services."
category: "Developer tools"
tags:
  - homebrew
  - package-manager
  - updates
repository: https://github.com/wickenico/WailBrew
website: https://wailbrew.app
license: "MIT"
licenseUrl: https://github.com/wickenico/WailBrew/blob/main/LICENSE
download: https://formulae.brew.sh/cask/wailbrew
freeDownload: true
homebrew: "wailbrew"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/wickenico/WailBrew
  - https://github.com/wickenico/WailBrew/blob/main/LICENSE
  - https://github.com/wickenico/WailBrew/releases
  - https://formulae.brew.sh/cask/wailbrew
  - https://raw.githubusercontent.com/wickenico/WailBrew/main/README.md
  - https://github.com/wickenico/WailBrew/releases/tag/v0.14.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/wickenico/WailBrew/main/build/appicon.png
    credit: "Nico Wickersheim"
    license: "MIT repository asset; trademarks retained"
---

WailBrew runs Homebrew from a window. You search for a formula or cask, install, upgrade or uninstall it, and select several packages to act on them at once.

- Package pages list dependencies and dependents, and a Leaves view shows what nothing else depends on.
- Update checks run in the background and put a badge on the Dock icon when upgrades are waiting.
- Taps can be added, removed and trusted, and Homebrew services started, stopped or restarted.
- Maintenance covers `brew doctor`, a cleanup with a dry-run preview first, and exporting a Brewfile.

A command palette and keyboard shortcuts are built in. Every command the app runs is logged, so you can see exactly what it asked Homebrew to do. For restricted networks there are proxy and mirror settings, and you can point the app at a custom `brew` path or turn off quarantine for casks.

WailBrew is built with Wails, Go and React. It needs Homebrew already installed. The release build declares macOS 10.13 as its minimum, while the developer tests mainly on recent versions. The download from the Homebrew cask or GitHub is a Universal app for Apple silicon and Intel, notarized, and the code is under the MIT license.

Settings and Brewfile snapshots can move to a folder you choose, such as `~/.config/wailbrew`. The interface comes in 12 languages and follows the system's light or dark appearance.
