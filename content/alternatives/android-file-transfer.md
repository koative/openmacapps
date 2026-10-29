---
name: Android File Transfer
vendor: Google
website: https://www.android.com/filetransfer/
category: Utilities
summary: Google's small Mac utility for browsing an Android phone's storage and copying files to and from it over USB.
sources:
  - https://www.android.com/filetransfer/
  - https://support.google.com/android/answer/9064445?hl=en
verified: '2026-10-29'
---

Android File Transfer was Google's Mac app for reaching an Android phone's storage over a USB cable, since macOS does not open MTP devices in Finder. Google no longer offers it: its former download address now redirects to the Quick Share page, and Google's help article on moving files by USB covers only Windows computers and Chromebooks.

The open-source apps below take over the same job of browsing a phone from the Mac and copying files in both directions. OpenMTP uses MTP, like Google's app, in a two-pane window that also works with some cameras. AndroidFileSync connects through Android's debugging bridge instead, which requires turning on USB debugging but also allows transfers over Wi-Fi and includes an app manager.
