import { QueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

export interface IFiltersOption {
    key: string;
    value: string | number;
}

export class QueryCriteriaFilter implements QueryCriteria {

    constructor(private filters: IFiltersOption[]) {
    }

    public getParameters(): string {
        let filters = '';

        (this.filters || []).forEach(item => {
            if (filters !== '') {
                filters += '&';
            }
            filters += item.key + '=' + item.value;
        });

        return filters;
    }

    public getType(): string {
        return QueryCriteriaType.FILTER;
    }

    public getFilters(): IFiltersOption[] {
        return this.filters;
    }
}
