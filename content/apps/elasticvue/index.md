---
name: "Elasticvue"
summary: "A desktop GUI for Elasticsearch clusters: browse indices and shards, search and edit documents, and run REST queries."
category: "Developer tools"
tags:
  - database-client
  - database
  - search
  - cross-platform
repository: https://github.com/cars10/elasticvue
website: https://elasticvue.com
license: "MIT"
licenseUrl: https://github.com/cars10/elasticvue/blob/master/LICENSE
download: https://github.com/cars10/elasticvue/releases
homebrew: "elasticvue"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/cars10/elasticvue
  - https://github.com/cars10/elasticvue/blob/master/LICENSE
  - https://github.com/cars10/elasticvue/releases
  - https://elasticvue.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cars10/elasticvue/master/src-tauri/icons/icon.icns
    credit: "Carsten König and Elasticvue contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Elasticvue is a graphical client for managing Elasticsearch. It gives an overview of cluster health and nodes, manages indices, aliases and shards, lets you search, view and edit documents, and has a REST console for sending raw queries. Snapshot repositories and snapshots can be managed from the same window, and the project supports old, end-of-life Elasticsearch versions as well as current ones.

The desktop app is the recommended way to run it, because it talks to clusters directly and needs no CORS changes on the server; it also accepts self-signed certificates and updates itself. Mac DMGs are published for Apple silicon and Intel. The same interface is available as a browser extension, a hosted web version and a Docker image.
