import * as util from "./util";

export = function getVersion(): util.Downloads {
    const archiveUri = "http://lovelove.rabi-en-rose.net/files/misaka101.zip";
    const dllPath = "ghost/master/misaka.dll";
    const dllName = "misaka.dll";
    return {
        archiveUri,
        dllName,
        dllPath,
        ...util.genFuncs(archiveUri, dllPath, dllName),
    };
};
