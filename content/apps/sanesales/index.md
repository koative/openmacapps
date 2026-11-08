---
name: "SaneSales"
summary: "Combines sales, orders and refunds from Lemon Squeezy, Gumroad and Stripe in one dashboard, with today's total in the menu bar."
category: "Productivity"
tags:
  - finance
  - menu-bar
  - privacy
  - widgets
repository: https://github.com/sane-apps/SaneSales
website: https://sanesales.com
license: MIT
licenseUrl: https://github.com/sane-apps/SaneSales/blob/main/LICENSE
download: https://sanesales.com
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/sane-apps/SaneSales
  - https://github.com/sane-apps/SaneSales/blob/main/LICENSE
  - https://sanesales.com
  - https://github.com/sane-apps/SaneSales/releases
  - https://raw.githubusercontent.com/sane-apps/SaneSales/main/README.md
  - https://github.com/sane-apps/SaneSales/releases/tag/v1.3.12
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sane-apps/SaneSales/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "SaneApps"
    license: "MIT repository asset; name and logo retained by SaneApps"
---

SaneSales pulls your sales from Lemon Squeezy, Gumroad and Stripe into a single dashboard. You paste an API key for each storefront, and the app fetches orders, products, revenue and refunds straight from the provider APIs.

- Revenue shows for today, the last 7 or 30 days, a custom range or all time, as net totals after refunds.
- Daily revenue charts track momentum, and a donut chart splits earnings by product.
- Orders can be searched by customer, product or amount and filtered by provider, status or date.
- The full order history exports to CSV.
- Today's revenue sits in the menu bar, and right-clicking it gives quick actions.

There is no SaneApps account or sign-up. API keys go into iCloud Keychain, so your other Apple devices reconnect on their own, and sales data is cached on the device for offline viewing. The developer says sales data, orders and API keys never reach SaneApps servers, though a few anonymous app counts may be sent.

SaneSales needs macOS 14 or later on an Apple silicon Mac; there is no Intel build. The version 1.3.12 ZIP on GitHub holds a notarized app. That release removed the earlier purchase, so the app is now free under the MIT license with every feature unlocked, and donations are optional.

The same app runs on iPhone, iPad and Apple Watch, with Home Screen, Lock Screen and Smart Stack widgets, and it is also on the iOS and Mac App Store.
