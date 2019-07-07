import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  public showExtremelySimple = false;

  constructor() { }

  ngOnInit() {
  }

  public openExtremelySimpleModal(): void {
    this.showExtremelySimple = true;
  }

  public onCloseExtremelySimpleModal(): void {
    this.showExtremelySimple = false;
  }

}
