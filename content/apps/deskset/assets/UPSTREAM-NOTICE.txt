# Third-party notices

Deskset is licensed under the GNU General Public License v3 (see `LICENSE`). It includes the following third-party
software, used under its own license.

## Lua 5.1.5

- Where: `Sources/CLua` (Lua's own files unmodified; `deskset_lua.h`, `deskset_lua.c` and `deskset_lstrlib.c` are
  Deskset's shims, the last one derived from Lua's `lstrlib.c`). See `Sources/CLua/README.md`.
- Website: <https://www.lua.org>
- License: MIT

```
Copyright (C) 1994-2012 Lua.org, PUC-Rio.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## MET Norway weather data

- Where: fetched at run time by the weather plugins (`Plugin=MacWeather`) from MET Norway's Locationforecast 2.0 API;
  a saved response is used as a test fixture in `TestSkins/Plugins/@Resources/Weather/` (`metno-complete-oslo.json`,
  `metno-compact-oslo.json`).
- Source: The Norwegian Meteorological Institute (MET Norway), <https://api.met.no/>
- License: Creative Commons Attribution 4.0 International (CC BY 4.0,
  <https://creativecommons.org/licenses/by/4.0/>) and the Norwegian Licence for Open Government Data (NLOD 2.0).
- Credit shown to users: "Based on data from MET Norway" (in weather skins, the skin menu and the About window).
  Deskset derives values from the data (daily summaries, unit conversions, feels-like temperatures). MET Norway does
  not endorse Deskset.

## GeoNames place names

- Where: `Data/Places/places.tsv` (bundled in the app as `Contents/Resources/Places/places.tsv`) and the small test
  table `TestSkins/Plugins/@Resources/Weather/places-fixture.tsv`.
- Source: GeoNames, <https://www.geonames.org/> — `cities15000.txt`, `countryInfo.txt` and `admin1CodesASCII.txt`
  from <https://download.geonames.org/export/dump/>.
- License: Creative Commons Attribution 4.0 International (CC BY 4.0,
  <https://creativecommons.org/licenses/by/4.0/>).
- Changes: trimmed and reformatted by `scripts/make-places.swift` (coordinates rounded to two decimals, alternate
  names filtered, see `Data/Places/README.md`).

## Rainmeter

Deskset runs skins written for [Rainmeter](https://www.rainmeter.net). It is an independent, clean-room
implementation written from Rainmeter's public documentation (<https://docs.rainmeter.net/manual/>); it contains no
Rainmeter source code. Deskset is not affiliated with or endorsed by the Rainmeter project. "Rainmeter" is a trademark
of its respective owners and is used here only to describe compatibility.

No third-party skins are included. The example skins in `DefaultSkins/` and the test skins in `TestSkins/` are
original work.
