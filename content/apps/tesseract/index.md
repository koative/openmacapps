---
name: "TESSERaCT"
summary: "Creates and runs macOS, Linux and Windows 11 Arm virtual machines, with a daily catalogue of ARM64 systems to try."
category: "Developer tools"
tags: ["virtual-machines", "virtualization", "linux", "menu-bar", "mcp"]
repository: "https://github.com/starbudweiser/TESSERaCT"
website: "https://github.com/starbudweiser/TESSERaCT"
license: "Apache-2.0"
licenseUrl: "https://github.com/starbudweiser/TESSERaCT/blob/main/LICENSE"
download: "https://github.com/starbudweiser/TESSERaCT/releases/latest"
macos: "27"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources: ["https://github.com/starbudweiser/TESSERaCT", "https://github.com/starbudweiser/TESSERaCT/blob/main/LICENSE", "https://github.com/starbudweiser/TESSERaCT/releases/tag/v1.0.1", "https://github.com/starbudweiser/TESSERaCT/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The TESSERaCT Discover page: today's and this week's featured systems with Download and Create Machine buttons, and a grid of ARM64 systems such as FreeBSD, OpenBSD, NetBSD and Alpine Linux.", "source": "https://github.com/starbudweiser/TESSERaCT/blob/main/docs/screenshot.png", "credit": "TESSERaCT authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/TESSERaCT/blob/main/docs/screenshot.png", "credit": "TESSERaCT authors", "license": "Apache-2.0 (TESSERaCT repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/TESSERaCT/releases/download/v1.0.1/TESSERaCT.zip", "credit": "TESSERaCT authors", "license": "Apache-2.0 (TESSERaCT repository)"}]
icon: ./assets/icon.png
---

TESSERaCT creates and runs virtual machines on an Apple silicon Mac. Its main page, Discover, lists ARM64 systems you can try with one button that downloads the image and creates the machine. The list covers BSDs, Linux distributions such as Debian, NixOS, Alpine and Gentoo, and less common systems like Haiku, Redox OS and OpenWrt. It is refreshed from a catalogue on GitHub each day. Each download resumes after an interruption and is checked against the publisher's checksum.

The app is a fork of SwiftVM, and it keeps that app's engine and features:

- macOS guests and Linux cloud images that set themselves up, plus Linux desktops such as GNOME, KDE Plasma and Xfce.
- Windows 11 for Arm, downloaded from Microsoft and installed without manual steps.
- Snapshots, duplicates and templates that share unchanged disk blocks on APFS.
- Suspend and resume, shared folders and clipboard, port forwarding, USB devices and disk images.
- `ssh <machine>` from the Mac, a `tctl` command-line tool and an MCP server for scripts and AI agents.

On top of SwiftVM, TESSERaCT imports machines from UTM, VirtualBox, VMware Fusion and Parallels. It can also enlarge a machine's disk and extend the guest partition to fill it. Machines can be created from an ISO or IPSW file dropped on the window.

The app lives in the menu bar and its interface is in French, English, Spanish and Italian. It requires macOS 27 on Apple silicon. The release is a zip of the app, Developer ID signed and notarized.
