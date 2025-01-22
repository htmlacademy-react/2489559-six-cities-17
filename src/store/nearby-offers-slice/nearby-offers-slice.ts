import { createSlice } from '@reduxjs/toolkit';
import { DataStatus, NameSpace } from '../../constants/constants';
import { toast } from 'react-toastify';
import { addOfferToFavoriteAction, fetchOffersNearbyAction, removeOfferFromFavoriteAction } from '../api-action';
import { Offers } from '../../types/types-offers';
import { updateOfferFavoriteStatus } from '../../utils/utils';

const initialState: {
  currentOffersNearby: Offers[];
  currentOffersNearbyState: DataStatus;
} =
{
  currentOffersNearby: [],
  currentOffersNearbyState: DataStatus.Unknown,
};

export const offersNearbyReducer = createSlice({
  name: NameSpace.OffersNearby,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.currentOffersNearbyState = DataStatus.Loading;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.currentOffersNearbyState = DataStatus.Loaded;
        state.currentOffersNearby = action.payload;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.currentOffersNearbyState = DataStatus.Error;
        toast.error('Loading nearby offers error!');
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state, action) => {
        state.currentOffersNearby = updateOfferFavoriteStatus(state.currentOffersNearby, action.payload, true);
      })
      .addCase(removeOfferFromFavoriteAction.fulfilled, (state, action) => {
        state.currentOffersNearby = updateOfferFavoriteStatus(state.currentOffersNearby, action.payload, false);
      });
  }
});
