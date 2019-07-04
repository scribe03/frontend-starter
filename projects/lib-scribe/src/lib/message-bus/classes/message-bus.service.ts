import { BehaviorSubject, Observable } from 'rxjs';

import { MessageBusInterface } from './../intefaces/message-bus.interface';
import { Message } from './../intefaces/message.interface';

export abstract class MessageBusService implements MessageBusInterface {
    public bus$: Observable<Message>;
    protected bus = new BehaviorSubject<Message>(null); // you can use: Subject, BehaviorSubject or ReplaySubject

    protected constructor() {
        this.bus$ = this.bus.asObservable();
    }

    public publish(event: Message): void {
        this.bus.next(event);
    }
}
