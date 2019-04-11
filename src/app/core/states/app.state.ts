import { CertificationState } from './certifications/certification.action';

export interface IAppState {
    readonly certifications: CertificationState;
}
