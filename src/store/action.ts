import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/types-offers';
import { AuthorizationStatus } from '../constants/constants';

export const changeCity = createAction<{city: string}>('city/changeCity');
export const loadOffers = createAction<Offers[]>('offers/loadOffers');
export const changeSortingState = createAction<{sortingState: boolean}>('sortingState/changeSortingState');
export const changeSortingType = createAction<{sortingType: string}>('sortingType/changeSortingType');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('offers/setError');
