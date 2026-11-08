---
name: "Expo Orbit"
summary: "Installs Android and iOS Simulator builds from files or Expo's EAS service and launches simulators from the menu bar."
category: "Developer tools"
tags:
  - mobile-development
  - simulators
  - android
  - ios
  - menu-bar
  - cross-platform
repository: https://github.com/expo/orbit
website: https://expo.dev/orbit
license: "MIT"
licenseUrl: https://github.com/expo/orbit/blob/main/LICENSE
download: https://github.com/expo/orbit/releases
homebrew: "expo-orbit"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/expo/orbit
  - https://github.com/expo/orbit/blob/main/LICENSE
  - https://github.com/expo/orbit/releases
  - https://expo.dev/orbit
  - https://raw.githubusercontent.com/expo/orbit/main/README.md
  - https://github.com/expo/orbit/releases/tag/expo-orbit-v2.8.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/expo/orbit/releases/download/expo-orbit-v2.8.1/expo-orbit.v2.8.1-macos.zip
    credit: "650 Industries, Inc. (Expo)"
    license: "MIT; official app icon extracted unmodified from the release bundle, trademarks retained"
---

Expo Orbit lives in the menu bar and puts mobile builds on simulators and devices. Drag an Android `.apk` or an iOS Simulator `.app` onto it, or choose one in the file picker, and Orbit installs and launches it. Ad hoc signed apps work too.

- It lists your iOS simulators and Android emulators and starts any of them, with an option to run Android emulators without audio.
- Builds from Expo's EAS service install on simulators and real devices in one click.
- Over-the-air updates go to simulators and real Android devices the same way.
- Pinned projects from your Expo dashboard appear in the menu, so your latest build is a click away.
- Snack projects open in a simulator directly.

To have Orbit start at login, open its Settings from the menu bar icon and turn on Launch on Login. The app is built with React Native and Electron, and Expo also publishes it for Windows and Linux.

Version 2.8.1 needs macOS 14 or later. Its macOS ZIP holds a Universal app for Apple silicon and Intel, signed with Expo's Developer ID and notarized. Homebrew installs it as the `expo-orbit` cask, and the code is MIT-licensed.
