import { IQueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

export type OperatorType = 'gte' | 'lte' | 'ne' | 'like';

export interface IOperatorOption {
    key: string;
    operator: OperatorType;
    value: string | number;
}

export class QueryCriteriaOperator implements IQueryCriteria {

    constructor(private operators: IOperatorOption[]) {
    }

    public getParameters(): string {
        let operators = '';

        (this.operators || []).forEach(item => {
            if (operators !== '') {
                operators += '&';
            }

            switch (item.operator) {
                case 'gte':
                    operators += item.key + '_gte=' + item.value;
                    break;
                case 'lte':
                    operators += item.key + '_lte=' + item.value;
                    break;
                case 'ne':
                    operators += item.key + '_ne=' + item.value;
                    break;
                case 'like':
                    operators += item.key + '_like=' + item.value;
                    break;
            }
        });

        return operators;
    }

    public getType(): string {
        return QueryCriteriaType.OPERATOR;
    }

    public getOperators(): IOperatorOption[] {
        return this.operators;
    }
}
