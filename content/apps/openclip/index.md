---
name: "OpenClip"
summary: "Select text in any app to get a small action bar for transforms, searches, scripts, math, and optional AI."
category: "Productivity"
tags:
  - automation
  - extensions
  - scripting
  - keyboard-shortcuts
repository: "https://github.com/ganeshmshetty/openclip"
website: "https://github.com/ganeshmshetty/openclip"
license: "AGPL-3.0"
licenseUrl: "https://github.com/ganeshmshetty/openclip/blob/main/LICENSE"
download: "https://github.com/ganeshmshetty/openclip/releases"
freeDownload: true
homebrew: "openclip"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/ganeshmshetty/openclip"
  - "https://github.com/ganeshmshetty/openclip/blob/main/LICENSE"
  - "https://github.com/ganeshmshetty/openclip/releases"
  - "https://github.com/ganeshmshetty/openclip/releases/tag/v1.9.2"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/ganeshmshetty/openclip/main/Sources/OpenClip/Assets.xcassets/AppIcon.appiconset/AppIcon-512.png"
    credit: "ganeshmshetty and OpenClip contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

OpenClip puts a small bar of actions next to whatever text you select, in any app. From that bar you can change the case of the selection, search for it, copy or cut it, work out a math expression, or hand it to a script. When you would rather type than click, Option-Command-C opens a palette where you fuzzy-search every action you have installed.

You can add your own actions as extensions. Each one is a folder in `~/.openclip/extensions/`, and the simplest kind, a URL lookup, needs nothing more than an `openclip.json` file. Extensions can also run JavaScript, shell scripts or AppleScript, and community extensions install from an Extension Store in the preferences.

AI actions are optional. They can send text to local Ollama models, to Apple Intelligence, or to OpenAI and Anthropic using your own keys. Apart from those, the project says the app has no telemetry or analytics and runs locally.

OpenClip is written in Swift and needs macOS 14 or later. The 1.9.2 download is a universal build for Apple silicon and Intel, and its disk image is notarized by Apple. It needs Accessibility permission in System Settings, which lets it detect the selected text without polling the clipboard. It also installs as a Homebrew cask.
