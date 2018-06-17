# shiori-download.js

[![npm](https://img.shields.io/npm/v/shiori-download.svg)](https://www.npmjs.com/package/shiori-download)
[![npm license](https://img.shields.io/npm/l/shiori-download.svg)](https://www.npmjs.com/package/shiori-download)
[![npm download total](https://img.shields.io/npm/dt/shiori-download.svg)](https://www.npmjs.com/package/shiori-download)
[![npm download by month](https://img.shields.io/npm/dm/shiori-download.svg)](https://www.npmjs.com/package/shiori-download)

[![Dependency Status](https://david-dm.org/Narazaka/shiori-download.js/status.svg)](https://david-dm.org/Narazaka/shiori-download.js)
[![devDependency Status](https://david-dm.org/Narazaka/shiori-download.js/dev-status.svg)](https://david-dm.org/Narazaka/shiori-download.js?type=dev)
[![Travis Build Status](https://travis-ci.org/Narazaka/shiori-download.js.svg?branch=master)](https://travis-ci.org/Narazaka/shiori-download.js)
[![Greenkeeper badge](https://badges.greenkeeper.io/Narazaka/shiori-download.js.svg)](https://greenkeeper.io/)

download shiori.dll

## Install

```bash
npm install shiori-download
```

## Usage

```typescript
import {kawari, satori} from "shiori-download";

async function main() {
    await kawari().installDll("./foo/ghost/master");
    await satori("mc159-6").installDll("./bar/ghost/master");
}

main();
```

## License

This is released under [Zlib License](http://narazaka.net/license/Zlib?2018).
