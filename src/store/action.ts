import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{city: string}>('city/changeCity');
export const loadOffers = createAction('offers/loadOffers');
