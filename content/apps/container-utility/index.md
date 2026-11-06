---
name: "ContainerUtility"
summary: "Native SwiftUI app and menu bar extra for managing Apple's container CLI: machines, containers, images, networks and volumes."
category: "Developer tools"
tags:
  - containers
  - menu-bar
  - virtualization
repository: "https://github.com/erdaltoprak/ContainerUtility"
website: "https://github.com/erdaltoprak/ContainerUtility"
license: "Apache-2.0"
licenseUrl: "https://github.com/erdaltoprak/ContainerUtility/blob/main/LICENSE.md"
download: "https://github.com/erdaltoprak/ContainerUtility/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/erdaltoprak/ContainerUtility"
  - "https://github.com/erdaltoprak/ContainerUtility/blob/main/LICENSE.md"
  - "https://github.com/erdaltoprak/ContainerUtility/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/erdaltoprak/ContainerUtility/main/ContainerUtility/ContainerUtility/Assets.xcassets/AppIcon.appiconset/icon-composer-iOS-Default-1024x1024%401x.png"
    credit: "ContainerUtility contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

ContainerUtility is a SwiftUI workspace for Apple's `container` command-line tool. It shows runtime health and has views for machines, containers, images, networks, volumes and registry logins, along with an activity list for running operations and a diagnostics export that redacts sensitive values. A menu bar extra gives quick status and a way back to the main window. It suits people who run Apple's container runtime and prefer a window to the terminal.

It requires macOS 26.2 or later, the app's declared minimum, and Apple's `container` CLI 1.0.0 or newer on the `PATH`. The release ZIP is Developer ID signed and notarized. Updates arrive through Sparkle.
