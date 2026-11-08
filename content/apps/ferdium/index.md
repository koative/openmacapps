---
name: "Ferdium"
summary: "Puts chat, email and other web services in one window, each in its own tab, grouped into workspaces."
category: "Internet"
tags:
  - messaging
  - chat
  - workspaces
  - cross-platform
repository: https://github.com/ferdium/ferdium-app
website: https://ferdium.org
license: "Apache-2.0"
licenseUrl: https://github.com/ferdium/ferdium-app/blob/develop/LICENSE.md
download: https://ferdium.org/download
freeDownload: true
homebrew: "ferdium"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/ferdium/ferdium-app", "https://github.com/ferdium/ferdium-app/blob/develop/LICENSE.md", "https://raw.githubusercontent.com/ferdium/ferdium-app/develop/README.md", "https://ferdium.org", "https://ferdium.org/download", "https://ferdium.org/faq", "https://github.com/ferdium/ferdium-app/releases/tag/v7.2.3", "https://github.com/ferdium/ferdium-recipes/tree/main/recipes/slack", "https://github.com/ferdium/ferdium-recipes/tree/main/recipes/whatsapp"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ferdium/ferdium-app/develop/build-helpers/images/icons/512x512.png
    credit: "Ferdium contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Ferdium gathers the web apps you keep open all day, such as Slack, WhatsApp or webmail, into one window. Each service gets a tab in a sidebar, and you switch with a click.

- Add the same service twice to stay signed in to two accounts at once.
- Workspaces show only the services you need right now, so work and private life can stay apart.
- A Todo panel stays open beside whichever service you are using.
- A service that is not in the list can be added as a custom service.
- Services you are not using hibernate to save memory.

An account is optional. Without one, everything stays on your Mac. With one, services and workspaces sync between computers, and if you want sync without the project's server, you can host Ferdium Server yourself. Logins are never shared between services, so each one signs in separately.

Ferdium began as a hard fork of Franz and, its README says, does not restrict usage the way Franz does. Scripts in the repository move an existing Ferdi profile across. You can restyle the interface with a custom.css file in the config folder under ~/Library/Application Support/Ferdium.

Each release has separate DMG and ZIP downloads for Apple silicon and Intel. The project says in its FAQ that its macOS builds are submitted to Apple for notarization during the build. Ferdium's only official domain is ferdium.org, and the project warns that look-alike sites may spread malware.
