---
name: "OpenMTP"
summary: "A two-pane file manager for moving files between a Mac and Android phones or cameras over MTP."
category: "Utilities"
tags:
  - android
  - file-transfer
  - usb
  - files
alternativeTo:
  - android-file-transfer
repository: https://github.com/ganeshrvel/openmtp
website: https://openmtp.ganeshrvel.com
license: "MIT"
licenseUrl: https://github.com/ganeshrvel/openmtp/blob/master/LICENSE
download: https://github.com/ganeshrvel/openmtp/releases/latest
freeDownload: true
homebrew: "openmtp"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/ganeshrvel/openmtp", "https://github.com/ganeshrvel/openmtp/blob/master/LICENSE", "https://github.com/ganeshrvel/openmtp/releases", "https://openmtp.ganeshrvel.com", "https://formulae.brew.sh/cask/openmtp", "https://raw.githubusercontent.com/ganeshrvel/openmtp/master/README.md", "https://github.com/ganeshrvel/openmtp/releases/tag/v3.3.0"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ganeshrvel/openmtp/master/build/icon.png
    credit: "Ganesh Rathinavel"
    license: "MIT repository asset; OpenMTP name and logo retained by the author"
---

OpenMTP copies files between your Mac and an Android phone, camera or other device that speaks MTP over a USB cable. Unlock the phone and choose File transfer in its USB notification. The Mac and the device then appear side by side, and you drag files across or copy and paste with Command-C and Command-V.

- Files larger than 4 GB copy, several at a time.
- Files and folders on the phone can be renamed.
- A Storage button switches between internal memory and an SD card.
- Grid or list view, dark mode and keyboard shortcuts cover navigation.

Since version 3.0 it uses Kalam, an MTP kernel written for the app. The project quotes between 20 and 30 MB/s for budget and mid-range phones, and between 100 and 120 MB/s for high-end models. Every transfer needs the cable, as there is no Wi-Fi mode. If the window stays blank, quit apps that read USB devices, such as Preview or Android File Transfer. On Samsung phones, uninstall Smart Switch.

OpenMTP requires macOS 10.14 or later, and Kalam updates reach only macOS 11 and later. Macs on 10.13 or earlier need version 3.1.15 in Legacy MTP mode. Separate Apple silicon and Intel builds are published, and the Apple silicon DMG holds a Developer ID-signed, notarized app. Copycat sites use the OpenMTP name. The official sources are the project site, the GitHub repository and the Homebrew cask.

Google's Android File Transfer covers the same job of moving files between a Mac and an Android phone over USB.
