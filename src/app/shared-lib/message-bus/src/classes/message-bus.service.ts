import { Observable, Subject } from 'rxjs';
import { MessageBusInterface } from './../intefaces/message-bus.interface';
import { Message } from './../intefaces/message.interface';


export abstract class MessageBusService implements MessageBusInterface {
    public bus$: Observable<Message>;
    protected bus = new Subject<Message>(); // you can use: BehaviorSubject or ReplaySubject

    protected constructor() {
        this.bus$ = this.bus.asObservable();
    }

    public send(event: Message): void {
        this.bus.next(event);
    }
}
