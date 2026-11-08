---
name: "Multipass"
summary: "Launch and manage lightweight Ubuntu virtual machines from a desktop app or the command line."
category: "Developer tools"
tags:
  - virtual-machines
  - linux
  - cross-platform
repository: https://github.com/canonical/multipass
website: https://canonical.com/multipass
license: "GPL-3.0"
licenseUrl: https://github.com/canonical/multipass/blob/main/LICENSE
download: https://github.com/canonical/multipass/releases/latest
freeDownload: true
homebrew: "multipass"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/canonical/multipass", "https://github.com/canonical/multipass/blob/main/LICENSE", "https://github.com/canonical/multipass/releases/latest", "https://canonical.com/multipass/install", "https://raw.githubusercontent.com/canonical/multipass/main/README.md", "https://canonical.com/multipass", "https://canonical.com/multipass/docs/stable/how-to-guides/install-multipass/", "https://canonical.com/multipass/docs/stable/reference/gui-client/", "https://github.com/canonical/multipass/releases/tag/v1.17.0"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/canonical/multipass/main/src/client/gui/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png
    credit: "Canonical Ltd."
    license: "GPL-3.0 project asset; Canonical and Ubuntu trademarks retained"
---

Multipass starts a fresh Linux virtual machine with one command. Type `multipass launch lts`. It fetches the current Ubuntu LTS image and boots it as a new instance, and `multipass shell` then opens a terminal inside it.

- `multipass exec` runs a single command in an instance without opening a shell.
- cloud-init metadata configures an instance at launch, as it would on AWS, Azure or Google Cloud.
- Snapshots, clones and folder mounts each have their own command.
- Availability zones, new in 1.17, place instances in named zones with isolated subnets to simulate a cloud.

Multipass keeps its images up to date for you. Ubuntu is the default. Version 1.17 adds built-in Debian and Fedora images, the first other distributions with direct support. A GUI client shows the image catalog and your instances, and a tray icon menu manages them too. Some settings exist only in the GUI and others only on the command line.

On macOS the default backend is QEMU on Apple's Hypervisor framework. Version 1.17 previews a driver built on Apple's Virtualization framework, which Canonical plans to use in place of QEMU and VirtualBox. Multipass needs macOS 14 Sonoma or later on an Apple silicon or Intel Mac. The installer is a PKG on GitHub and needs an administrator account. A Homebrew cask exists, but the Multipass team does not support it. The README also warns that the macOS firewall can stop instances from launching.
