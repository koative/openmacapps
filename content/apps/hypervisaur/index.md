---
name: "Hypervisaur"
summary: "Runs macOS, Linux and Windows 11 virtual machines on Apple silicon, with a guest agent for shells, logs and file copies."
category: "Developer tools"
tags:
  - virtual-machines
  - virtualization
  - windows
  - linux
  - mcp
  - testing
alternativeTo:
  - parallels-desktop
  - vmware-fusion
repository: "https://github.com/Zesty0wl/hypervisaur"
website: "https://github.com/Zesty0wl/hypervisaur"
license: "BSD-2-Clause"
licenseUrl: "https://github.com/Zesty0wl/hypervisaur/blob/main/LICENSE"
download: "https://github.com/Zesty0wl/hypervisaur/releases/latest"
freeDownload: true
featured: false
added: "2026-11-11"
verified: "2026-11-11"
icon: "./assets/icon.png"
screenshots:
  - src: "./assets/library.webp"
    alt: "The library drawn as an equipment rack, with a controller unit showing memory and storage meters and six virtual machines below it, each with status lights, a screen thumbnail and usage meters."
    source: "https://github.com/Zesty0wl/hypervisaur/blob/38082e5c9ba04c32ea1eee42e4b2a5019a19e631/assets/Screenshots/Library.png"
    credit: "Neil Johnson"
  - src: "./assets/windows.webp"
    alt: "Windows 11 at its desktop inside a Hypervisaur window."
    source: "https://github.com/Zesty0wl/hypervisaur/blob/38082e5c9ba04c32ea1eee42e4b2a5019a19e631/assets/Screenshots/Windows.png"
    credit: "Neil Johnson"
sources:
  - "https://github.com/Zesty0wl/hypervisaur"
  - "https://github.com/Zesty0wl/hypervisaur/blob/main/LICENSE"
  - "https://github.com/Zesty0wl/hypervisaur/releases/latest"
  - "https://github.com/Zesty0wl/hypervisaur/releases/tag/v0.10.0"
  - "https://github.com/insidegui/VirtualBuddy"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Zesty0wl/hypervisaur/blob/38082e5c9ba04c32ea1eee42e4b2a5019a19e631/assets/AppIcon/Hypervisaur-2048.png"
    credit: "Neil Johnson"
    license: "BSD-2-Clause; upstream app icon, trademarks retained"
  - path: "./assets/library.webp"
    source: "https://github.com/Zesty0wl/hypervisaur/blob/38082e5c9ba04c32ea1eee42e4b2a5019a19e631/assets/Screenshots/Library.png"
    credit: "Neil Johnson"
    license: "BSD-2-Clause; upstream README screenshot, trademarks retained"
  - path: "./assets/windows.webp"
    source: "https://github.com/Zesty0wl/hypervisaur/blob/38082e5c9ba04c32ea1eee42e4b2a5019a19e631/assets/Screenshots/Windows.png"
    credit: "Neil Johnson"
    license: "BSD-2-Clause; upstream README screenshot, Windows is a trademark of Microsoft"
---

Hypervisaur creates and runs macOS, Linux and Windows 11 virtual machines on an Apple silicon Mac. Its library draws each machine as a unit in an equipment rack, with lights for power, disk and agent activity, a live thumbnail of its screen and meters for processor and memory use. Click a unit to start it.

macOS and Linux guests run on Apple's Virtualization framework, as they do in VirtualBuddy, which Hypervisaur was forked from. Linux images for Ubuntu, Fedora, Debian and Kali download from inside the app. Windows 11 for ARM runs through QEMU instead. Hypervisaur checks for QEMU, swtpm, wimlib and Samba, installs any that are missing with Homebrew, and can install Windows unattended with a local account. You supply Microsoft's ARM64 disc image and your own Windows license.

An agent inside each guest handles jobs that would otherwise need network setup or SSH:

- a shell in Terminal: PowerShell on Windows, root on Linux, your own shell on macOS
- the guest's logs, followed as they are written
- files and folders dragged in, and out of macOS and Windows guests
- the `hvctl` command, for the same tasks from scripts

Clones share storage with the machine they came from until they change. A Storage window shows how much deleting each machine would actually free. Guests can use NAT or bridged networking and share folders and the clipboard, and macOS and Windows guests can save their state. Machines made in VirtualBuddy or UTM can be imported. A bundled MCP server lets a coding agent create a Windows machine, start it and look at its screen.

Parallels Desktop and VMware Fusion pass USB devices through to Windows, which Hypervisaur cannot do yet. Its Windows support also depends on QEMU parts from Homebrew, and Secure Boot is skipped.

The app needs macOS 14 or later on Apple silicon. It ships as a pkg installer signed with a Developer ID and notarized, and checks GitHub once a day for new releases.
