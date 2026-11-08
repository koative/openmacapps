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
sources: ["https://github.com/utmapp/UTM", "https://github.com/utmapp/UTM/blob/main/LICENSE", "https://github.com/utmapp/UTM/releases", "https://getutm.app", "https://docs.getutm.app/installation/macos/", "https://docs.getutm.app/scripting/scripting/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/utmapp/UTM/blob/main/Platform/Assets.xcassets/AppIcon.appiconset/icon_256pt.png", "credit": "UTM contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

UTM creates and runs virtual machines on a Mac. You pick a guest system, point it at an installer image, set memory, disks and devices, and the guest runs in its own window.

On Apple silicon it runs ARM64 guests such as Windows 11 and Linux through Apple's Hypervisor framework, close to the Mac's own speed. Other processors are emulated through QEMU, which is much slower. That covers x86 and x64 guests on Apple silicon, as well as PowerPC, SPARC, MIPS and RISC-V systems, including classic Mac OS.

Apple silicon Macs on macOS 12 Monterey or later can also run macOS guests through Apple's Virtualization framework. The library keeps snapshots, and a disposable mode discards changes when the machine stops. AppleScript and the `utmctl` command-line tool create, start, stop and snapshot machines from scripts.

Parallels Desktop and VMware Fusion do the same job of running Windows and Linux in windows next to macOS. UTM costs nothing and can also emulate other processor architectures and old operating systems.

Current releases need macOS 12 or later; the documentation names the last version that ran on macOS 11. The GitHub download and the paid Mac App Store copy have the same features, and the store copy adds automatic updates. Guest systems and their licenses come separately. UTM is Apache-2.0, but it bundles GPL and LGPL parts from QEMU and other projects, which matters when redistributing it.
