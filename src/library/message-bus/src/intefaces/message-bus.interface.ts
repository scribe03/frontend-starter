import { Observable } from 'rxjs';
import { Message } from './message.interface';

export interface MessageBusInterface {
    bus$: Observable<Message>;
    publish(event: Message): void;
}
