import { CertificationState } from './actions/certification.action';

export interface IAppState {
    readonly certifications: CertificationState;
}
