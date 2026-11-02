---
name: "SwiftFormat for Xcode"
summary: "An Xcode source editor extension that reformats Swift code using SwiftFormat's configurable rules."
category: "Developer tools"
tags: ["xcode", "formatters", "extensions", "development"]
repository: "https://github.com/nicklockwood/SwiftFormat"
website: "https://github.com/nicklockwood/SwiftFormat"
license: "MIT"
licenseUrl: "https://github.com/nicklockwood/SwiftFormat/blob/main/LICENSE.md"
download: "https://github.com/nicklockwood/SwiftFormat/releases"
homebrew: "swiftformat-for-xcode"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/nicklockwood/SwiftFormat", "https://github.com/nicklockwood/SwiftFormat/blob/main/LICENSE.md", "https://github.com/nicklockwood/SwiftFormat/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/nicklockwood/SwiftFormat/blob/main/EditorExtension/Application/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "Nick Lockwood and SwiftFormat contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

SwiftFormat for Xcode brings the SwiftFormat code formatter into Xcode's Editor menu. Once the app has been opened and Xcode restarted, you can reformat the current file or a selection, fixing indentation, spacing, braces, redundant syntax and many other style details according to SwiftFormat's rules.

The app itself is where you turn rules on or off and set their options. Those settings apply to every project, since the extension has no per-project overrides; you can export and import configurations from the File menu to switch between them. The same repository also ships the SwiftFormat command-line tool, which is a separate download.
