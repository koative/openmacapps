---
name: "CoreOS VM"
summary: "Menu bar app that runs a local CoreOS virtual machine for building Docker and rkt containers on macOS."
category: "Developer tools"
tags:
  - containers
  - virtualization
  - menu-bar
repository: "https://github.com/TheNewNormal/coreos-osx"
website: "https://github.com/TheNewNormal/coreos-osx"
license: "Apache-2.0"
licenseUrl: "https://github.com/TheNewNormal/coreos-osx/blob/master/LICENSE"
download: "https://github.com/TheNewNormal/coreos-osx/releases/download/v1.5.4/CoreOS_v1.5.4.dmg"
freeDownload: true
maintenance: unmaintained
maintenanceNote: "No release since December 2016."
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/TheNewNormal/coreos-osx"
  - "https://github.com/TheNewNormal/coreos-osx/blob/master/LICENSE"
  - "https://github.com/TheNewNormal/coreos-osx/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/TheNewNormal/coreos-osx/releases/download/v1.5.4/CoreOS_v1.5.4.dmg"
    credit: "TheNewNormal (coreos-osx contributors)"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

CoreOS VM starts a CoreOS virtual machine on the Mac's Hypervisor framework through the corectl tool, so no VirtualBox is needed. It is meant for building and testing Docker and rkt images locally. The VM gets a Docker socket, the Docker client and helper scripts are installed into `~/coreos-osx/bin`, and your home folder is shared into the VM over NFS.

The README lists macOS 10.10.3 or later and requires the separate Corectl App; iTerm2 is installed automatically if it is missing. The release DMG contains an Intel-only (x86_64) build that is signed with a Developer ID certificate but not notarized, so the first launch must be allowed in System Settings. The project has had no release since December 2016.
