---
name: "86Box"
summary: "A low-level emulator of IBM PCs and compatibles from 1981 into the late 1990s, for running DOS, early Windows and OS/2."
category: "Developer tools"
tags:
  - emulation
  - retro
  - dos
  - virtual-machines
  - cross-platform
repository: https://github.com/86Box/86Box
website: https://86box.net
license: "GPL-2.0"
licenseUrl: https://github.com/86Box/86Box/blob/master/COPYING
download: https://github.com/86Box/86Box/releases
homebrew: "86box"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/86Box/86Box
  - https://github.com/86Box/86Box/blob/master/COPYING
  - https://86box.readthedocs.io/en/latest/usage/gettingstarted.html
  - https://github.com/86Box/86Box/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/86Box/86Box/blob/master/src/mac/icons/release/86Box.icns
    credit: "86Box contributors"
    license: "GPL-2.0; upstream project asset, trademarks retained"
---

86Box emulates historic x86 PCs at the hardware level, from the original IBM PC 5150 through Pentium II and Celeron era machines. Instead of a generic virtual machine, you pick a specific motherboard and add period video cards, sound cards, network adapters and disk controllers, which makes it useful for running MS-DOS, old Windows versions, OS/2, early Linux and software that depends on exact hardware behaviour.

A built-in manager keeps several emulated machines side by side. The emulator needs a set of ROM dumps from real hardware that is downloaded separately from the project's roms repository; without it, machines will not start.

The macOS download is a universal build for Apple silicon and Intel Macs and requires macOS 10.14 or later. Most emulation runs on a single thread, so a fast processor matters more than core count.
