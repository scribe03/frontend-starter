import { EventEmitter, Input, Output } from '@angular/core';

export abstract class ModalBaseComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  public onClose(): void {
    this.close.emit();
  }
}
