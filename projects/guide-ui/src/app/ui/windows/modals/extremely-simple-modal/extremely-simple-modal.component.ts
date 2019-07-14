import { Component } from '@angular/core';
import { ModalBaseComponent } from '@master/ui/windows/modal/modal-base/modal-base.component';
import { ModalSize } from '@master/ui/windows/modal/modal.model';

@Component({
  selector: 'app-extremely-simple-modal',
  templateUrl: './extremely-simple-modal.component.html',
  styleUrls: ['./extremely-simple-modal.component.scss']
})
export class ExtremelySimpleModalComponent extends ModalBaseComponent {
  public modalSize: typeof ModalSize = ModalSize;
}
