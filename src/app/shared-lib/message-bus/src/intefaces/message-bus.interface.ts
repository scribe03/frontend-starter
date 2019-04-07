import { Observable } from 'rxjs';
import { Message } from './message.interface';

export interface MessageBusInterface {
    bus$: Observable<Message>;
    send(event: Message): void;
}
