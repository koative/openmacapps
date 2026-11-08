---
name: "stts"
summary: "Shows the status of cloud services from the menu bar and notifies you when one goes down or recovers."
category: "Developer tools"
tags:
  - monitoring
  - menu-bar
  - notifications
repository: https://github.com/inket/stts
website: https://github.com/inket/stts
license: "MIT"
licenseUrl: https://github.com/inket/stts/blob/master/LICENSE
download: https://apps.apple.com/app/stts/id1187772509
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/inket/stts
  - https://github.com/inket/stts/blob/master/LICENSE
  - https://apps.apple.com/app/stts/id1187772509
  - https://raw.githubusercontent.com/inket/stts/master/README.md
  - https://github.com/inket/stts/releases/tag/v3.0
assets:
  - path: ./assets/icon.png
    source: https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6d/15/0e/6d150e67-40fe-e0e7-f42e-c7db64efcfba/AppIcon-0-0-85-220-0-6-0-2x.png/512x512bb.png
    credit: "Mahdi Bchetnia"
    license: "Official stts App Store icon; MIT code license, trademarks retained"
---

stts tells you whether the services you depend on are up. You pick them from a list of more than 100, such as Amazon Web Services, GitHub, Cloudflare, Slack and Sentry, and click the menu bar icon to see the state of each one.

Clicking a service opens its status page directly. You can also turn on notifications for when a service goes down and when it is restored, which saves checking the menu by hand during an incident.

The app is free on the Mac App Store and needs macOS 11 or later. Its source is published on GitHub under the MIT license.

The repository includes a Ruby script that reads a public status page and generates the entry for a new service; pages it cannot handle can be requested in the issue tracker. Version 3.0 added AnthropicAI, DeepSeekAI and Wiz, fixed several existing services, renamed Sendinblue to Brevo and updated the icon for macOS Tahoe.
