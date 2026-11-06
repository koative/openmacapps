---
name: "berth"
summary: "Native Mac app for managing Linux containers run by Apple's container tool, with live logs, stats and image pulls."
category: "Developer tools"
tags:
  - containers
  - docker
  - developer-utilities
repository: "https://github.com/tofa84/berth"
website: "https://github.com/tofa84/berth"
license: "MIT"
licenseUrl: "https://github.com/tofa84/berth/blob/main/LICENSE"
download: "https://github.com/tofa84/berth/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/tofa84/berth"
  - "https://github.com/tofa84/berth/blob/main/LICENSE"
  - "https://github.com/tofa84/berth/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/tofa84/berth/main/berth/Assets.xcassets/AppIcon.appiconset/berth-1024.png"
    credit: "berth contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

berth is a graphical manager for apple/container, Apple's tool for running Linux containers as lightweight virtual machines. It lists and controls containers, images, volumes and networks, streams container logs and live stats, pulls images with progress bars, and keeps registry logins in the macOS Keychain. It talks to the engine natively rather than by shelling out, except for the Run builder and engine start and stop. It is for developers who want a visual manager for Apple's container runtime.

It needs an Apple silicon Mac running macOS 26, Apple's container tool installed and started, and Xcode 26 to build from source. The README says the app is ad-hoc signed and not notarized, so macOS blocks it on first launch. Allow it once under System Settings, Privacy & Security, or clear the quarantine flag as the README shows. It runs without the App Sandbox, and the Builds screen is not implemented yet.
