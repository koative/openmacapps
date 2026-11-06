---
name: "Redis.app"
summary: "Mac app that bundles Redis server binaries so you can run a local Redis instance without installing it separately."
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
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jpadilla/redisapp"
  - "https://github.com/jpadilla/redisapp/blob/master/LICENSE"
  - "https://github.com/jpadilla/redisapp/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jpadilla/redisapp/releases/download/4.0.2-build.1/Redis.zip"
    credit: "Redis.app contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Redis.app lets you run a Redis server on a Mac by opening an app instead of installing Redis separately. The README explains how to add the binaries bundled inside the app to your PATH, and its version numbers follow the Redis version included in each build. It suits developers who need a local Redis for testing.

The release zip declares macOS 10.10 or later, contains an Intel-only (x86_64) build, and is notarized, so it opens without the first-launch override. The project has had no release since November 2017.
