---
name: "Mac Android Subsystem"
summary: "Runs Android apps on Apple silicon Macs in a LineageOS virtual machine, each app in its own Mac window with a Dock icon."
category: "Utilities"
tags:
  - android
  - virtualization
  - menu-bar
  - apple-silicon
repository: https://github.com/harkhowalia-1/MacSubsystemForAndroid
website: https://harkhowalia-1.github.io/MacSubsystemForAndroid/
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/harkhowalia-1/MacSubsystemForAndroid/blob/main/LICENSE
download: https://github.com/harkhowalia-1/MacSubsystemForAndroid/releases
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/harkhowalia-1/MacSubsystemForAndroid
  - https://github.com/harkhowalia-1/MacSubsystemForAndroid/blob/main/LICENSE
  - https://github.com/harkhowalia-1/MacSubsystemForAndroid/releases
  - https://github.com/harkhowalia-1/MacSubsystemForAndroid/blob/main/docs/ARCHITECTURE.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/harkhowalia-1/MacSubsystemForAndroid/releases/download/v0.3.4/MacAndroidSubsystem.dmg
    credit: "Mac Android Subsystem contributors; Android robot by Google"
    license: "GPL-3.0-or-later project asset; the Android robot is reproduced or modified from work by Google under CC BY 3.0"
---

Mac Android Subsystem runs a full Android system (LineageOS, without Google apps or services) in a QEMU virtual machine on Apple's Hypervisor framework, then streams each Android app onto its own Android display and into its own Mac window using the scrcpy protocol. Installed apps get launchers in Launchpad and Spotlight, notifications go to Notification Centre, and the clipboard, game controllers and per-app permission switches are bridged to the Mac.

Apps come from F-Droid, which can be added during setup, or from APK, APKS, APKM and XAPK files opened on the Mac; there is no Google Play Store. It needs an Apple silicon Mac with macOS 15 or later and about 8 GB of disk for the Android image, which the app downloads on first launch. The project describes itself as an early pre-release, and every release so far is marked as a pre-release.
