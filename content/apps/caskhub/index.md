---
name: CaskHub
summary: "Browses, installs, updates and removes Homebrew casks from an App Store-style window."
category: Utilities
tags:
- homebrew
- package-manager
- app-management
- updates
repository: https://github.com/alielsokary/CaskHub
website: https://caskhub.app
license: MIT
licenseUrl: https://github.com/alielsokary/CaskHub/blob/master/LICENSE
download: https://github.com/alielsokary/CaskHub/releases
freeDownload: true
homebrew: "caskhub"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
- https://github.com/alielsokary/CaskHub
- https://github.com/alielsokary/CaskHub/blob/master/LICENSE
- https://github.com/alielsokary/CaskHub/releases
- https://formulae.brew.sh/cask/caskhub
- https://raw.githubusercontent.com/alielsokary/CaskHub/master/README.md
- https://github.com/alielsokary/CaskHub/releases/tag/0.9.3
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/alielsokary/CaskHub/master/docs/assets/icon.png
  credit: Ali Elsokary
  license: MIT repository asset; CaskHub name and icon retained by the author
---

CaskHub puts Homebrew's cask catalogue in a window laid out like an app store. You browse shelves and categories, or press Command-F to search names and descriptions, then install, update or uninstall an app with one click and watch its progress in the window.

- Top Charts rank casks by installs over 30, 90 or 365 days.
- Adopt brings an app you installed from a DMG or another store under Homebrew, leaving the app where it is.
- Installer-based casks that need admin rights ask for your password in a macOS dialog.
- The Updates badge skips apps that update themselves.

Every install, update and removal runs through your own `brew` binary. Anything done in CaskHub can be managed from Terminal afterwards, and casks installed from the command line show up in its library. Browsing needs only Homebrew's public API and a category snapshot bundled in the app. Installing needs Homebrew itself; if it is missing, CaskHub walks you through the setup, including custom install paths.

The README says CaskHub sends anonymous usage metrics and crash reports through Sentry and session signals to TelemetryDeck, and all of it can be switched off under Settings, Privacy. CaskHub needs macOS 15.6 or later. The release ZIP holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, which updates itself through Sparkle.
