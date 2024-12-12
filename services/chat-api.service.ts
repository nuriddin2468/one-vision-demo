import { Observable } from "../common/types";
import { Chat, ChatsPaginated } from "../models/chat.model";
import { Message, MessagesPaginated } from "../models/message.model";
import { WebsocketService } from "./websocket.service";

export abstract class ChatApiService {
    constructor(private ws: WebsocketService) {}

    // we need fetchChat only if user can open chat-detail in parallel with fetching chats
    abstract fetchChat(chatId: number): Promise<Chat>;

    abstract fetchChats(cursor?: string): Promise<Omit<ChatsPaginated, 'status'>>

    abstract sendMessage(message: Omit<Message, 'id' | 'from' | 'createdAt' | 'status'>): Promise<Message>;

    abstract loadMessages(chatId: number, cursor?: string): Promise<MessagesPaginated>;

    abstract subscribeToNewMessages(): Observable<Message>;

    abstract unsubscribeFromNewMessages(): void;

    destroy() {
        this.unsubscribeFromNewMessages();
    }
}