import * as util from "./util";

export = function getVersion(): util.Downloads {
    const archiveUri = "http://umeici.onjn.jp/files/konnoayame_v5p8.nar";
    const dllPath = "ghost/master/aya5.dll";
    const dllName = "aya5.dll";
    return {
        archiveUri,
        dllName,
        dllPath,
        ...util.genFuncs(archiveUri, dllPath, dllName),
    };
};
