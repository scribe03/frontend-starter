import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '@master/core/states/app.state';
import { CertificationActionAdd } from '@master/core/states/certifications/certification.action';

@Component({
  selector: 'sce-certification-add',
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
