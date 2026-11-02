---
name: "Impactor"
summary: "Signs and installs IPA apps on an iPhone or iPad using your own Apple Account, without Xcode."
category: "Developer tools"
tags: ["ios", "iphone", "ipad", "code-signing", "cross-platform"]
repository: "https://github.com/claration/impactor"
website: "https://github.com/claration/impactor"
license: "MIT"
licenseUrl: "https://github.com/claration/impactor/blob/main/LICENSE"
download: "https://github.com/claration/impactor/releases"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/claration/impactor", "https://github.com/claration/impactor/blob/main/LICENSE", "https://github.com/claration/impactor/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/claration/impactor/blob/main/package/macos/Impactor.app/Contents/Resources/AppIcon.icns", "credit": "Impactor contributors (icon by Paige)", "license": "MIT; upstream project asset, trademarks retained"}]
---

Impactor sideloads apps onto an iPhone, iPad or Apple TV. You sign in with your Apple Account, and the app does the steps Xcode would: it registers the device, creates a development certificate and provisioning profile, re-signs the IPA and installs it over the connection to the device. It can also install helpers such as SideStore and LiveContainer, generate the pairing files those apps need, and inject tweaks into an app before installing it.

Apple's rules still apply. With a free Apple Account, signed apps expire after seven days and only a few app IDs can be registered; a paid developer membership lifts those limits. The signing key is kept on the Mac you used, so it must be copied to another computer to continue there. The project was previously published as PlumeImpactor.
