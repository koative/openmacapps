---
name: Berthly
summary: A desktop front end for Apple's container tool to build images, run containers and VMs, and follow their logs.
category: Developer tools
tags:
  - containers
  - menu-bar
  - virtualization
repository: https://github.com/henrywang/Berthly
website: https://berthly.net
license: Apache-2.0
licenseUrl: https://github.com/henrywang/Berthly/blob/main/LICENSE
download: https://github.com/henrywang/Berthly/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/henrywang/Berthly
  - https://github.com/henrywang/Berthly/blob/main/LICENSE
  - https://github.com/henrywang/Berthly/releases
  - https://berthly.net
  - https://raw.githubusercontent.com/henrywang/Berthly/main/README.md
  - https://github.com/henrywang/Berthly/releases/tag/v1.6.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/henrywang/Berthly/main/Berthly/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Henry Wang and Berthly contributors
    license: Apache-2.0 repository asset
---

Berthly puts a window and a menu bar item on top of Apple's open-source `container` tool, so you can build images, run containers and manage machines without typing `container` commands. Dropping a Dockerfile or Containerfile from Finder on the window opens the build sheet with the context and path filled in.

- Images can be pulled, built, inspected and pruned, and each build's settings are kept for a one-click rebuild.
- Running containers show live logs and CPU, memory and network charts, and you can open a terminal attached to one.
- Machines, networks, volumes and private registry sign-ins are managed from the same window.
- Pinned containers sit in the menu bar, and a notification arrives when one changes state.
- Berthly compares pulled tags with their registries, marks stale images, and can recreate a container on the newer image with its volumes kept.

A Command-K palette reaches any action. The README maps the rest of the `container` command line to the app and names the few expert flags left to the terminal.

Apple's tool sets the hardware limit: `container` runs only on Apple silicon, so Berthly needs an Apple silicon Mac with macOS 26 or later and `container` itself. Berthly can install and start `container` for you. Version 1.6.1 is a Developer ID-signed and notarized DMG, and later updates install from inside the app. The developer says there is no telemetry and that registry passwords stay in the macOS Keychain.
