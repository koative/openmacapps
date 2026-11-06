---
name: "AutoBrew"
summary: "Menu bar app that upgrades Homebrew packages in the background, with snapshots for rollback and a GUI for casks."
category: "Utilities"
tags:
  - homebrew
  - package-manager
  - menu-bar
  - updates
repository: "https://github.com/marcelrgberger/auto-brew"
website: "https://github.com/marcelrgberger/auto-brew"
license: "MIT"
licenseUrl: "https://github.com/marcelrgberger/auto-brew/blob/main/LICENSE"
download: "https://github.com/marcelrgberger/auto-brew/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/marcelrgberger/auto-brew"
  - "https://github.com/marcelrgberger/auto-brew/blob/main/LICENSE"
  - "https://github.com/marcelrgberger/auto-brew/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/marcelrgberger/auto-brew/main/AutoBrew/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "DigitalFreedom Global LLC"
    license: "MIT; upstream app icon, trademarks retained"
---

AutoBrew keeps Homebrew casks and formulae current from the menu bar, running upgrades in the background on a schedule you choose. Before an app is upgraded it can take a snapshot of that app's data, so a bad update can be rolled back, and snapshots can be moved to another Mac. A BrewStore window browses and installs casks, and the package includes a command-line tool and a widget. It suits people who already manage their Mac apps with Homebrew.

It requires macOS 14 or later and an existing Homebrew installation. The DMG is Developer ID signed and notarized, so it opens without the Gatekeeper workaround. The author says the app has no telemetry and no account; the BrewStore sorts by Homebrew's public install statistics, and the app occasionally asks you to star or sponsor the project.
