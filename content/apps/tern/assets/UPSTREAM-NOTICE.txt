# Third-party code

tern is GPL-3.0-or-later. It copies and adapts code from the projects below; each copied file keeps a header naming its origin.

| Source | License | What |
| --- | --- | --- |
| zed-industries/zed (`crates/terminal`, `crates/terminal_view`) | GPL-3.0 | terminal model, grid element, key/mouse mappings |
| zeronsh/zeron | MIT | UI style, terminal emulator wrapper (alacritty_terminal 0.26); wallpaper effects (none, scanlines, ASCII, halftone, dither) (`crates/mobile/src/wallpaper.rs`), dominant-colour extraction and the surface tint (`crates/ui/src/settings/wallpaper_colors.rs` `tint_variant`), text hardening (`crates/ui/src/theme.rs` `harden_model_foreground`), the hero's size (`crates/ui/src/shell.rs` `new_thread_background_height`), recent-wallpaper history and the 180 ms crossfade (`crates/ui/src/settings/wallpaper.rs`, `motion.rs`); file-browser row shape and washes (`crates/ui/src/files/tree.rs`), port-forward and file-browser popover card (`crates/ui/src/popover.rs`); Settings sidebar groups, tab look, selection travel and keyboard (`crates/ui/src/shell.rs` `render_settings_nav`, `crates/ui/src/settings/widgets.rs` `section_tab`, `tab_selection_t`); drag-to-Applications dmg via dmgbuild, hidpi background tiff, signing, notarisation and stapling (`scripts/package-macos.sh`, `scripts/dmg-background.py` render pair), in `scripts/release.sh`, `scripts/notarize.sh`, `scripts/dmg-background.py` |
| Eugeny/russh (examples) | Apache-2.0 | SSH client session, auth, known_hosts, jump hosts, port forwarding and agent forwarding |
| chi11321/CrabPort | Apache-2.0 | SSH terminal backend shape (resize, auth flow) |
| longbridge/gpui-component (stories/examples) | Apache-2.0 | tabs, sidebar, dialogs |
| alacritty/alacritty (`alacritty_terminal` crate) | Apache-2.0 | VT emulation (dependency) |
| Eugeny/russh-sftp | Apache-2.0 | SFTP client protocol (dependency), usage after its `sftp_client` example |
| veeso/ssh2-config | MIT | `~/.ssh/config` parsing (dependency) |
| mbadolato/iTerm2-Color-Schemes (Ghostty format) | MIT | terminal colour schemes, `crates/tern/assets/themes.txt` |
| Solar Icons by 480 Design (via zeron) | CC BY 4.0 | UI icons, `crates/tern/assets/icons` |
| daangn/seed-design | MIT | snackbar sizes, colours, motion and behaviour |
| vercel/geist-font (via zeron) | SIL OFL 1.1 | Geist and Geist Mono fonts, `crates/tern/assets/fonts` |

## Built-in wallpapers

Public-domain works from The Metropolitan Museum of Art Open Access (CC0 1.0), cropped to the
artwork and resized. `crates/tern/assets/wallpapers`:

| File | Work | Met object ID |
| --- | --- | --- |
| great-wave.jpg | Katsushika Hokusai, *Under the Wave off Kanagawa (The Great Wave)* | 45434 |
| red-fuji.jpg | Katsushika Hokusai, *South Wind, Clear Sky (Red Fuji)* | 36490 |
| kanbara-snow.jpg | Utagawa Hiroshige, *Evening Snow at Kanbara* | 56915 |
| shono-rain.jpg | Utagawa Hiroshige, *Sudden Shower at Shōno* | 36521 |
| heart-of-the-andes.jpg | Frederic Edwin Church, *Heart of the Andes* | 10481 |
| wheat-field.jpg | Vincent van Gogh, *Wheat Field with Cypresses* | 436535 |
| fontainebleau-morning.jpg | Théodore Rousseau, *An Early Summer Morning in the Forest of Fontainebleau* | 437517 |

## App icon

The bird in `packaging/macos/icon.svg` (and `site/assets/icon.svg`) is the "bird" glyph from
Material Design Icons by Pictogrammers, Apache-2.0:
https://pictogrammers.com/library/mdi/icon/bird/
