import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {

  public money: {shortName: string, value: number, main: boolean}[] = [
    {
      shortName: 'zł',
      value: 100,
      main: true
    },
    {
      shortName: '$',
      value: 100,
      main: false
    },
  ];

  constructor() { }

  public ngOnInit() {
  }

  public addMoney(): void {
    this.money.push({
      shortName: 'zł',
      value: Math.floor((Math.random() * 10) + 1),
      main: false
    });
  }

}
