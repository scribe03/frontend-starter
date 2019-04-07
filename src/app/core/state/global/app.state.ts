import { Certification } from '../../api/cv/models/certification.interface';
import { CertificationState } from './actions/certification.action';

export interface IAppState {
    readonly certifications: CertificationState<Certification>;
}
