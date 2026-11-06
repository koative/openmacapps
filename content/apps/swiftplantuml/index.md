---
name: "SwiftPlantUML"
summary: "Generates PlantUML class diagrams from Swift code in Xcode or from Finder, with a companion app for options."
category: "Developer tools"
tags:
  - xcode
  - diagrams
  - uml
repository: "https://github.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension"
website: "https://github.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension"
license: "MIT"
licenseUrl: "https://github.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension/blob/main/LICENSE"
download: "https://github.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension/releases/download/1.6.0/SwiftPlantUMLApp.zip"
homebrew: "swiftplantumlapp"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "No commit since January 2024 (checked 2026-11-06)."
icon: "./assets/icon.png"
sources:
  - "https://github.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension"
  - "https://github.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension/blob/main/LICENSE"
  - "https://github.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension/main/SwiftPlantUMLApp/Assets.xcassets/AppIcon.appiconset/1024.png"
    credit: "Marco Eidinger"
    license: "MIT; upstream app icon, trademarks retained"
---

SwiftPlantUML generates PlantUML class diagrams from Swift code. It adds a source editor command in Xcode that diagrams the current file or the selected code, and a Finder action for one or more Swift files. A companion app holds the diagram options and the extension switches. It suits Swift developers who want a quick class diagram. The README recommends its command-line tool for diagrams across a whole project.

The README does not state a macOS version. Install it with Homebrew (`brew install swiftplantumlapp`) or by copying the app from the releases page, then enable the extensions under System Settings > Extensions. The README warns that the Xcode extension can take about 30 seconds to start on first launch. The last commit is from January 2024.
