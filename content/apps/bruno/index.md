---
name: "Bruno"
summary: "Keeps API collections in your project, alongside your code."
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
sources: ["https://github.com/usebruno/bruno", "https://github.com/usebruno/bruno/blob/main/license.md", "https://www.usebruno.com/", "https://github.com/usebruno/bruno/releases", "https://docs.usebruno.com/introduction/getting-started", "https://www.usebruno.com/pricing", "https://raw.githubusercontent.com/usebruno/bruno/main/readme.md"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot.png", "alt": "Bruno API client with a request collection and response workspace.", "source": "https://raw.githubusercontent.com/usebruno/bruno/main/assets/images/landing-2-dark.png", "credit": "Bruno contributors"}]
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/usebruno/bruno/main/packages/bruno-electron/resources/icons/png/256x256.png", "credit": "OpenMoji contributors; Bruno contributors", "license": "CC-BY-SA-4.0; https://creativecommons.org/licenses/by-sa/4.0/"}, {"path": "./assets/screenshot.png", "source": "https://raw.githubusercontent.com/usebruno/bruno/main/assets/images/landing-2-dark.png", "credit": "Bruno contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

Bruno builds HTTP requests, sends them and shows the responses. Every request is saved in a collection, a folder of plain-text files inside your project. Keep that folder in the same Git repository as your code and changes to requests appear in diffs and pull requests.

- Variables and environments switch the same requests between local, staging and production servers.
- Scripts and tests run before a request or after the response to set values and check results.
- Bruno CLI runs whole collections from a terminal or a CI job and writes reports.
- Import brings in Postman collections and environments.

Postman also sends, organizes and tests requests. Bruno keeps them only on disk and shares them through Git. The project says it has no plans to add cloud sync.

You need no account. The open-source edition is free and MIT-licensed. Three paid plans, from Pro up to Enterprise, add deeper Git integration, automation, admin controls and support, and a purchase uses an email address to issue a license key.

GitHub releases offer separate macOS builds for Apple silicon (arm64) and Intel (x64), as disk images, zip archives and installer packages. The dog icon comes from OpenMoji. It is licensed under CC BY-SA 4.0.
