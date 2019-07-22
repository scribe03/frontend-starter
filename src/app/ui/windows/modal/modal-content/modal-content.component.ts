import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
