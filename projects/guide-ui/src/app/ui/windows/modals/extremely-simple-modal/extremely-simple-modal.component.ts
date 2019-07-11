import { Component } from '@angular/core';
import { BaseModalComponent } from '@master/ui/windows/modal/base-modal/base-modal.component';

@Component({
  selector: 'app-extremely-simple-modal',
  templateUrl: './extremely-simple-modal.component.html',
  styleUrls: ['./extremely-simple-modal.component.scss']
})
export class ExtremelySimpleModalComponent extends BaseModalComponent {}
