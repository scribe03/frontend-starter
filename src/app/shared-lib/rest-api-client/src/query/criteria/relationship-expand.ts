import { QueryCriteria } from '../query-criteria.interface';
import { QueryCriteriaType } from '../query-criteria-type';

// To include parent resource
export class QueryCriteriaRelationshipExpand implements QueryCriteria {

    constructor(private expand: string) {
    }

    public getParameters(): string {
        return '_expand=' + this.expand;
    }

    public getType(): string {
        return QueryCriteriaType.RELATIONSHIP_EXPAND;
    }

    public getExpand(): string {
        return this.expand;
    }
}
