import * as assert from "assert";
import { FileSystemObject } from "fso";
import * as shiori from "../lib";

const basedir = new FileSystemObject(__dirname, "tmp");

function describeShiori(shioriType: shiori.ShioriType) {
    describe(shioriType, () => {
        const downloads = shiori[shioriType]();
        it("can download archive", async () => {
            const dir = basedir.join(shioriType);
            dir.mkdirAllSync();
            // assert(await downloads.downloadArchive() instanceof Buffer);
            await downloads.installDll(dir.path);
            assert(dir.join(downloads.dllName).existsSync());
            dir.rmAllSync();
        });
    });
}

describe("shiori", () => {
    for (const shioriType of Object.keys(shiori) as shiori.ShioriType[]) describeShiori(shioriType);
    after(() => {
        basedir.rmAllSync();
        basedir.rmdirSync();
    });
});
