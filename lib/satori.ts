const versionLinks = require("./satoriVersionLinks.json"); // tslint:disable-line no-var-requires
import * as util from "./util";

export = function getVersion(version = "mc159-6"): util.Downloads {
    const archiveUri = `https://drive.google.com/uc?export=download&id=${versionLinks[version]}`;
    const dllPath = "satori.dll";
    const dllName = "satori.dll";
    return {
        archiveUri,
        dllName,
        dllPath,
        ...util.genFuncs(archiveUri, dllPath, dllName),
    };
};
