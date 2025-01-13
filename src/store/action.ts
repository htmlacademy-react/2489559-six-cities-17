import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/types-offers';

export const changeCity = createAction<{city: string}>('city/changeCity');
export const loadOffers = createAction<{offer: Offers}>('offer/loadOffer');
export const changeSortingState = createAction<{sortingState: boolean}>('sortingState/changeSortingState');
export const changeSortingType = createAction<{sortingType: string}>('sortingType/changeSortingType');


