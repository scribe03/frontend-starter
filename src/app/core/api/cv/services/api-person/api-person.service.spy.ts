import { of } from 'rxjs';

import { ApiPersonService } from './api-person.service';
import { httpApiStandardMethods } from '@testutils/http-api-standard-methods';
import { mockPerson } from '@testutils/mocks/persons.mock';

export const createSpyApiPersonService = () => jasmine.createSpyObj('ApiPersonService', httpApiStandardMethods);

export const getPreparedSpyApiPersonService = (serviceSpy: jasmine.SpyObj<ApiPersonService>) => {
    serviceSpy.fetchById.and.returnValue(of(mockPerson()[0]));
    serviceSpy.fetch.and.returnValue(of(mockPerson()));
    serviceSpy.count.and.returnValue(of(mockPerson().length));
    serviceSpy.save.and.returnValue(of({}));
    serviceSpy.create.and.returnValue(of({}));
    serviceSpy.update.and.returnValue(of({}));
    serviceSpy.modify.and.returnValue(of({}));
    serviceSpy.delete.and.returnValue(of({}));
    serviceSpy.exist.and.returnValue(of(true));
    return serviceSpy;
};
