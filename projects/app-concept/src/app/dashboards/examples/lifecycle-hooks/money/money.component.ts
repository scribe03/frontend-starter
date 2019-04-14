import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck, Input,
    OnChanges, OnDestroy,
    OnInit, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'sc-money',
    templateUrl: './money.component.html',
    styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() money: { shortName: string, value: number };
    public counter = 0;

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('+++++Money::ngOnChanges', changes);
    }

    public ngOnInit(): void {
        console.log('+++++Money::ngOnInit');
    }

    public ngDoCheck(): void {
        console.log('+++++Money::ngDoCheck');
    }

    public ngAfterContentInit(): void {
        console.log('+++++Money::ngAfterContentInit');
    }

    public ngAfterContentChecked(): void {
        console.log('+++++Money::ngAfterContentChecked');
    }

    public ngAfterViewInit(): void {
        console.log('+++++Money::ngAfterViewInit');
    }

    public ngAfterViewChecked(): void {
        console.log('+++++Money::ngAfterViewChecked');
    }

    public ngOnDestroy(): void {
        console.log('+++++Money::ngOnDestroy');
    }

    public add(): void {
        if (this.money) {
            this.money.value++;
        }
    }

    public addToCounter(): void {
        this.counter++;
    }
}
