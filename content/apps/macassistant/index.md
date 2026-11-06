---
name: "MacAssistant"
summary: "Native SwiftUI toolkit for cleaning up a Mac, repairing quarantined apps, cloning apps and sideloading IPA files."
category: "Utilities"
tags:
  - cleanup
  - sideloading
  - native
repository: "https://github.com/iosrxwy/MacAssistant"
website: "https://github.com/iosrxwy/MacAssistant"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/iosrxwy/MacAssistant/blob/master/LICENSE"
download: "https://github.com/iosrxwy/MacAssistant/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/iosrxwy/MacAssistant"
  - "https://github.com/iosrxwy/MacAssistant/blob/master/LICENSE"
  - "https://github.com/iosrxwy/MacAssistant/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/iosrxwy/MacAssistant/master/Resources/AppIcon.png"
    credit: "MacAssistant contributors"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

MacAssistant is a native SwiftUI toolkit for looking after a Mac. It previews caches, Derived Data, Docker and Time Machine items before anything is deleted, uninstalls apps to the Trash, and repairs apps that macOS blocks as damaged or quarantined. It can also make isolated copies of apps, and it has sideloading tools for IPA and .deb files, including plugin injection, signing and Mach-O inspection. It suits people who want these tasks in one app.

The universal build runs on macOS 13 or later, on Apple silicon and Intel. The release is ad-hoc signed and not notarized, so the first launch has to be allowed under System Settings > Privacy & Security > Open Anyway; the README advises against turning Gatekeeper off. The IPA workbench and Mac app injection are marked beta. The interface has six languages, but the screenshots are in Simplified Chinese.
