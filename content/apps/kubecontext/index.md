---
name: "KubeContext"
summary: "Switches Kubernetes contexts from the menu bar and manages kubeconfig entries, namespaces and colors."
category: "Developer tools"
tags:
  - kubernetes
  - menu-bar
repository: https://github.com/turkenh/KubeContext
website: https://github.com/turkenh/KubeContext
license: "Apache-2.0"
licenseUrl: https://github.com/turkenh/KubeContext/blob/master/LICENSE
download: https://github.com/turkenh/KubeContext/releases/latest
freeDownload: true
homebrew: "kubecontext"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/turkenh/KubeContext
  - https://github.com/turkenh/KubeContext/blob/master/LICENSE
  - https://github.com/turkenh/KubeContext/releases/latest
  - https://formulae.brew.sh/cask/kubecontext
  - https://github.com/turkenh/KubeContext/blob/master/README.md
  - https://github.com/turkenh/KubeContext/releases/tag/v2.0.1
  - https://github.com/turkenh/KubeContext/commits/master
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/turkenh/KubeContext/master/KubeContext/Assets.xcassets/AppIcon.appiconset/icon_256@1x.png
    credit: "Hasan Turken"
    license: "Apache-2.0 repository asset; name and icon retained by Hasan Turken"
---

KubeContext shows the active Kubernetes context in the menu bar and switches to another one from its menu. Each context can be given its own color.

A management window renames contexts and sets their default namespace. Contexts can be imported from other kubeconfig files or exported to them, and the extension objects minikube adds to kubeconfig files are supported.

The latest release, v2.0.1, came out in October 2021, though the repository received a parsing fix in February 2025. Its ZIP holds a Universal app for Apple silicon and Intel that needs macOS 11.1, Developer ID-signed and notarized. The app inside reports version 2.0.2.

The GitHub and Homebrew builds include every feature at no cost. The Mac App Store version sells the pro features as in-app purchases.
