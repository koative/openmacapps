---
name: "ConfigForge"
summary: "Visual editor for SSH and Kubernetes config files, with a cf command for connecting to hosts and switching configs."
category: "Developer tools"
tags:
  - ssh
  - kubernetes
  - developer-utilities
repository: "https://github.com/samzong/ConfigForge"
website: "https://github.com/samzong/ConfigForge"
license: "MIT"
licenseUrl: "https://github.com/samzong/ConfigForge/blob/main/LICENSE"
download: "https://github.com/samzong/ConfigForge/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/samzong/ConfigForge"
  - "https://github.com/samzong/ConfigForge/blob/main/LICENSE"
  - "https://github.com/samzong/ConfigForge/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/samzong/ConfigForge/main/ConfigForge/Assets.xcassets/AppIcon.appiconset/icon_512x512_2x.png"
    credit: "ConfigForge contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

ConfigForge gives you a window for the SSH host entries in ~/.ssh/config and the cluster contexts in your Kubernetes config, so you do not have to edit those text files by hand. It supports the common OpenSSH host directives and detects existing entries, and it keeps each kubeconfig file separate instead of merging clusters. A companion cf command connects to hosts and switches configs from the terminal. It suits developers who maintain many hosts or clusters.

It needs macOS 10.15 or later and is distributed as a DMG for Intel and Apple silicon Macs, or through the Homebrew tap named in the README. The README gives a quarantine-removal command for when the app will not open. It does not say whether the builds are notarized.
