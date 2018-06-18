import * as util from "./util";

export = function getVersion(version = "mc159-6"): util.Downloads {
    const versionl = version[0].toUpperCase() + version.slice(1);
    const versions = version[0].toLowerCase() + version.slice(1);
    const archiveUri =
        `https://github.com/ponapalt/satoriya-shiori/releases/download/${versionl}/satori-${versions}.zip`;
    const dllPath = "satori.dll";
    const dllName = "satori.dll";
    return {
        archiveUri,
        dllName,
        dllPath,
        ...util.genFuncs(archiveUri, dllPath, dllName),
    };
};
