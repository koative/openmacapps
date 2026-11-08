---
name: Scrcpy GUI
summary: A graphical front end for scrcpy that builds mirroring commands and manages connected Android devices.
category: Utilities
tags:
  - android
  - screen-mirroring
  - cross-platform
repository: https://github.com/GeorgeEnglezos/Scrcpy-GUI
website: https://github.com/GeorgeEnglezos/Scrcpy-GUI
license: AGPL-3.0
licenseUrl: https://github.com/GeorgeEnglezos/Scrcpy-GUI/blob/main/LICENSE
download: https://github.com/GeorgeEnglezos/Scrcpy-GUI/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/GeorgeEnglezos/Scrcpy-GUI
  - https://github.com/GeorgeEnglezos/Scrcpy-GUI/blob/main/LICENSE
  - https://github.com/GeorgeEnglezos/Scrcpy-GUI/releases
  - https://raw.githubusercontent.com/GeorgeEnglezos/Scrcpy-GUI/main/README.md
  - https://github.com/GeorgeEnglezos/Scrcpy-GUI/releases/tag/v1.7.5
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/GeorgeEnglezos/Scrcpy-GUI/main/ScrcpyGui/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png
    credit: George Englezos and Scrcpy GUI contributors
    license: AGPL-3.0 repository asset; project name and icon retained by the project
---

Scrcpy GUI puts the command-line options of scrcpy, the Android mirroring tool, into a window of switches and fields. You pick settings, watch the matching scrcpy command build as you go, and press Run to mirror and control the phone.

The options are grouped into panels:

- Common settings such as bitrate, resolution, frame rate and orientation
- Audio source, codec and quality, plus screen recording with format controls
- Camera mirroring, virtual displays and keyboard and mouse input
- Network options for wireless connections and SSH tunnels

scrcpy itself must be installed first, for example with Homebrew, and adb usually comes with it. The phone needs USB debugging turned on.

The macOS download for version 1.7.5 is a ZIP holding a DMG and an install script. Inside is a Universal app for Apple silicon and Intel that requires macOS 12 or later. It has no Developer ID signature, so the script clears the quarantine flag before copying the app to Applications. That release was tested on Linux and Windows, and the developer has no Mac to test on. Scrcpy GUI is built with Flutter and also ships for Windows and Linux.

The device list refreshes every two seconds. For wireless use, you connect by cable once, press Connect Wirelessly and unplug, without typing adb commands. Several devices can run at once, and the app tracks all running scrcpy instances. Favourites keep configurations for reuse, with a Most Used list, and can be exported as executable scripts.
