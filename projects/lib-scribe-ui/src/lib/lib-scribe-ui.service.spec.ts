import { TestBed } from '@angular/core/testing';

import { LibScribeUiService } from './lib-scribe-ui.service';

describe('LibScribeUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibScribeUiService = TestBed.get(LibScribeUiService);
    expect(service).toBeTruthy();
  });
});
