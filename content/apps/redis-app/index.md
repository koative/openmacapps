---
name: "Redis.app"
summary: "Runs a Redis server from an app you drag into Applications, with the Redis command-line tools bundled inside."
category: "Developer tools"
tags:
  - redis
  - database
  - nosql
repository: "https://github.com/jpadilla/redisapp"
website: "https://github.com/jpadilla/redisapp"
license: "MIT"
licenseUrl: "https://github.com/jpadilla/redisapp/blob/master/LICENSE"
download: "https://github.com/jpadilla/redisapp/releases/download/4.0.2-build.1/Redis.zip"
freeDownload: true
maintenance: unmaintained
maintenanceNote: "No release since November 2017."
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jpadilla/redisapp/blob/master/README.md"
  - "https://jpadilla.github.io/redisapp/"
  - "https://github.com/jpadilla/redisapp/releases/tag/4.0.2-build.1"
  - "https://github.com/jpadilla/redisapp"
  - "https://github.com/jpadilla/redisapp/blob/master/LICENSE"
  - "https://github.com/jpadilla/redisapp/releases"
  - "https://github.com/jpadilla/redisapp/blob/master/Redis/AppDelegate.swift"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jpadilla/redisapp/releases/download/4.0.2-build.1/Redis.zip"
    credit: "Redis.app contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Redis.app starts a Redis server when you open it and stops it when you quit, with no separate install. It lives in the menu bar, where the menu shows the bundled Redis version and reads "Running on Port 6379". The server keeps its data in a RedisData folder inside Documents, with logs in a Logs folder below it.

From the same menu you can open redis-cli in a new iTerm window, or in Terminal when iTerm is not installed, and open the logs folder.

The bundle carries redis-server, redis-cli, redis-sentinel, redis-benchmark and the two redis-check tools in `Contents/Resources/Vendor/redis/bin`. To use them from your own shell, add that folder to your PATH, either in your shell profile or with a file in `/etc/paths.d`. The README gives both commands.

The latest build, 4.0.2-build.1 from November 2017, bundles Redis 4.0.2, and none has followed it. The first part of each version number names the Redis release inside; the build number after it tracks changes to the app itself. The ZIP holds an Intel-only (x86_64) app that declares macOS 10.10 or later, so Apple silicon Macs run it through Rosetta 2. That build is Developer ID-signed and notarized.

José Padilla forked the project from Mongodb.app and adapted it for Redis.
