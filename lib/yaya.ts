const versionLinks = require("./yayaVersionLinks.json"); // tslint:disable-line no-var-requires
import * as util from "./util";

export = function getVersion(version = "tc550-3"): util.Downloads {
    const archiveUri = `https://drive.google.com/uc?export=download&id=${versionLinks[version]}`;
    const dllPath = "yaya.dll";
    const dllName = "yaya.dll";
    return {
        archiveUri,
        dllName,
        dllPath,
        ...util.genFuncs(archiveUri, dllPath, dllName),
    };
};
