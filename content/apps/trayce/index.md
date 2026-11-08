---
name: "TrayceGUI"
summary: "Shows HTTP, gRPC, MySQL and Postgres traffic from local Docker containers, next to an API client for Bruno collections."
category: "Developer tools"
tags:
  - network
  - http
  - api
  - inspection
  - cross-platform
repository: https://github.com/evanrolfe/trayce_gui
website: https://trayce.dev
license: "GPL-3.0"
licenseUrl: https://github.com/evanrolfe/trayce_gui/blob/main/LICENSE.txt
download: https://github.com/evanrolfe/trayce_gui/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/evanrolfe/trayce_gui
  - https://github.com/evanrolfe/trayce_gui/blob/main/LICENSE.txt
  - https://github.com/evanrolfe/trayce_gui/releases
  - https://raw.githubusercontent.com/evanrolfe/trayce_gui/main/README.md
  - https://trayce.dev
  - https://raw.githubusercontent.com/evanrolfe/trayce_agent/main/README.md
  - https://github.com/evanrolfe/trayce_gui/releases/tag/v1.8.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/evanrolfe/trayce_gui/main/include/icon.icns
    credit: "Evan Rolfe and TrayceGUI contributors"
    license: "GPL-3.0 (repository license); upstream project asset"
---

Start TrayceGUI with its agent container running beside your services, and the traffic of your local Docker containers appears in a list you can search and filter. You see what a service actually sends and receives without routing it through a proxy.

The capture comes from TrayceAgent, a separate Docker container that attaches eBPF probes and streams what it intercepts back to the GUI. No CA certificate is needed, even for TLS. The protocols it understands:

- HTTP and HTTP/2
- HTTPS from Go programs and from languages built on OpenSSL, such as Python and Ruby
- gRPC, decoded with protobuf files you import
- MySQL and PostgreSQL

The agent's documented `docker run` command starts it privileged, in the host's process namespace and with the Docker socket mounted. The project aims it at local development and testing, and not at production monitoring.

The second half of the app is an API client that reads and writes Bruno collections in the bru-lang format. A collection edited in TrayceGUI still opens in Bruno, and its plain files sit well in git. REST requests, authentication, secrets and JavaScript scripting work today. GraphQL, OpenAPI import, request history and the collection runner are listed as coming soon. Files stay on your machine and no account is involved.

The macOS DMG of release 1.8.2 holds a Universal app for Apple silicon and Intel. It is Developer ID-signed and notarized, and its minimum system version is macOS 10.14. A Linux .deb comes from the same release page, and the app is built with Flutter.
