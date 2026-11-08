---
name: "Insomnia"
summary: "Sends and debugs API requests over REST, GraphQL, gRPC and WebSockets, and keeps them in organized collections."
category: "Developer tools"
tags: ["api", "http", "testing", "api-client"]
alternativeTo: ["postman"]
repository: "https://github.com/Kong/insomnia"
website: "https://insomnia.rest"
license: "Apache-2.0"
licenseUrl: "https://github.com/Kong/insomnia/blob/develop/LICENSE"
download: "https://github.com/Kong/insomnia/releases"
freeDownload: true
homebrew: "insomnia"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Kong/insomnia", "https://github.com/Kong/insomnia/blob/develop/LICENSE", "https://raw.githubusercontent.com/Kong/insomnia/develop/README.md", "https://insomnia.rest", "https://github.com/Kong/insomnia/releases", "https://github.com/Kong/insomnia/releases/tag/core%4013.4.0", "https://www.postman.com/"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/Kong/insomnia/blob/develop/packages/insomnia/src/ui/images/insomnia-logo.svg", "credit": "Insomnia contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.svg"
---

Insomnia sends a request to an API and shows you what comes back, so you can debug a service without writing client code. It speaks REST, GraphQL, gRPC, WebSockets, Server-Sent Events and other HTTP-based protocols. Requests are kept in collections you can run as a batch.

- An OpenAPI editor with a visual preview for designing APIs.
- Test suites and a collection runner.
- Mock servers, in Kong's cloud or self-hosted.
- The `inso` command-line tool for linting and testing in CI pipelines.
- Plugins from third parties.

You decide where projects are stored. Local Vault keeps everything on your Mac, Git Sync writes to a Git repository you choose, and Cloud Sync stores projects with Kong, optionally end-to-end encrypted. Private environments never leave the Mac, whatever storage the project uses.

Accounts are part of the deal. Without one you only get the local Scratch Pad. Most features need a free account, and Git Sync, unlimited collaboration and single sign-on sit on paid plans.

Postman covers the same request building, collections and collection runner inside a larger API platform. Insomnia's source code is Apache-2.0, and Local Vault keeps your collections out of any cloud.

Insomnia 13.4.0 ships as a DMG for the Mac, next to Windows and Linux builds.
