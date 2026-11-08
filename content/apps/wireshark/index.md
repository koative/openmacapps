---
name: "Wireshark"
summary: "Captures network traffic or opens saved capture files and decodes each packet protocol by protocol."
category: "Developer tools"
tags: ["network", "packet-analysis", "diagnostics"]
repository: "https://github.com/wireshark/wireshark"
website: "https://www.wireshark.org"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/wireshark/wireshark/blob/master/COPYING"
download: "https://www.wireshark.org/download.html"
freeDownload: true
homebrew: "wireshark-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/wireshark/wireshark", "https://github.com/wireshark/wireshark/blob/master/COPYING", "https://raw.githubusercontent.com/wireshark/wireshark/master/README.md", "https://raw.githubusercontent.com/wireshark/wireshark/master/epan/dissectors/packet-tcp.c", "https://www.wireshark.org/download.html", "https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html", "https://www.wireshark.org/docs/wsug_html_chunked/ChBuildInstallOSXInstall.html"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/wireshark/wireshark/blob/master/resources/icons/wsicon256.png", "credit": "Wireshark contributors", "license": "GPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Wireshark records packets from a network interface, or opens a capture file, and splits every packet into its protocol layers so you can read each field. Select a packet to see its decoded protocol details.

- Filters narrow a capture to the packets you care about, coloring rules are built from filters, and search covers many criteria too.
- Files from tcpdump and many other capture tools open directly, including GZIP, LZ4 and ZSTD-compressed ones.
- Hex dumps saved as text can be imported as packets.
- Captures export to several file formats used by other programs, in whole or in part.
- Statistics tools summarize what a capture contains.

Wireshark only observes. It sends no packets of its own apart from name lookups, which you can turn off, and it raises no alarms the way an intrusion detection system would.

Live capture on a Mac needs the ChmodBPF launch daemon. Run Install ChmodBPF.pkg from the disk image, or open it later through About Wireshark under Folders. The same image has packages that add TShark and other command-line tools to your path. The current 4.6 release is a Universal app for macOS 12 and later, signed by the Wireshark Foundation and notarized, and it updates itself.
