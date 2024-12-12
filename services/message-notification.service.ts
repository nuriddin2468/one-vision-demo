import { Message } from "../models/message.model";

export abstract class MessageNotificationService {
    notify(message: Message) {}
}