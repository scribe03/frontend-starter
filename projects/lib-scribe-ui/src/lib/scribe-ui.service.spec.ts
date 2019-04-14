import { TestBed } from '@angular/core/testing';

import { ScribeUiService } from './scribe-ui.service';

describe('ScribeUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScribeUiService = TestBed.get(ScribeUiService);
    expect(service).toBeTruthy();
  });
});
