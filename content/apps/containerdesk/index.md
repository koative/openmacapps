---
name: "ContainerDesk"
summary: "Native Mac app for Apple's container runtime: run, inspect, build and clean up Linux containers from one window."
category: "Developer tools"
tags:
  - containers
  - docker
  - developer-utilities
repository: "https://github.com/MacHatter1/ContainerDesk"
website: "https://www.containerdesk.dev"
license: "MIT"
licenseUrl: "https://github.com/MacHatter1/ContainerDesk/blob/main/LICENSE"
download: "https://github.com/MacHatter1/ContainerDesk/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/MacHatter1/ContainerDesk"
  - "https://github.com/MacHatter1/ContainerDesk/blob/main/LICENSE"
  - "https://github.com/MacHatter1/ContainerDesk/releases/latest"
  - "https://www.containerdesk.dev"
---

ContainerDesk is a workspace for Apple's `container` runtime. It shows containers, images, volumes, networks and machines in searchable tables, and lets you run, stop, inspect, build and clean up Linux containers. Each container has live CPU and memory gauges against its limits, a terminal, logs and file access, and cleanup shows exactly what it will remove. It also manages Compose projects and saved stacks, and can serve a local MLX model for chat. It suits developers who want to use Apple's runtime and do not need a Docker socket or Docker API.

It needs macOS 26 or later on Apple silicon, plus Apple's `container` CLI 1.5.0 or a compatible release, installed separately with its system service running. The optional local MLX chat also needs a Python environment with MLX-LM 0.32.2. The project is MIT licensed and free. Its builds are signed ad hoc and are not notarized, so macOS may block the first launch until you allow it in System Settings.
