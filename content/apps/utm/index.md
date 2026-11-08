---
name: "UTM"
summary: "Run virtual machines and emulate other systems through a Mac desktop interface."
category: "Developer tools"
tags: ["virtualization", "emulation", "virtual-machines"]
alternativeTo: ["parallels-desktop", "vmware-fusion"]
repository: "https://github.com/utmapp/UTM"
website: "https://getutm.app"
license: "Apache-2.0"
licenseUrl: "https://github.com/utmapp/UTM/blob/main/LICENSE"
download: "https://github.com/utmapp/UTM/releases"
freeDownload: true
homebrew: "utm"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/utmapp/UTM", "https://github.com/utmapp/UTM/blob/main/LICENSE", "https://github.com/utmapp/UTM/releases", "https://getutm.app", "https://docs.getutm.app/installation/macos/", "https://docs.getutm.app/scripting/scripting/", "https://docs.getutm.app/guides/classic-macos/", "https://docs.getutm.app/advanced/snapshots/", "https://docs.getutm.app/advanced/disposable/", "https://www.parallels.com/products/desktop/", "https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/utmapp/UTM/blob/main/Platform/Assets.xcassets/AppIcon.appiconset/icon_256pt.png", "credit": "UTM contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Pick a guest system in UTM, point it at an installer image, and set memory, disks and devices; the virtual machine then runs in its own window.

On Apple silicon, ARM64 guests such as Windows 11 and Linux run through Apple's Hypervisor framework, close to the Mac's own speed. Other processors are emulated through QEMU, which is slower. That covers x86 and x64 guests on Apple silicon. It also covers ARM32, PowerPC, SPARC, MIPS and RISC-V systems, including classic Mac OS.

Apple silicon Macs on macOS 12 Monterey or later can also run macOS guests through Apple's Virtualization framework. Snapshots save a machine's state to return to later. A disposable mode discards changes when the machine stops. AppleScript and the `utmctl` command-line tool create, start, stop and snapshot machines from scripts.

Current releases need macOS 12 or later; the documentation names the last version for macOS 11. The GitHub download and the paid Mac App Store copy have the same features, and the store copy adds automatic updates. UTM is Apache-2.0, but it bundles GPL and LGPL parts from QEMU and other projects, which matters if you redistribute it.

Parallels Desktop and VMware Fusion also run other operating systems as virtual machines on a Mac.
