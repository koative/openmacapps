---
name: BrewUI
summary: Homebrew's official Mac app for finding, installing and updating formulae and casks without the Terminal.
category: Developer tools
tags:
  - homebrew
  - package-manager
repository: https://github.com/Homebrew/BrewUI
website: https://github.com/Homebrew/BrewUI
license: AGPL-3.0
licenseUrl: https://github.com/Homebrew/BrewUI/blob/main/LICENSE
download: https://github.com/Homebrew/BrewUI/releases
freeDownload: true
homebrew: "homebrew-app"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Homebrew/BrewUI
  - https://github.com/Homebrew/BrewUI/blob/main/LICENSE
  - https://github.com/Homebrew/BrewUI/releases
  - https://formulae.brew.sh/cask/homebrew-app
  - https://raw.githubusercontent.com/Homebrew/BrewUI/main/README.md
  - https://raw.githubusercontent.com/Homebrew/BrewUI/main/ARCHITECTURE.md
  - https://github.com/Homebrew/BrewUI/releases/tag/v0.6.0
assets:
  - path: ./assets/icon.png
    source: https://github.com/Homebrew/BrewUI/releases/download/v0.6.0/Homebrew-0.6.0.zip
    credit: Homebrew project
    license: Extracted unmodified from the official app bundle (Contents/Resources/AppIcon.icns); Homebrew name and logo retained by the project
---

BrewUI puts Homebrew in a window. You search formulae and casks, install or upgrade them, and watch each `brew` command the app runs along with the output that comes back.

The Homebrew project maintains it, and the app installs as Homebrew.app. Package data comes from the local `brew` command and from Homebrew's public JSON API. Changes go through the real command line tool, and the app offers the matching Terminal command so you can copy it. Output from `brew doctor` appears in the same console.

When a command needs administrator rights, a small helper asks for your password. If Touch ID is enabled for `sudo` on your Mac, the app leaves the prompt to Touch ID instead. BrewUI can also upgrade itself.

The current release requires macOS 26.2, and Homebrew itself must already be installed. It comes as a ZIP or PKG on GitHub, or through the `homebrew-app` cask. The ZIP holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. Versions are still numbered 0.x, and the code is under the GNU AGPL 3.0. Volunteers translate the interface, and untranslated text appears in English.

Settings follow Homebrew's own `brew.env` file. Shell aliases and variables exported in your shell profile have no effect, and you relaunch the app after changing `brew.env`. The app looks for `brew` only in the default locations, `/opt/homebrew` and `/usr/local`.
