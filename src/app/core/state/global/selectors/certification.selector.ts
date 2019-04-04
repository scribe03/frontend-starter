import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ICertification } from '@core/api/cv/models/certification.interface';
import { ICertificationState } from '../actions/certification.action';

export const getCertificationsEntities = (state: ICertificationState<ICertification>) => state.entities;
export const getCertificationsCount = (state: ICertificationState<ICertification>) => state.count;
export const getCertificationsQueryCriteria = (state: ICertificationState<ICertification>) => state.queryCriteria;
export const getCertificationsIsLoading = (state: ICertificationState<ICertification>) => state.isLoading;

// SELECTORS

export const getCertificationsState = createFeatureSelector<ICertificationState<ICertification>>('certifications');

export const fetchCertificationsEntities = createSelector(getCertificationsState, getCertificationsEntities);
export const fetchCertificationsCount = createSelector(getCertificationsState, getCertificationsCount);
export const fetchCertificationsQueryCriteria = createSelector(getCertificationsState, getCertificationsQueryCriteria);
export const fetchCertificationsIsLoading = createSelector(getCertificationsState, getCertificationsIsLoading);
