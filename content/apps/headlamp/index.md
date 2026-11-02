---
name: "Headlamp"
summary: "A Kubernetes dashboard from SIG UI that runs as a desktop app for browsing, editing and debugging clusters from your kubeconfig."
category: "Developer tools"
tags:
  - kubernetes
  - containers
  - development
  - cross-platform
alternativeTo:
  - lens
repository: https://github.com/kubernetes-sigs/headlamp
website: https://headlamp.dev
license: "Apache-2.0"
licenseUrl: https://github.com/kubernetes-sigs/headlamp/blob/main/LICENSE
download: https://headlamp.dev/docs/latest/installation/desktop/mac-installation
homebrew: "headlamp"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/kubernetes-sigs/headlamp
  - https://github.com/kubernetes-sigs/headlamp/blob/main/LICENSE
  - https://headlamp.dev/docs/latest/installation/desktop/mac-installation
  - https://github.com/kubernetes-sigs/headlamp/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/kubernetes-sigs/headlamp/blob/main/frontend/public/icon.icns
    credit: "Headlamp contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Headlamp is a general-purpose Kubernetes user interface, maintained under the Kubernetes SIG UI. The desktop app reads the clusters in your existing kubeconfig and lets you switch between them, list and inspect workloads and other resources, follow logs, open a shell in a container, and edit manifests in place.

The interface follows each user's cluster permissions, hiding actions such as delete or update when the account is not allowed to perform them. Plugins can add views and features. The same project can also be deployed inside a cluster as a web dashboard.

Separate macOS disk images are published for Apple silicon and Intel on the GitHub releases page. Builds installed from those images do not update themselves; download a newer release to upgrade.
