import {FileSystemObject} from "fso";
import * as JSZip from "jszip";
import fetch from "node-fetch";
import * as path from "path";

export interface OutputByType {
    base64: string;
    text: string;
    binarystring: string;
    array: number[];
    uint8array: Uint8Array;
    arraybuffer: ArrayBuffer;
    blob: Blob;
    nodebuffer: Buffer;
}

export type DownloadsGenerator = (version?: string) => Downloads;

export interface Downloads extends DownloadFuncs {
    /** archive uri */
    archiveUri: string;
    /** dll path in archive */
    dllPath: string;
    /** dll file name */
    dllName: string;
}

export interface DownloadFuncs {
    /**
     * download archive
     * @param uri archive uri
     */
    downloadArchive(uri?: string): Promise<Buffer>;
    /**
     * get shiori dll
     * @param uri archive uri
     * @param type output type
     */
    getDll<T extends JSZip.OutputType = "nodebuffer">(uri?: string, type?: T): Promise<OutputByType[T]>;
    /**
     * get shiori dll
     * @param archive archive
     * @param type output type
     */
    getDll<T extends JSZip.OutputType = "nodebuffer">(archive: Buffer, type?: T): Promise<OutputByType[T]>;
    /**
     * install dll
     * @param dir target dir
     * @param name dll file name
     * @param uri archive uri
     */
    installDll(dir: string, name?: string, uri?: string): Promise<void>;
    /**
     * install dll
     * @param file dll file
     * @param dir target dir
     * @param name dll file name
     */
    installDll(file: Buffer, dir: string, name?: string): Promise<void>;
}

export class DownloadError extends Error { }

export function genFuncs(archiveUri: string, dllPath: string, dllName: string): DownloadFuncs {
    async function downloadArchive(uri = archiveUri) {
        const response = await fetch(uri);
        if (!response.ok) {
            throw new DownloadError(`cannot download [${uri}] status = ${response.status} ${response.statusText}`);
        }
        return response.buffer();
    }

    async function getDll<T extends JSZip.OutputType = "nodebuffer">(uri?: string, type?: T):
        Promise<OutputByType[T]>;
    async function getDll<T extends JSZip.OutputType = "nodebuffer">(archive: Buffer, type?: T):
        Promise<OutputByType[T]>;
    async function getDll<T extends JSZip.OutputType>(archiveOrUri?: string | Buffer, type: T = "nodebuffer" as T) {
        const archive =
            archiveOrUri instanceof Buffer ?
            archiveOrUri :
            await downloadArchive(archiveOrUri);
        const zip = await JSZip.loadAsync(archive);
        return zip.file(dllPath).async(type);
    }

    async function installDll(dir: string, name?: string, uri?: string): Promise<void>;
    async function installDll(file: Buffer, dir: string, name?: string): Promise<void>;
    async function installDll(fileOrDir: string | Buffer, dirOrName?: string, nameOrUri?: string) {
        const archive = fileOrDir instanceof Buffer ? fileOrDir : await getDll(nameOrUri);
        const fsPath =
            fileOrDir instanceof Buffer ?
            path.join(dirOrName as string, nameOrUri || dllName) :
            path.join(fileOrDir, dirOrName || dllName);
        await new FileSystemObject(fsPath).writeFile(archive);
    }

    return {downloadArchive, getDll, installDll};
}
