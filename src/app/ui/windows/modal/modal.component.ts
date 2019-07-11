import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() show = false;
  @Output() clickedOutsideWorkArea = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
