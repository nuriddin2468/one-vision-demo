import { Status } from "../common/enums";
import { Chat, ChatsPaginated } from "../models/chat.model";
import { FileModel } from "../models/file.model";
import { Message } from "../models/message.model";
import { ChatApiService } from "./chat-api.service";
import { FileService } from "./file.service";
import { MessageNotificationService } from "./message-notification.service";

export abstract class ChatsService {
    abstract chats?: ChatsPaginated;

    abstract activeChatId?: number;

    abstract get activeChat(): Chat | null;

    constructor(private chatApiService: ChatApiService, private fileService: FileService, private messageNotificationService: MessageNotificationService) {}

    // without error handling
    init() {
        this.chatApiService.fetchChats().then(chats => this.chats = {...chats, status: Status.success});
        this.subscribeToNewMessages();
    }

    setActiveChat(chat: Chat) {
        // set active chat
        // load messages or load more messages (depends)
    }

    loadMoreChats() {
        if (!this.chats) throw Error('No initial chats');
        this.chats.status = Status.loading;
        this.chatApiService.fetchChats(this.chats.pagination.cursor).then(({data, pagination}) => {
            if (!this.chats) throw Error('No initial chats');
            this.chats.data = [...this.chats.data, ...data];
            this.chats.pagination = pagination;
        });
    }

    loadMessages() {
        if (!this.chats) throw Error('No initial chats');
        // ... set messages via chatApiService
    }

    loadMoreMessages() {
        // ... set more messages via chatApiService
    }

    sendMessage() {
        // check if there is no uploading files (by isAllFilesUploaded)
        // sendMessage via chatApiService
    }

    addAttachment(files: FileModel[]): void {
        // upload file via fileService and update attachment on chat here
    };


    destroy() {
        this.chats = undefined;
    }
    
    private isAllFilesUploaded(chatId: number): boolean {
        // check that all files are with success status
        return true;
    }

    private subscribeToNewMessages() {
        // listenOnNewMessage via chatApiService
        // onEvent add new message on active chat (filter ofc) via
        // onEvent sort chats
        // notifyNewMessage
    }

    private notifyNewMessage() {
        // notify via messageNotificationService
    }

    private sortChats() {
        // sort chats by lastMessage' date
    }

    private addNewMessage(message: Message) {
        // add message + notify
    }
}