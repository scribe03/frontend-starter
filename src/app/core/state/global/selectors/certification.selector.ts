import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Certification } from '@core/api/cv/models/certification.interface';
import { CertificationState } from '../actions/certification.action';

export const certificationsEntities = (state: CertificationState<Certification>) => state.entities;
export const certificationsCount = (state: CertificationState<Certification>) => state.count;
export const certificationsQueryCriteria = (state: CertificationState<Certification>) => state.queryCriteria;
export const certificationsIsLoading = (state: CertificationState<Certification>) => state.isLoading;

// SELECTORS

export const getCertificationsState = createFeatureSelector<CertificationState<Certification>>('certifications');

export const getCertificationsEntities = createSelector(getCertificationsState, certificationsEntities);
export const getCertificationsCount = createSelector(getCertificationsState, certificationsCount);
export const getCertificationsQueryCriteria = createSelector(getCertificationsState, certificationsQueryCriteria);
export const getCertificationsIsLoading = createSelector(getCertificationsState, certificationsIsLoading);
