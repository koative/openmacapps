---
name: "RelaGit"
summary: "A cross-platform graphical Git client with a commit graph and submodule support, still in early beta."
category: "Developer tools"
tags: ["git", "version-control", "cross-platform", "git-client"]
alternativeTo: ["fork", "tower"]
repository: "https://github.com/relagit/relagit"
website: "https://rela.dev"
license: "LGPL-3.0-or-later"
licenseUrl: "https://github.com/relagit/relagit/blob/main/LICENSE"
download: "https://github.com/relagit/relagit/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/relagit/relagit", "https://github.com/relagit/relagit/blob/main/LICENSE", "https://github.com/relagit/relagit/releases", "https://raw.githubusercontent.com/relagit/relagit/main/README.md", "https://raw.githubusercontent.com/relagit/relagit/main/package.json", "https://rela.dev", "https://rela.dev/docs/workflows/creating-workflows", "https://rela.dev/docs/press/branding", "https://fork.dev/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/relagit/relagit/main/build/icon.png", "credit": "Rela organisation", "license": "RelaGit brand image, property of the Rela organisation; excluded from the LGPL-3.0-or-later code license, and the README says it may not be used without permission"}]
---

RelaGit puts your Git repositories in a desktop window, with a commit graph and support for submodules. It runs the Git command-line tool underneath, and GitHub, GitLab and Codeberg are built into the client.

Its main extra is workflows. These are small TypeScript or JavaScript modules kept in `~/.relagit/workflows` that hook into repository events, such as a new commit, and run your own actions. A `pnpm create relagit` command scaffolds a new one. A bundler such as Vite or esbuild can pack a larger workflow and its dependencies into the single module RelaGit loads.

RelaGit is built with Electron and SolidJS, and the same code ships for macOS, Windows and Linux. The Mac downloads are separate DMGs for Apple silicon and Intel. The project still calls itself an early beta, and version 0.16.11 came out in April 2026.

Fork is a Git client for Mac and Windows. RelaGit adds Linux builds and is free under the LGPL.
