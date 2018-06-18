import * as util from "./util";

export = function getVersion(version = "tc550-3"): util.Downloads {
    const versionl = version[0].toUpperCase() + version.slice(1);
    const versions = version[0].toLowerCase() + version.slice(1);
    const archiveUri = `https://github.com/ponapalt/yaya-shiori/releases/download/${versionl}/yaya-${versions}.zip`;
    const dllPath = "yaya.dll";
    const dllName = "yaya.dll";
    return {
        archiveUri,
        dllName,
        dllPath,
        ...util.genFuncs(archiveUri, dllPath, dllName),
    };
};
