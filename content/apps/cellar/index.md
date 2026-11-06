---
name: "Cellar"
summary: "Native macOS front end for Homebrew: upgrade and clean up packages, manage services, Brewfiles and widgets."
category: "Developer tools"
tags:
  - homebrew
  - package-manager
  - menu-bar
  - widgets
repository: "https://github.com/tuhage/Cellar"
website: "https://github.com/tuhage/Cellar"
license: "MIT"
licenseUrl: "https://github.com/tuhage/Cellar/blob/main/LICENSE"
download: "https://github.com/tuhage/Cellar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/tuhage/Cellar"
  - "https://github.com/tuhage/Cellar/blob/main/LICENSE"
  - "https://github.com/tuhage/Cellar/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/tuhage/Cellar/main/Cellar/Assets.xcassets/AppIcon.appiconset/logo.jpg"
    credit: "tuhage"
    license: "MIT; upstream app icon, trademarks retained"
---

Cellar is a graphical front end for Homebrew. It lists installed formulae and casks, shows what is outdated, and upgrades one package, a selection or everything, with live progress and a preview of what brew will change first. It also restarts and monitors services, keeps a Brewfile per project, runs Clean Up and Health Check, and includes a `cellar` command-line tool. It suits people who use Homebrew every day and want to see what a command will do before it runs. It is native SwiftUI, Sparkle is its only dependency, and the README says it has no account and no telemetry.

It requires macOS 15 or later and Homebrew; if Homebrew is missing, the app walks you through installing it. The README says Cellar is signed with a Developer ID and notarized by Apple. Installed from Homebrew it updates with `brew upgrade`, and installed from the DMG it checks for its own updates daily.
