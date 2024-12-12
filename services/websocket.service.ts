import { WebsocketKeys } from "../common/enums";
import { Observable, Subscription } from "../common/types";

export abstract class WebsocketService {

    private subscription$?: Subscription;

    abstract init(): void;

    abstract subscribe<T>(event: WebsocketKeys): Observable<T>;

    abstract unsubscribe(event: WebsocketKeys): void;

    destroy(): void {
        this.subscription$?.();
    }
}