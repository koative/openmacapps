---
name: "Bruno"
summary: "Keep API collections in your project, alongside your code."
category: "Developer tools"
tags: ["api", "local-first", "git", "api-client"]
alternativeTo: ["postman"]
repository: "https://github.com/usebruno/bruno"
website: "https://www.usebruno.com/"
license: "MIT"
licenseUrl: "https://github.com/usebruno/bruno/blob/main/license.md"
download: "https://github.com/usebruno/bruno/releases"
freeDownload: true
homebrew: "bruno"
featured: true
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/usebruno/bruno", "https://github.com/usebruno/bruno/blob/main/license.md", "https://www.usebruno.com/", "https://github.com/usebruno/bruno/releases", "https://docs.usebruno.com/introduction/getting-started", "https://www.usebruno.com/pricing"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot.png", "alt": "Bruno API client with a request collection and response workspace.", "source": "https://raw.githubusercontent.com/usebruno/bruno/main/assets/images/landing-2-dark.png", "credit": "Bruno contributors"}]
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/usebruno/bruno/main/packages/bruno-electron/resources/icons/png/256x256.png", "credit": "OpenMoji contributors; Bruno contributors", "license": "CC-BY-SA-4.0; https://creativecommons.org/licenses/by-sa/4.0/"}, {"path": "./assets/screenshot.png", "source": "https://raw.githubusercontent.com/usebruno/bruno/main/assets/images/landing-2-dark.png", "credit": "Bruno contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

Bruno builds HTTP requests, sends them and shows the responses. It saves every request in a collection, a folder of plain-text files inside your project. That folder can sit in the same Git repository as your code, so changes to requests appear in diffs and pull requests.

- **Variables and environments** switch the same requests between local, staging and production servers.
- **Scripts and tests** run before a request or after the response to set values and check results.
- **Bruno CLI** runs whole collections from a terminal or a CI job and writes reports.
- **Import** brings in Postman collections and environments.

Postman does the same job of sending, organizing and testing requests, but it keeps collections in its own workspaces. Bruno keeps them only on disk and shares them through Git. The project says it has no plans to add cloud sync.

The app needs no account. Most features are in the free, MIT-licensed edition. Paid Pro, Ultimate and Enterprise plans add deeper Git integration, automation, admin controls and support, and a purchase uses an email address to issue a license key.

GitHub releases offer separate macOS builds for Apple silicon (arm64) and Intel (x64), as disk images, zip archives and installer packages. The dog icon comes from OpenMoji and is licensed under CC BY-SA 4.0.
