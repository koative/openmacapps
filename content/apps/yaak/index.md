---
name: "Yaak"
summary: "A desktop API client for organizing requests and examining responses."
category: "Developer tools"
tags: ["api", "http", "testing", "api-client"]
alternativeTo: ["postman"]
repository: "https://github.com/mountain-loop/yaak"
website: "https://yaak.app"
license: "MIT"
licenseUrl: "https://github.com/mountain-loop/yaak/blob/main/LICENSE"
download: "https://yaak.app/download"
freeDownload: true
homebrew: "yaak"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/mountain-loop/yaak", "https://github.com/mountain-loop/yaak/blob/main/LICENSE", "https://yaak.app/download", "https://raw.githubusercontent.com/mountain-loop/yaak/main/README.md", "https://yaak.app/pricing", "https://github.com/mountain-loop/yaak/releases/tag/v2026.9.1", "https://www.postman.com/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/mountain-loop/yaak/blob/main/crates-tauri/yaak-app-client/icons/release/128x128%402x.png", "credit": "Yaak contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

From one desktop window, Yaak sends REST and GraphQL calls, gRPC requests, WebSocket messages and Server-Sent Events subscriptions, and keeps them in workspaces with nested folders so you can rerun them later. Responses can be filtered with JSONPath or XPath.

- Collections import from Postman, Insomnia, OpenAPI, Swagger or a curl command.
- Environment variables switch the same requests between dev, staging and production.
- Authentication covers OAuth 2.0, JWT and Basic Auth, and plugins can add more schemes.
- Template tags insert values such as UUIDs and timestamps, and secrets can live encrypted or in the system keychain.

A workspace can be mirrored to a folder on disk, which lets you keep it in Git or sync it with Dropbox. Plugins can also extend template tags and the interface, and the app ships with themes you can replace with your own.

The download page describes Yaak as local-first: it works offline and needs no account. The developer says it has no telemetry. Postman does the same basic job of sending HTTP requests and inspecting the responses. Yaak stores its workspaces on the Mac, in files you can put under version control.

The source is MIT-licensed. The prebuilt app is free for personal use, while use at work needs a paid license. Separate DMGs exist for Apple silicon and Intel, and the Apple silicon app requires macOS 13 or later and is notarized.
