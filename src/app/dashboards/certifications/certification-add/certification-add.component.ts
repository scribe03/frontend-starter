import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '@core/state/app.state';
import { CertificationActionAdd } from '@core/state/certifications/certification.action';

@Component({
  selector: 'fds-certification-add',
  templateUrl: './certification-add.component.html',
  styleUrls: ['./certification-add.component.scss']
})
export class CertificationAddComponent implements OnInit {
  @Output() isAdd = new EventEmitter<boolean>();

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  add(name: string): void {
    this.store.dispatch(new CertificationActionAdd({id: null, personId: null, name: name}));
    this.isAdd.emit(true);
  }

}
