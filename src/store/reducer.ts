import { createReducer } from '@reduxjs/toolkit';
import { mockOffers } from '../mocks/offers';
import { changeCity } from './action';
import { loadOffers } from './action';
import { getCurrentLocationOffers } from '../utils/utils';
import { Offers, City } from '../types/types-offers';


const initialState: {
  city: City['name'];
  offers: Offers[];
  currentOffers: Offers[];
} =
{
  city: 'Paris',
  offers: mockOffers,
  currentOffers: getCurrentLocationOffers(mockOffers, 'Paris'),
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(loadOffers, (state) => {
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    });
});

export { reducer };
