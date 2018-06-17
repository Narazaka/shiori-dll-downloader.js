import * as util from "./util";

export = function getVersion(): util.Downloads {
    const archiveUri = "https://github.com/kawari/Archives/raw/master/Phase8/kawari-828.zip";
    const dllPath = "kawari-828/bin/shiori.dll";
    const dllName = "shiori.dll";
    return {
        archiveUri,
        dllName,
        dllPath,
        ...util.genFuncs(archiveUri, dllPath, dllName),
    };
};
