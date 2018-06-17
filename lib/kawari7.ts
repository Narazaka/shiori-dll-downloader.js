import * as util from "./util";

export = function getVersion(): util.Downloads {
    const archiveUri = "https://github.com/kawari/Archives/raw/master/Phase5/kawari-750-kdt.zip";
    const dllPath = "shiori.dll";
    const dllName = "shiori.dll";
    return {
        archiveUri,
        dllName,
        dllPath,
        ...util.genFuncs(archiveUri, dllPath, dllName),
    };
};
