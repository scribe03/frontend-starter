import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalSize } from '@master/ui/windows/modal/modal.model';

@Component({
  selector: 'sc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() show = false;
  @Input() size: ModalSize;
  @Output() clickedOutsideWorkArea = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
