---
name: "CocoaRestClient"
summary: "Sends HTTP requests to REST endpoints and shows pretty-printed JSON, XML and MsgPack responses."
category: "Developer tools"
tags:
  - http
  - api
  - testing
  - api-client
repository: https://github.com/mmattozzi/cocoa-rest-client
website: https://mmattozzi.github.io/cocoa-rest-client/
license: "BSD-3-Clause"
licenseUrl: https://github.com/mmattozzi/cocoa-rest-client/blob/master/LICENSE.txt
maintenance: "unmaintained"
maintenanceNote: "No release since August 2021."
download: https://github.com/mmattozzi/cocoa-rest-client/releases
freeDownload: true
homebrew: "cocoarestclient"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/mmattozzi/cocoa-rest-client", "https://github.com/mmattozzi/cocoa-rest-client/blob/master/LICENSE.txt", "https://github.com/mmattozzi/cocoa-rest-client/releases", "https://formulae.brew.sh/cask/cocoarestclient", "https://mmattozzi.github.io/cocoa-rest-client/", "https://raw.githubusercontent.com/mmattozzi/cocoa-rest-client/master/README.md", "https://raw.githubusercontent.com/mmattozzi/cocoa-rest-client/master/LICENSE.txt", "https://github.com/mmattozzi/cocoa-rest-client/releases/tag/1.4.7"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/mmattozzi/cocoa-rest-client/master/CocoaRestClient/Images.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "Michael Mattozzi and CocoaRestClient contributors"
    license: "BSD-3-Clause; upstream project asset, trademarks retained"
---

CocoaRestClient sends a request to an HTTP endpoint and shows you the response formatted. You choose GET, PUT, POST, DELETE or HEAD, fill in headers, URL parameters and a body, and read pretty-printed JSON, XML or MsgPack next to the response headers and the time it took.

- The body can be raw text or a list of key and value pairs, and files can go up as multipart form data.
- HTTP basic and digest authentication are built in.
- Requests save to a sidebar organized in folders, and they can be imported and exported.
- A diff tool compares the bodies of two response tabs.
- Command-R repeats the last request.

Its author wrote it as curl with a light interface: the same quick calls, with output that is easier to read and bodies you can save. SSL works with untrusted certificates too, and following redirects is optional. Saved requests can be shared between computers through a shared folder.

Version 1.4.7 from August 2021 is the latest release, and the repository has had a single commit since, in October 2024. The download is a DMG with a Universal app for Apple silicon and Intel; the app is notarized and requires macOS 10.14 or later. There is no App Store version.
