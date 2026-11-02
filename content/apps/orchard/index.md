---
name: "Orchard"
summary: "A native Mac app for Apple's container runtime: containers, images, machines, Kubernetes clusters, compose stacks and MLX models."
category: "Developer tools"
tags: ["containers", "kubernetes", "native", "development"]
alternativeTo: ["docker-desktop"]
repository: "https://github.com/andrew-waters/orchard"
website: "https://orchard.andon.dev"
license: "MIT"
licenseUrl: "https://github.com/andrew-waters/orchard/blob/main/LICENSE"
download: "https://github.com/andrew-waters/orchard/releases/latest"
homebrew: "orchard"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/andrew-waters/orchard", "https://github.com/andrew-waters/orchard/blob/main/LICENSE", "https://github.com/andrew-waters/orchard/releases", "https://orchard.andon.dev"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/andrew-waters/orchard/blob/main/Orchard/Assets.xcassets/AppIcon.appiconset/icon_512x512.png", "credit": "Andrew Waters", "license": "MIT; upstream project asset, trademarks retained"}]
---

Orchard is a desktop front end for Apple's open-source `container` tool, which runs Linux containers in lightweight virtual machines on Apple silicon. From one window you can pull and build images, run and inspect containers, manage volumes and networks, follow logs, and open a terminal into a running container. A command palette reaches everything from the keyboard.

It also manages persistent Linux machines, local Kubernetes clusters built with container's cluster plugin, and compose projects, listing any compose settings it cannot honour before the first run. A local AI section finds or starts MLX model servers on the Mac and wires containers to them, and shows sandboxed agent workloads with their isolation settings.

Orchard needs macOS 26 and Apple's container 1.6.1; if container is missing, the app offers to download and install Apple's signed package. Releases are signed and notarized. The project warns that container machines give up much of a container's isolation: by default they mount your home folder read and write and give the machine's account passwordless sudo, so only create them from images you trust.
