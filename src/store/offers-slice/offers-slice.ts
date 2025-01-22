import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataStatus, LOCATIONS, NameSpace, SortType } from '../../constants/constants';
import { addOfferToFavoriteAction, fetchOffersAction, removeOfferFromFavoriteAction } from '../api-action';
import { toast } from 'react-toastify';
import { Offers } from '../../types/types-offers';
import { getCurrentLocationOffers, sortOffers, updateOfferFavoriteStatus } from '../../utils/utils';

const initialState: {
  city: string;
  isSortingOpened: boolean;
  currentSortingType: SortType;
  offers: Offers[];
  offersState: DataStatus;
  currentOffers: Offers[];
} =
{
  city: LOCATIONS[0],
  isSortingOpened: false,
  currentSortingType: SortType.POPULAR,
  offers: [],
  offersState: DataStatus.Unknown,
  currentOffers: [],
};

export const offersReducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      state.isSortingOpened = false;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    },
    changeSortingState: (state, action: PayloadAction<boolean>) => {
      state.isSortingOpened = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<SortType>) => {
      state.currentSortingType = action.payload;
      state.currentOffers = sortOffers(getCurrentLocationOffers(state.offers, state.city), action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersState = DataStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersState = DataStatus.Loaded;
        state.offers = action.payload;
        state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersState = DataStatus.Error;
        toast.error('Loading offers error');
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state, action) => {
        state.currentOffers = updateOfferFavoriteStatus(state.currentOffers, action.payload, true);
      })
      .addCase(removeOfferFromFavoriteAction.fulfilled, (state, action) => {
        state.currentOffers = updateOfferFavoriteStatus(state.currentOffers, action.payload, false);
      });
  }
});

export const { changeCity, changeSortingState, changeSortingType } = offersReducer.actions;
