# Third-party notices

Tilqos's own source code is licensed under the MIT License (see `LICENSE`).

The language-data files in `Resources/Models/` (and their copies embedded in the Windows executable) are **machine-generated, lossy, binary derivatives** of third-party dictionaries. They are **not** the original dictionaries and are **not** covered by the MIT License of the rest of the project; each group is available under the terms of its source, given below. They are produced by `Sources/GenModel` and `generate-models.sh` from the upstream files named below, which are not included in this repository. The binaries hold letter-trigram statistics, 32-bit hashes of dictionary stems with affix-class flags, and the dictionaries' affix rules (strip/add/condition strings). The hand-written word lists in `wordlists/` are part of this project's source and are covered by its MIT License.

| Files | Derived from | Terms |
|---|---|---|
| `kk.bin`, `kk-lex.bin`, `kk-morph.bin` | Hunspell Kazakh dictionary (`kk_KZ.dic`, `kk_KZ.aff`) | MPL 1.1 or LGPL 2.1+ or GPL 2.0+ (section 1) |
| `ru.bin`, `ru-lex.bin` | LibreOffice `ru_RU` Hunspell dictionary | Lebedev BSD-style licence (section 2) |
| `en-lex.bin` | LibreOffice `en_US` Hunspell dictionary (SCOWL, Ispell affix file) | SCOWL / Ispell licences (section 3) |
| `en.bin` | `/usr/share/dict/words` (Webster's Second International, 1934) | described by its supplier as out of copyright (section 4) |
| Windows executables | Go runtime and standard library | BSD-3-Clause (section 5) |

Verbatim copies of the upstream README files that carry the licence statements, and of the licence texts themselves, are in `LICENSES/` and are shipped with every build (the app bundle, the disk image and the Windows archives): `README_kk_KZ.txt`, `README_ru_RU.txt`, `README_en_US.txt`, `MPL-1.1.txt`, `LGPL-2.1.txt`, `GPL-2.0.txt`.

## 1. Kazakh: hunspell-kk (`kk_KZ`)

- Source: Kazakh Language Dictionary for Hunspell, https://github.com/taem/hunspell-kk (`kk_KZ.dic`, 54,063 entries; `kk_KZ.aff`, 2,593 suffix rules; the download URLs are in `generate-models.sh`). Developed under the OpenOffice.org Lingucomponent spell-checking/dictionaries sub-project, according to its README.
- Credits (from the upstream README): the orthographic word list was created for Aspell by Alexey Lipchansky and extended with a list of 395 Kazakh names; the affix file was developed by Akmaral Mussayeva, based on the appendices to the dictionary of Kaldybai Bektaiuly, with László Németh and Rail Aliev.
- Licence of the upstream files, as stated in its README: "These files are published under the following open source licenses: GNU GPL version 2.0 or above, GNU LGPL version 2.1 or above and Mozilla MPL version 1.1 or above." Tilqos redistributes the derived files `kk.bin`, `kk-lex.bin` and `kk-morph.bin` under the same choice and relies on the **MPL 1.1** and **LGPL 2.1 (or later)** terms; it does not rely on the GPL option.
  - MPL 1.1: https://www.mozilla.org/en-US/MPL/1.1/
  - LGPL 2.1: https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
  - GPL 2.0: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
  - The three licence texts are saved verbatim in `LICENSES/MPL-1.1.txt`, `LICENSES/LGPL-2.1.txt` and `LICENSES/GPL-2.0.txt`; the upstream README that states the tri-licence (in English, Kazakh and Russian) is `LICENSES/README_kk_KZ.txt`.
- Description of modifications (MPL 1.1 s3.3): the dictionary and affix files were converted into compact binary form: letter-trigram cost tables (`kk.bin`); 32-bit FNV-1a hashes of the lower-cased stems with affix flags, the affix rules, and hashes of this project's own word lists (`kk-lex.bin`); stem hashes plus the suffix inventory (`kk-morph.bin`). To the suffix inventory of `kk-morph.bin`, the generator adds the Kazakh personal endings listed in `personalEndings` in `Sources/GenModel/main.swift` (-мын, -мін, -бын, -бін, -пын, -пін, -мыз, -міз, -быз, -біз, -пыз, -піз, -сың, -сің, -сыз, -сіз, -сыңдар, -сіңдер, -сыздар, -сіздер) where the source affix file lacks them (18 of the 20 were missing; the generator prints the count).
- Source availability (MPL 1.1 s3.2/s3.6): the Source Code of these files is the upstream dictionary at the URL above together with `Sources/GenModel/main.swift` and `generate-models.sh` in this repository (https://github.com/elapen/tilqos), available under the same terms. Anyone may rebuild the files, or replace them with other models, from the MIT-licensed source of Tilqos; the application loads them as separate data files (macOS) or embeds them at build time (Windows, `go:embed`).

## 2. Russian: LibreOffice `ru_RU` (Alexander I. Lebedev)

- Source: https://github.com/LibreOffice/dictionaries/tree/master/ru_RU (`ru_RU.dic`, 146,269 entries; `ru_RU.aff`, 1,581 suffix rules; `ru-lex.bin` holds 139,035 distinct normalised stems and those 1,581 rules). Modification noted upstream (`LICENSES/README_ru_RU.txt`): 2012-08-24, László Németh, TRY line added to `ru_RU.aff`.
- The files `ru.bin` and `ru-lex.bin` are **modified versions** (binary derivatives) of this dictionary and are marked as such here.
- Licence, verbatim from the upstream README:

> Copyright (c) 1997-2008, Alexander I. Lebedev
>
> All rights reserved.
>
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions
> are met:
> * Redistributions of source code must retain the above copyright
>   notice, this list of conditions and the following disclaimer.
> * Redistributions in binary form must reproduce the above copyright
>   notice, this list of conditions and the following disclaimer in the
>   documentation and/or other materials provided with the distribution.
> * Modified versions must be clearly marked as such.
> * The name of Alexander I. Lebedev may not be used to endorse or promote
>   products derived from this software without specific prior written
>   permission.
>
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
> AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
> ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
> LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
> CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
> SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
> INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
> CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
> ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
> POSSIBILITY OF SUCH DAMAGE.

## 3. English word forms: LibreOffice `en_US` (SCOWL, Ispell)

- Source: https://github.com/LibreOffice/dictionaries/tree/master/en (`en_US.dic`, `en_US.aff`). The lexicon `en-lex.bin` holds 48,392 distinct stems and 50 affix rules (43 suffix and 7 prefix rules). The upstream README saved as `LICENSES/README_en_US.txt` is headed "en_US Hunspell Dictionary" and "Version 2020.12.07"; the dictionary is derived from SCOWL (Spell Checker Oriented Word Lists, Kevin Atkinson) and its affix file is, in the README's words, "a heavily modified version of the original english.aff file which was released as part of Geoff Kuenning's Ispell and as such is covered by his BSD license".
- `en-lex.bin` is a **modified version** (a lossy, derived, binary form) of that dictionary and is marked as such here, as the Ispell licence requires of binary redistributions based on modified source code.
- The SCOWL notice, verbatim from the upstream README (`LICENSES/README_en_US.txt`):

> Copyright 2000-2018 by Kevin Atkinson
>
> Permission to use, copy, modify, distribute and sell these word
> lists, the associated scripts, the output created from the scripts,
> and its documentation for any purpose is hereby granted without fee,
> provided that the above copyright notice appears in all copies and
> that both that copyright notice and this permission notice appear in
> supporting documentation. Kevin Atkinson makes no representations
> about the suitability of this array for any purpose. It is provided
> "as is" without express or implied warranty.

- The Ispell condition about modifications (also verbatim, from the same file, under "Copyright 1993, Geoff Kuenning, Granada Hills, CA"):

> 3. All modifications to the source code must be clearly marked as
>    such.  Binary redistributions based on modified source code
>    must be clearly marked as modified versions in the documentation
>    and/or other materials provided with the distribution.

- The same upstream README also carries the copyright notices and licence texts of SCOWL's other component sources (among them the Ispell licence in full, the Princeton WordNet notice, the UKACD notice, and the notices for VarCon, Benjamin Titze and the public-domain lists). Some of them require that their text accompany all copies (the UKACD notice, for example, requires that the text of its document be included verbatim). The complete README is therefore reproduced verbatim in `LICENSES/README_en_US.txt` and is shipped with every build; it is not paraphrased here.

## 4. English trigram statistics: `/usr/share/dict/words`

`en.bin` contains only aggregate letter-trigram statistics (a table of 28 × 28 × 28 one-byte costs) computed from the word list shipped with macOS and FreeBSD (`web2`, Webster's Second International Dictionary, 1934; the copy `generate-models.sh` pins has 235,976 lines and SHA-256 `be41ad97963bf8dabedd5871d5d691596175269d540956b0f9965a885c2bbab9`). No words are included in `en.bin`. The README that accompanies that list on macOS and FreeBSD (`/usr/share/dict/README`, not part of this repository) says "The 1934 copyright has lapsed, according to the supplier"; that is the supplier's statement, not a legal opinion, and only aggregate letter statistics are used.

## 5. Go runtime and standard library (Windows builds)

The Windows executables are built with Go and statically include its runtime and standard library (the module has no third-party dependencies: `windows/go.mod` contains no `require`). The text below is identical to the `LICENSE` file of Go 1.25.6.

```
Copyright 2009 The Go Authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

   * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.
   * Neither the name of Google LLC nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

## 6. Keyboard layouts, system components

No keyboard-layout data is bundled. On macOS the tables are read at run time from the system (`TISCreateInputSourceList`, `UCKeyTranslate`); on Windows they are built from the installed layouts with `ToUnicodeEx`. The macOS app links only Apple system frameworks and the Swift runtime libraries that ship with macOS (checked with `otool -L` on the release executable).
