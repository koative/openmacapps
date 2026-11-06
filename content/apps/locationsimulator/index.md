---
name: "LocationSimulator"
summary: "Simulates a GPS location on iPhone, iPad, Apple TV and the iOS Simulator for testing location-aware apps."
category: "Developer tools"
tags:
  - testing
  - ios
  - simulators
repository: "https://github.com/Schlaubischlump/LocationSimulator"
website: "https://locationsimulator.net"
license: "GPL-3.0"
licenseUrl: "https://github.com/Schlaubischlump/LocationSimulator/blob/master/LICENSE"
download: "https://github.com/Schlaubischlump/LocationSimulator/releases"
homebrew: "locationsimulator"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Schlaubischlump/LocationSimulator"
  - "https://github.com/Schlaubischlump/LocationSimulator/blob/master/LICENSE"
  - "https://github.com/Schlaubischlump/LocationSimulator/releases"
  - "https://locationsimulator.net"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Schlaubischlump/LocationSimulator/master/LocationSimulator/Assets.xcassets/AppIcon.appiconset/AppIcon_512.png"
    credit: "Schlaubischlump and LocationSimulator contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

LocationSimulator sets the location of an iPhone, iPad, Apple TV or the iOS Simulator from your Mac, so you can test apps that depend on location. It connects over USB or Wi-Fi and needs neither a jailbreak nor an app on the device. You choose a point by long-clicking the map or searching for a place, then move at walk, cycle or drive speeds, steer with the arrow keys, or navigate from the current position to a new one. It is written for developers who test location-based apps.

The release build is a universal app for Apple silicon and Intel Macs that needs macOS 10.15 or later. It is signed with a Developer ID certificate and notarized. The latest tagged release, v0.2.2, is from May 2023, and the README warns that the source code does not support iOS 17 and later. On iOS 16 and later the device must have Developer Mode enabled. The app downloads the DeveloperDiskImage files for your iOS version from GitHub; if that fails, copy them from an Xcode installation. Donations are optional.
