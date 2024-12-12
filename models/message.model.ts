import { Status } from "../common/enums";
import { Pagination } from "./pagination.model";
import { User } from './user.model';

export abstract class MessagesPaginated {
	abstract pagination: Pagination;
	abstract data: Message[];
}

export abstract class Message {
	abstract id: number;
	abstract chatId: number;

	abstract text: string;

	abstract files: File[];

	abstract replyTo?: Message;

	abstract fromMe?: boolean;

	abstract from: User;

	abstract createdAt?: string;

	status: Status = Status.pending;
}
