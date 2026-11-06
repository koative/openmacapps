---
name: "Container Desktop"
summary: "Docker Desktop-style SwiftUI app for managing containers, images, volumes, networks and machines through Apple's container CLI."
category: "Developer tools"
tags:
  - containers
  - docker
  - virtualization
alternativeTo:
  - docker-desktop
repository: "https://github.com/sembsa/ContainerDesktop"
website: "https://sembsa.github.io/ContainerDesktop/"
license: "MIT"
licenseUrl: "https://github.com/sembsa/ContainerDesktop/blob/main/LICENSE"
download: "https://github.com/sembsa/ContainerDesktop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/sembsa/ContainerDesktop"
  - "https://github.com/sembsa/ContainerDesktop/blob/main/LICENSE"
  - "https://github.com/sembsa/ContainerDesktop/releases/latest"
  - "https://sembsa.github.io/ContainerDesktop/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/sembsa/ContainerDesktop/main/ContainerGUI/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "Sebastian Trześniewski"
    license: "MIT; upstream app icon, trademarks retained"
---

Container Desktop is a native graphical front end for Apple's `container` command-line tool. Its window covers containers, images, volumes, networks and machines, a Run dialog sets ports, environment variables, volumes and resources, and a menu bar extra stops containers without opening the window. An optional section manages Helm repositories and releases. It is for people who want a graphical view of Apple's container runtime instead of Docker Desktop.

It requires macOS 26 (Tahoe) on Apple silicon and the `container` CLI installed, by default at `/usr/local/bin/container`. Releases are not notarized, so the first launch has to be allowed under System Settings > Privacy & Security. By default the update check sends a random installation identifier, the app version and the macOS version; this can be turned off under Settings > Privacy > Anonymous statistics.
