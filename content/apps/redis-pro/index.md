---
name: "Redis Pro"
summary: "A SwiftUI desktop client for browsing keys and inspecting Redis servers."
category: "Developer tools"
tags:
  - redis
  - database
  - database-client
repository: https://github.com/cmushroom/redis-pro
website: https://github.com/cmushroom/redis-pro
license: "GPL-3.0"
licenseUrl: https://github.com/cmushroom/redis-pro/blob/main/LICENSE
download: https://github.com/cmushroom/redis-pro/releases
freeDownload: true
featured: false
maintenance: "unmaintained"
maintenanceNote: "No release since January 2024."
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/cmushroom/redis-pro
  - https://github.com/cmushroom/redis-pro/blob/main/LICENSE
  - https://github.com/cmushroom/redis-pro/releases
  - https://github.com/cmushroom/redis-pro/blob/main/README.md
  - https://github.com/cmushroom/redis-pro/releases/tag/3.1.0
  - https://github.com/Homebrew/homebrew-cask/blob/main/Casks/r/redis-pro.rb
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cmushroom/redis-pro/main/redis-pro/Assets.xcassets/AppIcon.appiconset/redis%40256.png
    credit: "cmushroom and Redis Pro contributors"
    license: "GPL-3.0 project asset based on the Redis logo; Redis trademarks belong to their owner"
---

Redis Pro manages a Redis server from a Mac window: you log in, browse the keys and check how the server is running. Its developer borrowed ideas from Sequel Ace, the MySQL client, and from Alibaba Cloud's DMS console.

- Server info and configuration, and you can change configuration values from the app.
- The slow log.
- The client list, where you can kill a connection.
- Batch deletion of keys.
- Login through SSH.

The README lists macOS 11 or later and Redis 3.x to 6.x. Under the hood, the SwiftUI app talks to the server through RediStack, a Redis client built on SwiftNIO. Three items stay open on the project's to-do list: SSH key login, a terminal and iPad support.

Development has stalled. Release 3.1.0, from January 2024, is the latest, and its DMG holds a Universal app for Apple silicon and Intel with no usable signature, so Gatekeeper rejects it. Homebrew disabled its redis-pro cask in September 2026 for that reason.
