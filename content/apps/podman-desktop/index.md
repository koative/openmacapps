---
name: "Podman Desktop"
summary: "Runs and manages containers, images, pods and Kubernetes clusters from a desktop window."
category: "Developer tools"
tags: ["containers", "kubernetes", "development"]
alternativeTo: ["docker-desktop"]
repository: "https://github.com/podman-desktop/podman-desktop"
website: "https://podman-desktop.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/podman-desktop/podman-desktop/blob/main/LICENSE"
download: "https://podman-desktop.io/downloads"
freeDownload: true
homebrew: "podman-desktop"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/podman-desktop/podman-desktop", "https://github.com/podman-desktop/podman-desktop/blob/main/LICENSE", "https://podman-desktop.io/downloads", "https://github.com/podman-desktop/podman-desktop/blob/main/README.md", "https://podman-desktop.io/docs/installation/macos-install", "https://podman-desktop.io/docs/podman/creating-a-podman-machine", "https://podman-desktop.io/docs/kind/installing-extension", "https://podman-desktop.io/docs/minikube/installing-extension", "https://podman-desktop.io/docs/migrating-from-docker", "https://github.com/podman-desktop/podman-desktop/releases/tag/v1.30.5"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/podman-desktop/podman-desktop/blob/main/buildResources/icon-512x512.png", "credit": "Podman Desktop contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Podman Desktop puts your containers, images, pods and Kubernetes clusters in one window. You build an image, start a container or pod from it and debug it without typing every command yourself.

On first launch it checks for the Podman engine and offers to install it, then helps you create a Podman machine, the Linux virtual machine that runs containers on a Mac. It keeps Podman updated afterwards. A menu bar icon shows the engine's status and switches the active Kubernetes context.

- Pods can run on the local engine or in Kubernetes, and a pod can be converted to run on Kubernetes.
- Besides Podman, it manages the Docker engine, Lima virtual machines and crc.
- It can deploy to local or remote Kubernetes clusters.
- Proxy settings and OCI image registries are configured in the app.
- Extensions create local Kubernetes clusters with Kind, which comes built in, or Minikube.

The project recommends the DMG installer, which bundles Podman and the Podman CLI. Homebrew installs the app and the engine too, but the documentation advises against it because the stability of Homebrew installs is not guaranteed. If Podman already came from Homebrew, remove it before using the DMG. Releases come as Universal, Apple silicon and Intel builds. Air-gapped versions for Apple silicon and Intel are also offered.

Docker Desktop is built around the Docker engine. Podman Desktop centers on Podman, though it can also manage a Docker engine you already run. Its Docker compatibility feature lets your Docker commands and tools run on the Podman engine without reconfiguration.
