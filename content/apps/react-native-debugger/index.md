---
name: "React Native Debugger"
summary: "Standalone React Native debugger with React Inspector and Redux DevTools; it only supports the old Remote Debugger."
category: "Developer tools"
tags:
  - debugging
  - react-native
  - redux
repository: "https://github.com/jhen0409/react-native-debugger"
website: "https://github.com/jhen0409/react-native-debugger"
license: "MIT"
licenseUrl: "https://github.com/jhen0409/react-native-debugger/blob/master/LICENSE.md"
download: "https://github.com/jhen0409/react-native-debugger/releases"
freeDownload: true
homebrew: "react-native-debugger"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "No release since July 2023."
sources:
  - "https://github.com/jhen0409/react-native-debugger"
  - "https://github.com/jhen0409/react-native-debugger/blob/master/LICENSE.md"
  - "https://github.com/jhen0409/react-native-debugger/releases"
---

React Native Debugger is a standalone app for debugging React Native apps. It builds on the React Native Remote Debugger and adds React Inspector for the component tree, Redux DevTools for state and actions, and Apollo Client DevTools. It suits developers who want those tools in their own window instead of a browser tab.

The README says the app only supports the old Remote Debugger, so it does not cover Hermes or the New Architecture; check that against your React Native version before you rely on it. The last release is v0.14.0 from July 2023, and the repository has had no commits since then, so treat it as unmaintained. The release file is named as a universal build for Apple silicon and Intel; the README gives no minimum macOS version.
