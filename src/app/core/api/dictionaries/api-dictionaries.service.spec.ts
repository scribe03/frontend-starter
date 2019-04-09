import { TestBed } from '@angular/core/testing';

import { ApiDictionariesService } from './api-dictionaries.service';
import { httpApiStandardMethods } from '@testutils/http-api-standard-methods';

describe('ApiDictionariesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: ApiDictionariesService, useValue:  jasmine.createSpyObj('ApiDictionariesService', httpApiStandardMethods)}
    ]
  }));

  it('should be created', () => {
    const service: ApiDictionariesService = TestBed.get(ApiDictionariesService);
    expect(service).toBeTruthy();
  });
});
