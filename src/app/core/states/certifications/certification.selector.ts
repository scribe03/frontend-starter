import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CertificationState } from '@core/states/certifications/certification.action';

export const certificationsEntities = (state: CertificationState) => state.entities;
export const certificationsCount = (state: CertificationState) => state.count;
export const certificationsQueryCriteria = (state: CertificationState) => state.queryCriteria;
export const certificationsIsLoading = (state: CertificationState) => state.isLoading;

// SELECTORS

export const getCertificationsState = createFeatureSelector<CertificationState>('certifications');

export const getCertificationsEntities = createSelector(getCertificationsState, certificationsEntities);
export const getCertificationsCount = createSelector(getCertificationsState, certificationsCount);
export const getCertificationsQueryCriteria = createSelector(getCertificationsState, certificationsQueryCriteria);
export const getCertificationsIsLoading = createSelector(getCertificationsState, certificationsIsLoading);
