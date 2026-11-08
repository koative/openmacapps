---
name: "Mailspring"
summary: "A cross-platform desktop mail client with a unified inbox, snoozing, mail rules and undo send."
category: "Internet"
tags:
  - email
  - cross-platform
alternativeTo:
  - microsoft-outlook
repository: "https://github.com/Foundry376/Mailspring"
website: "https://www.getmailspring.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/Foundry376/Mailspring/blob/master/LICENSE.md"
download: "https://www.getmailspring.com/download"
freeDownload: true
homebrew: "mailspring"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/Foundry376/Mailspring"
  - "https://github.com/Foundry376/Mailspring/blob/master/LICENSE.md"
  - "https://www.getmailspring.com/"
  - "https://www.getmailspring.com/download"
  - "https://github.com/Foundry376/Mailspring/releases"
  - "https://github.com/Foundry376/Mailspring-Sync"
  - https://raw.githubusercontent.com/Foundry376/Mailspring/master/README.md
  - https://support.microsoft.com/en-US/Outlook/get-help-with-outlook-for-mac
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/Foundry376/Mailspring/master/app/build/resources/mac/mailspring.icns"
    credit: "Foundry 376, LLC"
    license: "Mailspring app icon; trademarks retained, distributed in the GPL-3.0 repository"
---

Add IMAP or Office 365 accounts to Mailspring, including Gmail, iCloud, FastMail, Outlook.com and Yahoo, and read them together in one unified inbox. It indexes your mail so you can run Gmail-style search queries across every connected account.

- Snooze a message or undo a send.
- Mail rules and signatures.
- Grammar and spell checking in the composer, and an offer to translate mail that arrives in another language.
- Built-in themes, including a dark mode, and themes and plugins written by others.

It descends from Nylas Mail and is maintained by one of its original authors. The interface is written in TypeScript with Electron and React, on a plugin architecture, and it starts a separate sync engine in C++ and C, based on Mailcore2, that runs locally on your computer. Both parts are published under GPLv3. The developers say these features run in the client and that your email credentials are not sent to the cloud.

Mailspring Pro, a monthly subscription, adds features for people who send a lot of mail, such as read receipts, link tracking, mailbox analytics and contact and company profiles.

The download page has separate Mac builds for Apple silicon and Intel, alongside versions for Windows and Linux.

Microsoft describes Outlook for Mac as a place for both your email and your calendar. Mailspring displays event invitations in the inbox and lets you RSVP, while its full calendar is still forthcoming.
