---
name: "Hoppscotch Desktop"
summary: "The Hoppscotch API development workspace packaged as a desktop app."
category: "Developer tools"
tags: ["api", "http", "testing", "api-client"]
alternativeTo: ["postman"]
repository: "https://github.com/hoppscotch/hoppscotch"
website: "https://hoppscotch.io"
license: "MIT"
licenseUrl: "https://github.com/hoppscotch/hoppscotch/blob/main/LICENSE"
download: "https://docs.hoppscotch.io/documentation/clients/desktop/overview#download-hoppscotch-desktop-app"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/hoppscotch/hoppscotch", "https://github.com/hoppscotch/hoppscotch/blob/main/LICENSE", "https://docs.hoppscotch.io/documentation/clients/desktop/overview#download-hoppscotch-desktop-app", "https://github.com/hoppscotch/hoppscotch/blob/main/README.md", "https://docs.hoppscotch.io/documentation/clients/desktop/setup", "https://docs.hoppscotch.io/documentation/self-host/getting-started", "https://github.com/hoppscotch/releases/releases/tag/v26.10.1-0", "https://www.postman.com/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/hoppscotch/hoppscotch/blob/main/packages/hoppscotch-desktop/src-tauri/icons/128x128%402x.png", "credit": "Hoppscotch Desktop contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Hoppscotch Desktop is where you build an API request, send it and read the reply. You pick a method, enter the URL, add headers, parameters and a body, and the response comes back with its status, headers and a preview of JSON, XML, HTML or images. The app wraps the Hoppscotch web client in a Tauri shell.

- REST requests can use any HTTP method, including custom ones such as `LIST`.
- GraphQL queries run against a schema fetched from the endpoint.
- Realtime tabs connect to WebSocket, Server-Sent Events, Socket.IO and MQTT.
- Authorization covers Basic, Bearer tokens, OAuth 2.0 and OIDC with PKCE.
- Pre-request scripts in JavaScript can set environment variables before a request goes out.

Requests are kept in collections with nested folders, which export to a file or a GitHub gist. A cURL command can be imported, and any request can be turned into code snippets for more than ten languages and frameworks.

Separate disk images serve Apple silicon and Intel Macs, and the Apple silicon app is signed with a Developer ID and notarized. Desktop version numbers drop the first two digits of the year, so 26.10.1 is the desktop build of release 2026.10.1.

The logo menu in the top-left corner decides where your workspaces live. That can be Hoppscotch Cloud after you sign in, an organization's instance, or a server you host yourself once its configuration allows the app's origin. Postman also builds, sends and organizes API requests, and sells paid plans on top of a free sign-up. The Hoppscotch Community Edition server is free and MIT-licensed, so a team can host its own instance on its own infrastructure.
