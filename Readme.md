# shiori-dll-download.js

[![npm](https://img.shields.io/npm/v/shiori-dll-download.svg)](https://www.npmjs.com/package/shiori-dll-download)
[![npm license](https://img.shields.io/npm/l/shiori-dll-download.svg)](https://www.npmjs.com/package/shiori-dll-download)
[![npm download total](https://img.shields.io/npm/dt/shiori-dll-download.svg)](https://www.npmjs.com/package/shiori-dll-download)
[![npm download by month](https://img.shields.io/npm/dm/shiori-dll-download.svg)](https://www.npmjs.com/package/shiori-dll-download)

[![Dependency Status](https://david-dm.org/Narazaka/shiori-dll-download.js/status.svg)](https://david-dm.org/Narazaka/shiori-dll-download.js)
[![devDependency Status](https://david-dm.org/Narazaka/shiori-dll-download.js/dev-status.svg)](https://david-dm.org/Narazaka/shiori-dll-download.js?type=dev)
[![Travis Build Status](https://travis-ci.org/Narazaka/shiori-dll-download.js.svg?branch=master)](https://travis-ci.org/Narazaka/shiori-dll-download.js)
[![Greenkeeper badge](https://badges.greenkeeper.io/Narazaka/shiori-dll-download.js.svg)](https://greenkeeper.io/)

download shiori.dll

## Install

```bash
npm install shiori-dll-download
```

## Usage

```typescript
import {kawari, satori} from "shiori-dll-download";

async function main() {
    await kawari().installDll("./foo/ghost/master");
    await satori("mc159-6").installDll("./bar/ghost/master");
}

main();
```

## License

This is released under [Zlib License](http://narazaka.net/license/Zlib?2018).
