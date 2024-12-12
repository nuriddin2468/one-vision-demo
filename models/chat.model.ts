import { Status } from "../common/enums";
import { MessagesPaginated, Message } from "./message.model";
import { Pagination } from "./pagination.model";
import { User } from "./user.model";

export abstract class ChatsPaginated {
    abstract pagination: Pagination;
    abstract data: Chat[];
    status: Status = Status.pending;
}

export abstract class Chat {
    abstract id: number;
    abstract messages: MessagesPaginated;
    abstract lastMessage: Message;
    abstract participants: User[];
}
