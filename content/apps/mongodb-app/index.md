---
name: "MongoDB.app"
summary: "Runs a local MongoDB server for development from a menu bar app you drag to Applications and open."
category: "Developer tools"
tags:
  - database
  - mongodb
repository: https://github.com/gcollazo/mongodbapp
website: https://gcollazo.com/mongodb-app/
license: "MIT"
licenseUrl: https://github.com/gcollazo/mongodbapp/blob/master/LICENSE
download: https://github.com/gcollazo/mongodbapp/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/gcollazo/mongodbapp
  - https://github.com/gcollazo/mongodbapp/blob/master/LICENSE
  - https://github.com/gcollazo/mongodbapp/releases
  - https://formulae.brew.sh/cask/gcollazo-mongodb
  - https://raw.githubusercontent.com/gcollazo/mongodbapp/master/README.md
  - https://raw.githubusercontent.com/gcollazo/mongodbapp/master/MongoDB/AppDelegate.swift
  - https://gcollazo.com/mongodb-app/
  - https://github.com/gcollazo/mongodbapp/releases/tag/8.0.5-build.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gcollazo/mongodbapp/master/MongoDB/Images.xcassets/AppIcon.appiconset/icon-512.png
    credit: "Giovanni Collazo"
    license: "MIT project asset depicting the MongoDB leaf; MongoDB trademarks belong to MongoDB, Inc."
---

MongoDB.app gives you a local MongoDB server for development in the form of an ordinary Mac app. You drag it to Applications and open it, and it starts `mongod` in the background with a leaf icon in the menu bar. Quitting the app stops the server.

The server listens on port 27017 and accepts connections only from the Mac itself. Data goes to a Data folder and the log to a Logs folder, both under the app's directory in your Application Support folder. The menu shows the app's version and the port, opens the logs folder, links to the documentation and checks for app updates.

Giovanni Collazo wrote it as a small Swift wrapper that runs MongoDB's own official binaries, inspired by Postgres.app and aiming at the simplest setup for people new to MongoDB. The release number follows the bundled MongoDB version, with a build suffix for changes to the app itself. The 8.0.5-build.1 release ships MongoDB 8.0.5. To call the bundled tools from Terminal, you add the app's `Vendor/mongodb/bin` folder to your `PATH`, which the README shows for both `~/.bash_profile` and `/etc/paths.d`.

The 8.0.5 download is a ZIP whose app declares macOS 11 or later. Its `mongod` binary is built for Apple silicon only, so an Intel Mac cannot run that release's server. Homebrew has disabled its `gcollazo-mongodb` cask since 1 September 2026 because the app does not pass the Gatekeeper check, so the GitHub release is the way to get it.
