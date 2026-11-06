---
name: "JuiceMount"
summary: "Mounts a self-hosted JuiceFS volume in Finder for video editing, with a local SSD cache and offline pinning. Beta."
category: "Media"
tags:
  - video
  - storage
  - self-hosted
  - network
repository: "https://github.com/lelanddutcher/juicemount"
website: "https://juicemount.com"
license: "Apache-2.0"
licenseUrl: "https://github.com/lelanddutcher/juicemount/blob/main/LICENSE"
download: "https://github.com/lelanddutcher/juicemount/releases/download/v0.5.0/JuiceMount.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/lelanddutcher/juicemount"
  - "https://github.com/lelanddutcher/juicemount/blob/main/LICENSE"
  - "https://github.com/lelanddutcher/juicemount/releases"
  - "https://juicemount.com"
---

JuiceMount is for editors whose footage lives on a NAS they run themselves. It serves a JuiceFS volume through a local NFS share, so the volume appears in Finder and in an editing app's media browser. Blocks are cached on a local SSD, file metadata is mirrored locally for quick browsing, and pinned files stay usable when the server is unreachable. Writes can go through a local spool before they reach the server. You need your own metadata service (Redis) and S3-compatible storage, for example on TrueNAS with MinIO; it is not a hosted service.

The app requires macOS 26 or later and macFUSE. The README says it was developed and tested on Apple silicon, and Intel builds are unverified. The project is in beta, and its release notes list Finder, offline and multi-Mac checks that are still open. The README says the bundle is Developer ID signed and does not say whether it is notarized. Network traffic goes to the servers you configure, plus GitHub when you choose Check for Updates.
