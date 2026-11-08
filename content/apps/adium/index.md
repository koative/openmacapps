---
name: "Adium"
summary: "A classic instant messaging client for macOS built on libpurple, with tabbed chats, themes and OTR encryption."
category: "Internet"
tags:
  - chat
  - messaging
  - encrypted-chat
repository: "https://github.com/adium/adium"
website: "https://adium.im"
license: "GPL-2.0"
licenseUrl: "https://github.com/adium/adium/blob/master/License.txt"
download: "https://adium.im"
freeDownload: true
homebrew: "adium"
featured: false
maintenance: "unmaintained"
maintenanceNote: "No commit to the repository since March 2021."
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/adium/adium"
  - "https://github.com/adium/adium/blob/master/License.txt"
  - "https://adium.im"
  - "https://adiumx.cachefly.net/Adium_1.5.10.4.dmg"
  - "https://raw.githubusercontent.com/adium/adium/master/README.md"
  - "https://adium.im/help/pgs/Accounts-ListOfServices.html"
  - "https://github.com/adium/adium/commits/master.atom"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/adium/adium/master/Resources/Dock%20Icons/Adiumy%20Green.AdiumIcon/ApplicationIcon.png"
    credit: "The Adium Team"
    license: "Adiumy duck icon; trademarks retained, distributed in the GPL repository"
---

Adium puts several chat accounts into one contact list and one set of chat windows. You sign in to each account, and Adium talks to the services through the libpurple protocol library. The bundled services include XMPP, IRC, AIM, ICQ, Bonjour, Gadu-Gadu, IBM Lotus Sametime and Novell GroupWise. Third-party plugins add others such as Telegram and Skype for Business, though the Adium project does not support them.

- Combined Contacts merges several accounts belonging to one person into a single entry.
- Chats open as tabs, and the WebKit message view can be restyled with themes.
- Conversations can be encrypted with OTR, and files can be sent through the chat.
- Notifications go through Growl or Notification Center, and contacts can be linked with the Contacts app.

Adium hosts no chat services. It is a third-party client for networks that other people run, mostly companies, so whether an account still connects depends on that network. Xtras from the AdiumXtras site add further customization, and the interface comes in 27 languages.

The current download, version 1.5.10.4, needs OS X 10.7.5 or later. The app in its disk image is an Intel-only (x86_64) build, signed with a Developer ID and notarized. Nothing has been committed to the repository since March 2021.
