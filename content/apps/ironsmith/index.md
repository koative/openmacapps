---
name: "Ironsmith"
summary: "Menu bar app that turns a plain-language description into a small native SwiftUI Mac app, using local or hosted AI models."
category: "AI"
tags:
  - coding-agents
  - local-ai
  - native
  - language-models
repository: "https://github.com/Jeidoban/Ironsmith"
website: "https://ironsmith.app"
license: "GPL-3.0"
licenseUrl: "https://github.com/Jeidoban/Ironsmith/blob/main/LICENSE"
download: "https://github.com/Jeidoban/Ironsmith/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Jeidoban/Ironsmith"
  - "https://github.com/Jeidoban/Ironsmith/blob/main/LICENSE"
  - "https://github.com/Jeidoban/Ironsmith/releases"
  - "https://ironsmith.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Jeidoban/Ironsmith/main/Ironsmith/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Ironsmith contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Ironsmith is a menu bar app for making small personal Mac apps. You describe the app you want, and an AI agent generates, builds and saves it as a native SwiftUI app that you can launch, edit and export to your Applications folder. It suits people who need a focused utility, such as a file renamer or a converter, and do not want to write the code themselves. The Ironsmith Store lets you start from apps other people have published and remix them.

Ironsmith requires macOS 26 or later and runs on Apple silicon or Intel Macs. Apple Intelligence is used for app icons and the built-in model where it is available. Building apps needs the Xcode Command Line Tools, which macOS offers to install on first launch; full Xcode is not required. Generated apps are sandboxed by default, and sensitive permissions such as camera and microphone must be enabled explicitly. Hosted models use your own API keys or an Ironsmith sign-in, and local models work through Ollama or any OpenAI-compatible server.
