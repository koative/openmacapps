---
name: "SwiftVM"
summary: "Runs macOS, Linux and Windows 11 Arm virtual machines on Apple silicon Macs, from a menu bar app or a CLI."
category: "Developer tools"
tags:
  - virtual-machines
  - virtualization
  - apple-silicon
alternativeTo:
  - parallels-desktop
  - vmware-fusion
repository: "https://github.com/swiftvm-app/swiftvm"
website: "https://swiftvm.app"
license: "Apache-2.0"
licenseUrl: "https://github.com/swiftvm-app/swiftvm/blob/main/LICENSE"
download: "https://github.com/swiftvm-app/swiftvm/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/swiftvm-app/swiftvm"
  - "https://github.com/swiftvm-app/swiftvm/blob/main/LICENSE"
  - "https://github.com/swiftvm-app/swiftvm/releases"
  - "https://swiftvm.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/swiftvm-app/swiftvm/releases/download/v1.9.0/SwiftVM-1.9.0.dmg"
    credit: "SwiftVM contributors"
    license: "Apache-2.0; upstream app icon taken from the notarized SwiftVM 1.9.0 app bundle, trademarks retained"
---

SwiftVM is a native app for running virtual machines on Apple silicon Macs. It can install macOS, Linux and Windows 11 for Arm guests with little manual setup, and it supports snapshots, reusable templates, shared folders, clipboard sharing, port forwarding and USB devices. It lives in the menu bar and includes a swiftvm command-line tool, and an MCP server lets scripts and AI agents see and operate a guest's desktop. It suits developers who need to test on several systems.

SwiftVM requires macOS 27 or later on Apple silicon, and the README lists no Intel support. The Windows guest option is Windows 11 for Arm only. The DMG is signed with a Developer ID certificate and notarized. Installation is available with Homebrew or as a direct DMG download from the releases page.
