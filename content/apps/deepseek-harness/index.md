---
name: "DeepSeek Harness"
summary: "Unofficial native SwiftUI client for DeepSeek Harness (dsh) with a bundled runtime, approval prompts and Dock badges."
category: "AI"
tags:
  - chat
  - coding-agents
  - agents
repository: "https://github.com/luochenw/deepseek-harness-macos"
website: "https://github.com/luochenw/deepseek-harness-macos"
license: "MIT"
licenseUrl: "https://github.com/luochenw/deepseek-harness-macos/blob/main/LICENSE"
download: "https://github.com/luochenw/deepseek-harness-macos/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/luochenw/deepseek-harness-macos"
  - "https://github.com/luochenw/deepseek-harness-macos/blob/main/LICENSE"
  - "https://github.com/luochenw/deepseek-harness-macos/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/luochenw/deepseek-harness-macos/main/macos/DSHApp/AppIcon.icns"
    credit: "luochenw"
    license: "MIT; upstream app icon, trademarks retained"
---

DeepSeek Harness is a native macOS window for DeepSeek's own Harness (`dsh`), which ships as a command-line tool and a browser interface. This app is a SwiftUI and AppKit client rather than a web view. It remembers the workspace you pick, shows approval requests and agent questions, and marks Dock badges and sends notifications when a background session needs you or finishes. It suits people who already run DeepSeek coding agents and want them on the desktop instead of in a browser tab.

The README says the release is an Apple Silicon zip for macOS 14 or later. It also says the build is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings under Privacy & Security, or with the `xattr` command the README gives. The built app bundles `dsh` and a Node.js runtime, and the README says Intel Macs need a source build. The project is unofficial and not made by DeepSeek.
