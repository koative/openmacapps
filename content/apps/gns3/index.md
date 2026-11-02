---
name: "GNS3"
summary: "A graphical network simulator for building, running and testing topologies of routers, switches and virtual machines."
category: "Developer tools"
tags: ["network", "simulation", "virtualization", "cross-platform"]
repository: "https://github.com/GNS3/gns3-gui"
website: "https://www.gns3.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/GNS3/gns3-gui/blob/master/LICENSE"
download: "https://github.com/GNS3/gns3-gui/releases"
homebrew: "gns3"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/GNS3/gns3-gui", "https://github.com/GNS3/gns3-gui/blob/master/LICENSE", "https://github.com/GNS3/gns3-gui/releases", "https://docs.gns3.com/docs/getting-started/installation/mac", "https://docs.gns3.com/docs/getting-started/installation/download-gns3-vm"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/GNS3/gns3-gui/blob/master/resources/images/gns3_icon_256x256.png", "credit": "GNS3 Technologies", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

GNS3 is a lab for network engineers and students. You drag routers, switches, firewalls, hosts and links onto a canvas, start the devices, and open consoles to configure them, much as you would with real equipment. Packet captures can be opened in Wireshark while traffic flows across a link.

The app is the graphical client. The devices themselves run on a GNS3 server: either the local server that comes with the Mac app, or the GNS3 VM in a hypervisor such as VMware or VirtualBox, which the project recommends for heavier or more complex topologies. Vendor device images, such as Cisco's, are not included and must be supplied by you.

The project's Mac guide says GNS3 asks for your administrator password on first launch so its uBridge networking helper can run with root rights. Stable 2.2 and 3.0 releases and 3.1 previews are all published on GitHub; the download link on gns3.com asks you to create an account, while the GitHub release files do not.
