import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSortingState, changeSortingType, requireAuthorization, setError, setLoadingStatus, setUserData } from './action';
import { getCurrentLocationOffers } from '../utils/utils';
import { Offers } from '../types/types-offers';
import { LOCATIONS, SORT_TYPE } from '../constants/constants';
import { AuthorizationStatus } from '../constants/constants';
import { UserData } from '../types/user-data';


const initialState: {
  city: string;
  offers: Offers[];
  favoriteOffers: Offers[];
  currentOffers: Offers[];
  currentSortingType: string;
  isSortingOpened: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string;
  isLoading: boolean;
  user: UserData | null;
} =
{
  city: LOCATIONS[0],
  offers: [],
  favoriteOffers: [],
  currentOffers: [],
  currentSortingType: SORT_TYPE.POPULAR,
  isSortingOpened: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isLoading: false,
  user: null,
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
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});

export { reducer };

