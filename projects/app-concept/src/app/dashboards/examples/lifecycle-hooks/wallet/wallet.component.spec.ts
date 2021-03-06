import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletComponent } from './wallet.component';
import { CoreModule } from '@master/core/core.module';
import { MoneyComponent } from '../money/money.component';
import { SharedConceptModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../shared/material.module';
import { UiModule } from '@master/ui/ui.module';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        CoreModule,
        UiModule,
        SharedConceptModule
      ],
      declarations: [
          MoneyComponent,
          WalletComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
