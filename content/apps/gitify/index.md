---
name: "Gitify"
summary: "Collects notifications from GitHub, GitLab, Gitea, Forgejo and other Git forges in one list in the menu bar."
category: "Developer tools"
tags:
  - notifications
  - menu-bar
  - git
  - cross-platform
repository: https://github.com/gitify-app/gitify
website: https://gitify.io
license: "MIT"
licenseUrl: https://github.com/gitify-app/gitify/blob/main/LICENSE
download: https://gitify.io
freeDownload: true
homebrew: "gitify"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/gitify-app/gitify", "https://github.com/gitify-app/gitify/blob/main/LICENSE", "https://raw.githubusercontent.com/gitify-app/gitify/main/README.md", "https://gitify.io", "https://github.com/gitify-app/gitify/releases/tag/v8.0.0"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gitify-app/gitify/main/assets/images/app-icon.icns
    credit: "Gitify contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Gitify sits in the menu bar and gathers your notifications from GitHub and other Git forges into one list. Forge support is built from adapters, so the set of forges can grow; Azure DevOps and Gerrit are listed as under consideration.

What you can do depends on the forge:

- GitHub, on github.com or Enterprise Server, supports marking read or done, unsubscribing and extra details.
- GitLab, cloud or self-managed, supports read, done and details, but not unsubscribing.
- Gitea, including Forgejo and Codeberg, can only mark items read.
- Bitbucket Cloud can only mark items read as well.

You sign in to as many accounts as you need, across forges. Filters cut the list down to what matters, and you can turn on system notifications, a sound or a different theme. Version 8.0 added action buttons to those system notifications and stops polling while the Mac is locked or asleep.

On older GitHub Enterprise Server versions, before 3.13, marking a notification done does not work. Gitify is built on Electron, and the Mac download is a universal DMG or ZIP. It also runs on Windows and Linux.
