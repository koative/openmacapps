---
name: "iContainer"
summary: "Native front end for Apple's container CLI: containers, images, logs, stats and shells."
category: "Developer tools"
tags:
  - containers
  - virtualization
  - monitoring
repository: "https://github.com/nico81/iContainer"
website: "https://github.com/nico81/iContainer"
license: "MIT"
licenseUrl: "https://github.com/nico81/iContainer/blob/main/LICENSE"
download: "https://github.com/nico81/iContainer/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/nico81/iContainer"
  - "https://github.com/nico81/iContainer/blob/main/LICENSE"
  - "https://github.com/nico81/iContainer/releases/latest"
---

iContainer is a SwiftUI front end for Apple's `container` command-line tool, which runs Linux containers on a Mac. It lists containers, images and container machines, shows logs and live stats, opens interactive shells and can edit a container's ports, volumes and environment. It can also import images from a local Docker install, and it can install and update the official container CLI for you. Log explanations run on-device when Apple Intelligence is available.

It requires macOS 26 or later on Apple silicon, and the Apple container CLI must be installed; the app can install it. Apple Intelligence is optional and only needed for log explanations. According to the README, release builds from 2.1.2 onward are signed with a Developer ID and notarized, while earlier builds were not. The author says the app was largely written with Claude Code and describes it as a hobby project. Updates arrive through Sparkle.
