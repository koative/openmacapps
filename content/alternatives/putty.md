---
name: PuTTY
vendor: Simon Tatham
website: https://www.chiark.greenend.org.uk/~sgtatham/putty/
category: Developer tools
summary: A long-running SSH and Telnet client for terminal sessions on remote machines, with serial port support and saved sessions.
sources:
  - https://www.chiark.greenend.org.uk/~sgtatham/putty/
  - https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html
verified: '2026-10-29'
onMac: false
---

PuTTY is a client for SSH, Telnet and serial connections that opens a terminal window on a remote computer and keeps per-host settings as saved sessions. It is open source. The project releases Windows executables and Unix source code, and its FAQ says there is no finished Mac version.

Every Mac already has OpenSSH in Terminal, so the apps below are for people who want PuTTY for Mac in the sense of a window with saved connections. electerm and Tabby keep a list of SSH hosts, open them in tabs and also talk to serial ports, which matters for network gear and boards; electerm adds SFTP, FTP, Telnet, RDP and VNC. Netcatty keeps hosts in a searchable vault and opens SSH, Telnet, Mosh and serial sessions in tabs and split panes. Wave Terminal puts SSH sessions into a tiled workspace, reconnects them after drops, and can preview or edit remote files.
