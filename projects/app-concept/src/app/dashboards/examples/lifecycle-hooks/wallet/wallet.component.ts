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
  selector: 'sc-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() money: {shortName: string, value: number, main: boolean}[];

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('--Wallet::ngOnChanges', changes);
  }

  public ngOnInit(): void {
    console.log('--Wallet::ngOnInit');
  }

  public ngDoCheck(): void {
    console.log('--Wallet::ngDoCheck');
  }

  public ngAfterContentInit(): void {
    console.log('--Wallet::ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('--Wallet::ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    console.log('--Wallet::ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    console.log('--Wallet::ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    console.log('--Wallet::ngOnDestroy');
  }

  public addMoney(): void {
    this.money.push({
      shortName: 'zł',
      value: Math.floor((Math.random() * 10) + 1),
      main: false
    });
  }
}
