import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSortingState, changeSortingType, requireAuthorization } from './action';
import { getCurrentLocationOffers } from '../utils/utils';
import { Offers, City } from '../types/types-offers';
import { LOCATIONS, SORT_TYPE } from '../constants/constants';
import { AuthorizationStatus } from '../constants/constants';


const initialState: {
  city: City['name'];
  offers: Offers[];
  currentOffers: Offers[];
  currentSortingType: string;
  isSortingOpened: boolean;
  authorizationStatus: AuthorizationStatus;
} =
{
  city: LOCATIONS[0],
  offers: [],
  currentOffers: [],
  currentSortingType: SORT_TYPE.POPULAR,
  isSortingOpened: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    })
    .addCase(changeSortingState, (state, action) => {
      const { sortingState } = action.payload;
      state.isSortingOpened = sortingState;
    })
    .addCase(changeSortingType, (state, action) => {
      const { sortingType } = action.payload;
      state.currentSortingType = sortingType;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
