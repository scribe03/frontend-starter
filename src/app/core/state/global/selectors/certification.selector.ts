import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Certification } from '@core/api/cv/models/certification.interface';
import { CertificationState } from '../actions/certification.action';

export const getCertificationsEntities = (state: CertificationState<Certification>) => state.entities;
export const getCertificationsCount = (state: CertificationState<Certification>) => state.count;
export const getCertificationsQueryCriteria = (state: CertificationState<Certification>) => state.queryCriteria;
export const getCertificationsIsLoading = (state: CertificationState<Certification>) => state.isLoading;

// SELECTORS

export const getCertificationsState = createFeatureSelector<CertificationState<Certification>>('certifications');

export const fetchCertificationsEntities = createSelector(getCertificationsState, getCertificationsEntities);
export const fetchCertificationsCount = createSelector(getCertificationsState, getCertificationsCount);
export const fetchCertificationsQueryCriteria = createSelector(getCertificationsState, getCertificationsQueryCriteria);
export const fetchCertificationsIsLoading = createSelector(getCertificationsState, getCertificationsIsLoading);
