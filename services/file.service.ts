import { FileModel } from "../models/file.model";

export abstract class FileService {
    abstract upload(files: FileModel[]): Promise<FileModel[]>;

    abstract remove(): Promise<void>;
}