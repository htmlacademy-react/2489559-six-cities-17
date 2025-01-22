import { createSlice } from '@reduxjs/toolkit';
import { DataStatus, NameSpace } from '../../constants/constants';
import { Offers } from '../../types/types-offers';
import { fetchOffersFavouritesAction } from '../api-action';

const initialState: {
  favoriteOffers: Offers[];
  favoriteOffersState: DataStatus;
  favoriteOfferStatusState: DataStatus;
} =
{
  favoriteOffers: [],
  favoriteOffersState: DataStatus.Unknown,
  favoriteOfferStatusState: DataStatus.Unknown,
};

export const favoriteOffersReducer = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersFavouritesAction.pending, (state) => {
        state.favoriteOffersState = DataStatus.Loading;
      })
      .addCase(fetchOffersFavouritesAction.fulfilled, (state, action) => {
        state.favoriteOffersState = DataStatus.Loaded;
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchOffersFavouritesAction.rejected, (state) => {
        state.favoriteOffersState = DataStatus.Error;
      });
  }
});
