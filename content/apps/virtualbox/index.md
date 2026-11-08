---
name: "VirtualBox"
summary: "Oracle's general-purpose virtualizer for running other operating systems in windows on your Mac."
category: "Developer tools"
tags:
  - virtual-machines
  - cross-platform
  - linux
alternativeTo:
  - parallels-desktop
  - vmware-fusion
repository: https://github.com/VirtualBox/virtualbox
website: https://www.virtualbox.org
license: "GPL-3.0-only"
licenseUrl: https://github.com/VirtualBox/virtualbox/blob/main/COPYING
download: https://www.virtualbox.org/wiki/Downloads
freeDownload: true
homebrew: "virtualbox"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/VirtualBox/virtualbox", "https://github.com/VirtualBox/virtualbox/blob/main/COPYING", "https://www.virtualbox.org/wiki/Downloads", "https://formulae.brew.sh/cask/virtualbox", "https://www.virtualbox.org", "https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html", "https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/installation.html", "https://raw.githubusercontent.com/VirtualBox/virtualbox/main/README.md", "https://www.parallels.com/products/desktop/"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/VirtualBox/virtualbox/main/src/VBox/Artwork/OSE/virtualbox.svg
    credit: "Oracle"
    license: "Trademark of Oracle; not covered by the GPL-3.0 code license"
---

VirtualBox runs another operating system in a window on your Mac. You create a virtual machine, give it a virtual disk and an installer image, and the guest boots alongside macOS.

Which guests run depends on the chip. On an Intel Mac, VirtualBox runs x86 systems such as Windows, Linux and Solaris. On Apple silicon it runs a selection of Arm guests, including Arm builds of Linux.

- Snapshots save a machine's state, and you can branch from any of them into a tree.
- Guest Additions, installed inside the guest, add shared folders, a shared clipboard, drag and drop and automatic screen resizing.
- Machines import and export as OVF appliances, including ones made in other virtualization software.
- The `VBoxManage` command reads and changes machine settings from the terminal.

Oracle publishes separate installers for Intel Macs and Apple silicon Macs, each a DMG holding a PKG. Version 7.2 lists macOS 13 Ventura through 26 Tahoe as supported hosts. The base package is GPL-3.0, and some interface headers are also offered under the CDDL. The Extension Pack is a separate download under Oracle's Personal Use and Educational License, not the GPL.

Parallels Desktop also runs Windows and Linux on a Mac, and Microsoft authorizes it for Windows 11 on Apple silicon. Its maker lists yearly plans and a free trial. VirtualBox's base package costs nothing and its source is public.
