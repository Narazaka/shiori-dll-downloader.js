import aya5 = require("./aya5");
import kawari = require("./kawari");
import kawari7 = require("./kawari7");
import misaka = require("./misaka");
import satori = require("./satori");
import { DownloadsGenerator } from "./util";
import yaya = require("./yaya");

const shiori: {
    aya5: DownloadsGenerator,
    kawari: DownloadsGenerator,
    kawari7: DownloadsGenerator,
    misaka: DownloadsGenerator,
    satori: DownloadsGenerator,
    yaya: DownloadsGenerator,
} = {
    aya5,
    kawari,
    kawari7,
    misaka,
    satori,
    yaya,
};

namespace shiori {
    export type ShioriType = keyof typeof shiori;
}

export = shiori;
