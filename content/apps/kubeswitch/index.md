---
name: "KubeSwitch"
summary: "Lists your Kubernetes cluster contexts in the menu bar and changes the current one."
category: "Developer tools"
tags:
  - kubernetes
  - menu-bar
  - developer-utilities
repository: "https://github.com/nsriram/KubeSwitch"
website: "https://github.com/nsriram/KubeSwitch"
license: "MIT"
licenseUrl: "https://github.com/nsriram/KubeSwitch/blob/master/LICENSE"
download: "https://github.com/nsriram/KubeSwitch/releases/download/v1.0.1/KubeSwitch.app.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
maintenance: unmaintained
maintenanceNote: "No release or commit since May 2019, as of 2026-11-06."
sources:
  - "https://github.com/nsriram/KubeSwitch/blob/master/Readme.md"
  - "https://github.com/nsriram/KubeSwitch/blob/master/KubeSwitch/KubeConfigReader.swift"
  - "https://github.com/nsriram/KubeSwitch/blob/master/KubeSwitch/KubeConfig.swift"
  - "https://github.com/nsriram/KubeSwitch"
  - "https://github.com/nsriram/KubeSwitch/blob/master/LICENSE"
  - "https://github.com/nsriram/KubeSwitch/releases/download/v1.0.1/KubeSwitch.app.zip"
  - "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_config/kubectl_config_use-context/"
  - "https://github.com/nsriram/KubeSwitch/blob/master/KubeSwitch/KubeContextMenu.swift"
---

KubeSwitch puts the Kubernetes contexts on your Mac in a menu bar list, marks the current one, and makes whichever you pick current. That is the whole job, and it saves typing `kubectl config use-context` each time you move between clusters.

The latest release, 1.0.1 from May 2019, is a ZIP holding an Intel-only (x86_64) app that declares macOS 10.13 or later. Apple silicon Macs run it through Rosetta 2. It is signed with a Mac Developer certificate, an identity meant for development, and Gatekeeper rejects it. Allow it under Privacy & Security in System Settings the first time you open it.

Sriram Narasimhan wrote KubeSwitch in Swift and released it under the MIT license. Its README gives one Terminal command for starting it, `open -a KubeSwitch`.

The app reads `~/.kube/config` and nothing else. When you switch, it sets `current-context` in that file and writes the file back, so kubectl and any other tool reading the file see the change on their next command. A `KUBECONFIG` variable pointing at other files is ignored.
