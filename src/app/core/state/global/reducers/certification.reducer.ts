import { Certification } from '@core/api/cv/models/certification.interface';
import { CertificationAction, CertificationActionTypes, CertificationState } from '../actions/certification.action';

export const initialCertificationState: CertificationState<Certification> = {
    entities: [],
    count: 0,
    queryCriteria: [],
    isLoading: false
};

export function certificationReducer(
    state = initialCertificationState,
    action: CertificationActionTypes
): CertificationState<Certification> {

    switch (action.type) {
        case CertificationAction.COUNT:
            return state;

        case CertificationAction.COUNT_SUCCESS:
            return {
                ...state,
                count: action.payload.count
            };

        case CertificationAction.ADD:
            return state;

        case CertificationAction.LOAD:
            return {...state, isLoading: true};

        case CertificationAction.LOAD_SUCCESS:
            return {
                ...state,
                entities: action.payload,
                isLoading: false
            };

        case CertificationAction.DELETE:
            return state;

        default:
            return state;
    }
}
