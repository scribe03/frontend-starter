import { CertificationAction, CertificationActionTypes, CertificationState } from '@core/state/certifications/certification.action';

export const initialCertificationState: CertificationState = {
    entities: [],
    count: 0,
    queryCriteria: [],
    isLoading: false
};

export function certificationReducer(
    state = initialCertificationState,
    action: CertificationActionTypes
): CertificationState {

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
            return {
                ...state,
                queryCriteria: action.payload,
                isLoading: true
            };

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
