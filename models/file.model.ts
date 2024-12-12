import { Status } from "../common/enums";

export abstract class FileModel {
    abstract id?: number;
	abstract blob: string; // blob or local-src
	abstract size: string; // size
	abstract format: string; // format of file: image, pdf and so on
	status: Status = Status.pending;
}


