import { ICertification } from '../../api/cv/models/certification.interface';
import { ICertificationState } from './actions/certification.action';

export interface IAppState {
    readonly certifications: ICertificationState<ICertification>;
}
