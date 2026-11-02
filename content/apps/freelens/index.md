---
name: "Freelens"
summary: "A desktop interface for Kubernetes clusters, with views for workloads, logs, shells and resource editing."
category: "Developer tools"
tags: ["kubernetes", "containers", "monitoring", "development", "cross-platform"]
alternativeTo: ["lens"]
repository: "https://github.com/freelensapp/freelens"
website: "https://freelens.app"
license: "MIT"
licenseUrl: "https://github.com/freelensapp/freelens/blob/main/LICENSE"
download: "https://github.com/freelensapp/freelens/releases"
homebrew: "freelens"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/freelensapp/freelens", "https://github.com/freelensapp/freelens/blob/main/LICENSE", "https://github.com/freelensapp/freelens/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/freelensapp/freelens/blob/main/freelens/build/icon.icns", "credit": "Freelens Authors", "license": "MIT; upstream project asset, trademarks retained"}]
---

Freelens is a graphical client for Kubernetes. It reads your kubeconfig, lets you switch between clusters, and shows pods, deployments, services, nodes and other resources in tables you can filter. From there you can follow logs, open a shell in a container, and edit or delete resources without typing `kubectl` commands.

The project continues the open-source line of the Lens desktop app as an independent community effort, and it can be extended with plugins. The macOS build needs macOS 13 or later and is offered as a DMG or PKG for both Apple silicon and Intel. Clusters older than Kubernetes 1.22 fall back to a bundled `kubectl` that may not work fully.
