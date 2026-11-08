---
name: "Rancher Desktop"
summary: "A local container and Kubernetes environment with desktop settings and management tools."
category: "Developer tools"
tags: ["containers", "kubernetes", "development"]
alternativeTo: ["docker-desktop"]
repository: "https://github.com/rancher-sandbox/rancher-desktop"
website: "https://rancherdesktop.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/rancher-sandbox/rancher-desktop/blob/main/LICENSE"
download: "https://rancherdesktop.io"
freeDownload: true
homebrew: "rancher"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/rancher-sandbox/rancher-desktop", "https://github.com/rancher-sandbox/rancher-desktop/blob/main/LICENSE", "https://rancherdesktop.io", "https://docs.rancherdesktop.io/getting-started/installation", "https://github.com/rancher-sandbox/rancher-desktop/releases/tag/v1.25.0", "https://raw.githubusercontent.com/rancher-sandbox/rancher-desktop/main/README.md", "https://www.docker.com/pricing/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/rancher-sandbox/rancher-desktop/blob/main/resources/icons/logo-square-512.png", "credit": "Rancher Desktop contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Rancher Desktop runs containers and a local Kubernetes cluster on your Mac. With nerdctl or the Docker CLI you can build, pull and push images and run containers, and a Kubernetes version switch lets you test how an upgrade affects your workloads. On macOS everything runs inside a virtual machine that the app sets up and manages.

The Preferences dialog covers the main choices:

- the container engine, containerd or Docker (moby)
- the Kubernetes version to run
- system resources for the virtual machine
- whether Rancher Desktop starts when you log in

It installs helm, kubectl, nerdctl, docker and Docker Compose. A cluster dashboard shows your local Kubernetes resources, and forwarding a service's port takes one click. The bundled `rdctl` command-line tool can also run a factory reset, which removes most data and the virtual machine.

The app requires macOS 13 Ventura or later on Apple silicon or an Intel CPU with VT-x, plus a persistent internet connection. Kubernetes images download on first start and again whenever you change versions. The documentation recommends 8 GB of memory and 4 CPUs. Separate DMG and ZIP downloads are published for each architecture. The Homebrew cask is not maintained by the Rancher Desktop team, which recommends the DMG from GitHub.

Docker Desktop bundles Docker Engine and Kubernetes as well, and it comes under Docker's plans, from a free Personal tier to paid per-user plans. Rancher Desktop is Apache-2.0 open source from SUSE, and it lets you replace Docker's engine with containerd.
