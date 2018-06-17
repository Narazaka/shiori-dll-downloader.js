# shiori-dll-downloader.js

[![npm](https://img.shields.io/npm/v/shiori-dll-downloader.svg)](https://www.npmjs.com/package/shiori-dll-downloader)
[![npm license](https://img.shields.io/npm/l/shiori-dll-downloader.svg)](https://www.npmjs.com/package/shiori-dll-downloader)
[![npm download total](https://img.shields.io/npm/dt/shiori-dll-downloader.svg)](https://www.npmjs.com/package/shiori-dll-downloader)
[![npm download by month](https://img.shields.io/npm/dm/shiori-dll-downloader.svg)](https://www.npmjs.com/package/shiori-dll-downloader)

[![Dependency Status](https://david-dm.org/Narazaka/shiori-dll-downloader.js/status.svg)](https://david-dm.org/Narazaka/shiori-dll-downloader.js)
[![devDependency Status](https://david-dm.org/Narazaka/shiori-dll-downloader.js/dev-status.svg)](https://david-dm.org/Narazaka/shiori-dll-downloader.js?type=dev)
[![Travis Build Status](https://travis-ci.org/Narazaka/shiori-dll-downloader.js.svg?branch=master)](https://travis-ci.org/Narazaka/shiori-dll-downloader.js)
[![Greenkeeper badge](https://badges.greenkeeper.io/Narazaka/shiori-dll-downloader.js.svg)](https://greenkeeper.io/)

download shiori.dll

## Install

```bash
npm install shiori-dll-downloader
```

## Usage

```typescript
import {kawari, satori} from "shiori-dll-downloader";

async function main() {
    await kawari().installDll("./foo/ghost/master");
    await satori("mc159-6").installDll("./bar/ghost/master");
}

main();
```

## License

This is released under [Zlib License](http://narazaka.net/license/Zlib?2018).
