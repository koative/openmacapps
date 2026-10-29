---
name: "Nextcloud Desktop"
summary: "The official sync client that keeps chosen folders on your Mac in step with your files on a Nextcloud server."
category: "Utilities"
tags:
  - file-sync
  - cloud-storage
  - self-hosted
  - cross-platform
alternativeTo:
  - dropbox
repository: https://github.com/nextcloud/desktop
website: https://nextcloud.com
license: "GPL-2.0-or-later"
licenseUrl: https://github.com/nextcloud/desktop/blob/master/COPYING
download: https://nextcloud.com/install/#install-clients
homebrew: "nextcloud"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/nextcloud/desktop
  - https://github.com/nextcloud/desktop/blob/master/COPYING
  - https://github.com/nextcloud/desktop/blob/master/REUSE.toml
  - https://nextcloud.com/install/#install-clients
  - https://github.com/nextcloud/desktop/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/nextcloud/desktop/blob/master/theme/colored/Nextcloud-macOS-icon.svg
    credit: "Nextcloud GmbH"
    license: "Nextcloud trademark (LicenseRef-NextcloudTrademarks); not covered by the GPL-2.0-or-later code license"
---

Nextcloud Desktop is the Mac client for Nextcloud Files. You sign in to a Nextcloud server, pick which folders to sync, and the client keeps local copies and the server version in step, uploading your changes and pulling in edits made on other devices or by people you share with.

It does nothing on its own: you need an account on a Nextcloud server, either one you run yourself or one from a hosting provider. The current release requires macOS 13 or later; for older systems Nextcloud lists a legacy build that runs on macOS 11 and later. The app is free from nextcloud.com, which links to the builds published on GitHub.
