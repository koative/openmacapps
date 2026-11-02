---
name: "Zedis"
summary: "A native Redis and Valkey client built with Rust and GPUI for browsing keys, decoding values and watching server metrics."
category: "Developer tools"
tags:
  - redis
  - database
  - database-client
  - nosql
  - cross-platform
repository: https://github.com/vicanso/zedis
website: https://zedis.net
license: "Apache-2.0"
licenseUrl: https://github.com/vicanso/zedis/blob/main/LICENSE
download: https://github.com/vicanso/zedis/releases
homebrew: "zedis"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/vicanso/zedis
  - https://github.com/vicanso/zedis/blob/main/LICENSE
  - https://github.com/vicanso/zedis#-code-signing-policy
  - https://github.com/vicanso/zedis/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/vicanso/zedis/blob/main/icons/zedis.icns
    credit: "Zedis contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Zedis is a desktop client for Redis written in Rust on the GPUI toolkit from the Zed editor. It scrolls through very large keyspaces, has viewers for every Redis data type, and decodes values stored as JSON, Protobuf, MessagePack, JWT or images. A redis-cli style console with completion, live metrics, a memory analyzer, the slow log and cluster health sit in the same window. It connects over TLS or SSH and supports Cluster and Sentinel setups, Valkey, and with some features greyed out, compatible servers such as Dragonfly.

Connections marked as production open read-only, destructive commands there ask you to type the server's name, and saved secrets are encrypted on the machine. The project states that the app sends no telemetry or crash reports.

macOS builds for Apple silicon and Intel are signed and notarized. Each release also carries an optional build using an experimental rendering engine, labelled "fast"; the standard build is the default.
