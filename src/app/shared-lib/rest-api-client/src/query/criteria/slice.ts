import { QueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

export interface SliceOption {
    start: number;
    end?: 0;
    limit?: 0;
}

export class QueryCriteriaSlice implements QueryCriteria {

    constructor(private slice: SliceOption) {
    }

    public getParameters(): string {
        let slice = '_start=' + this.slice.start;

        if (this.slice.hasOwnProperty('end')) {
            slice += slice + '&end=' + this.slice.end;
        }

        if (this.slice.hasOwnProperty('limit')) {
            slice += slice + '&limit=' + this.slice.limit;
        }

        return slice;
    }

    public getType(): string {
        return QueryCriteriaType.SLICE;
    }

    public getSlice(): SliceOption {
        return this.slice;
    }
}
