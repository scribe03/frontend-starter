import { TestBed } from '@angular/core/testing';

import { ApiDictionaryService } from './api-dictionary.service';
import { httpApiStandardMethods } from '@testutils/http-api-standard-methods';

describe('ApiDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: ApiDictionaryService, useValue:  jasmine.createSpyObj('ApiDictionaryService', httpApiStandardMethods)}
    ]
  }));

  it('should be created', () => {
    const service: ApiDictionaryService = TestBed.get(ApiDictionaryService);
    expect(service).toBeTruthy();
  });
});
