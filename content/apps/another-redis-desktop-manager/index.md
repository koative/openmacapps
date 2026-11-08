---
name: "Another Redis Desktop Manager"
summary: "A desktop client for browsing and editing Redis keys, with SSH tunnels, cluster support, and a command console."
category: "Developer tools"
tags:
  - redis
  - database
  - nosql
  - cross-platform
  - database-client
repository: "https://github.com/qishibo/AnotherRedisDesktopManager"
website: "https://github.com/qishibo/AnotherRedisDesktopManager"
license: "MIT"
licenseUrl: "https://github.com/qishibo/AnotherRedisDesktopManager/blob/master/LICENSE"
download: "https://github.com/qishibo/AnotherRedisDesktopManager/releases"
freeDownload: true
homebrew: "another-redis-desktop-manager"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/qishibo/AnotherRedisDesktopManager"
  - "https://github.com/qishibo/AnotherRedisDesktopManager/blob/master/LICENSE"
  - "https://github.com/qishibo/AnotherRedisDesktopManager/releases"
  - https://raw.githubusercontent.com/qishibo/AnotherRedisDesktopManager/master/README.md
  - https://github.com/qishibo/AnotherRedisDesktopManager/releases/tag/v1.7.4
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/qishibo/AnotherRedisDesktopManager/master/pack/electron/icons/icon.png"
    credit: "qishibo and Another Redis Desktop Manager contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Another Redis Desktop Manager connects to a Redis server and lists its keys, as a flat list or a folder tree. You pick a key to read or edit its value, or open a console tab to type commands directly.

Connections can go over SSH tunnels with private keys, use SSL/TLS, and reach clusters or Sentinel setups. Big keys are loaded with SCAN, and you can still load every key in a database at once when you need to. A read-only mode guards against accidental writes.

- Viewers decode JSON, MessagePack, Protobuf, Java and Pickle serializations, and Brotli, Gzip and Deflate values.
- Streams show their groups and consumers, and hash fields can carry their own TTL on Redis 7.4 or later.
- Memory analysis, a slow log and a live command monitor are built in.
- Keys can be exported and imported, and batches of commands can be loaded from a file.

The 1.7.4 release on GitHub has separate disk images for Apple silicon and Intel. The Apple silicon app is notarized and requires macOS 10.11 or later. The same app is sold on the Mac App Store as a way to support the developer, and the GitHub build is free under the MIT license. Windows and Linux builds are published too.

Recent releases added connection groups, a connection test and support for TimeSeries, vector and array types.
