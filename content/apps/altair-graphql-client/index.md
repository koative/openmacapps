---
name: "Altair GraphQL Client"
summary: "A GraphQL client for writing queries, browsing schema docs, testing subscriptions and saving collections."
category: "Developer tools"
tags:
  - api-client
  - api
  - graphql
  - testing
  - cross-platform
repository: https://github.com/altair-graphql/altair
website: https://altairgraphql.dev
license: "MIT"
licenseUrl: https://github.com/altair-graphql/altair/blob/master/LICENSE
download: https://github.com/altair-graphql/altair/releases
homebrew: "altair-graphql-client"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/altair-graphql/altair
  - https://github.com/altair-graphql/altair/blob/master/LICENSE
  - https://github.com/altair-graphql/altair/releases
  - https://altairgraphql.dev
  - https://altairgraphql.dev/cloud
assets:
  - path: ./assets/icon.png
    source: https://github.com/altair-graphql/altair/blob/master/packages/altair-electron/resources/icon.png
    credit: "Altair GraphQL Client contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Altair is a desktop client for working with GraphQL APIs. You point it at an endpoint, write queries and mutations with schema-aware autocompletion, set variables and headers, and read the response alongside generated documentation for the schema. It also handles GraphQL subscriptions and file uploads.

Requests can be grouped into windows and saved collections, environments hold values such as tokens or base URLs, and pre-request and post-request scripts automate steps like fetching an auth token. Plugins and themes extend the interface.

The macOS app is built with Electron and has separate Apple silicon and Intel downloads; the same client is also published as Chrome and Firefox extensions. Syncing collections through Altair GraphQL Cloud needs an account, with a free tier and paid team plans; the desktop client works without it.
