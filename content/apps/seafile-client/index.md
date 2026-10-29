---
name: "Seafile"
summary: "The desktop sync client for Seafile servers, keeping chosen libraries mirrored between your Mac and the server."
category: "Utilities"
tags:
  - file-sync
  - cloud-storage
  - self-hosted
  - cross-platform
alternativeTo:
  - dropbox
repository: https://github.com/haiwen/seafile-client
website: https://www.seafile.com
license: "Apache-2.0"
licenseUrl: https://github.com/haiwen/seafile-client/blob/master/LICENSE
download: https://www.seafile.com/en/download/
homebrew: "seafile-client"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/haiwen/seafile-client
  - https://github.com/haiwen/seafile-client/blob/master/LICENSE
  - https://github.com/haiwen/seafile/blob/master/LICENSE.txt
  - https://www.seafile.com/en/download/
  - https://github.com/haiwen/seafile-client/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/haiwen/seafile-client/blob/master/data/icons/128x128/apps/seafile.png
    credit: "Seafile Ltd."
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

The Seafile client syncs files between a Mac and a Seafile server. Files on the server are organised into libraries, and you choose which ones to keep as local folders; the client then uploads your changes and downloads edits made on other devices or by people you share with.

It needs an account on a Seafile server, either one you deploy yourself or one provided by your organisation. The download page lists macOS 11 or later. The client interface is Apache-2.0 licensed, while the sync daemon bundled with it comes from the separate seafile repository under GPL-2.0. For browsing server files without syncing them, Seafile offers a separate drive client, SeaDrive.
