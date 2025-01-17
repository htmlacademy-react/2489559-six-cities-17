import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSortingState, changeSortingType, requireAuthorization, setError, setLoadingStatus } from './action';
import { getCurrentLocationOffers } from '../utils/utils';
import { Offers } from '../types/types-offers';
import { LOCATIONS, SORT_TYPE } from '../constants/constants';
import { AuthorizationStatus } from '../constants/constants';


const initialState: {
  city: string;
  offers: Offers[];
  favoriteOffers: Offers[];
  currentOffers: Offers[];
  currentSortingType: string;
  isSortingOpened: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isLoading: boolean;
  login: string;
} =
{
  city: LOCATIONS[0],
  offers: [],
  favoriteOffers: [],
  currentOffers: [],
  currentSortingType: SORT_TYPE.POPULAR,
  isSortingOpened: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isLoading: false,
  login: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
      state.isSortingOpened = false;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});

export { reducer };

