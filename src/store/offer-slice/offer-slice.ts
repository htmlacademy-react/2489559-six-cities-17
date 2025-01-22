import { createSlice } from '@reduxjs/toolkit';
import { BLANK_OFFER_EXTENDED, DataStatus, NameSpace, SubmitState } from '../../constants/constants';
import { toast } from 'react-toastify';
import { Offer } from '../../types/types-offer';
import { addOfferToFavoriteAction, fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearbyAction, removeOfferFromFavoriteAction, submitCommentAction } from '../api-action';
import { OfferComment } from '../../types/types-offer-comment';
import { Offers } from '../../types/types-offers';

const initialState: {
  currentOffer: Offer;
  currentOfferState: DataStatus;
  currentOfferComments: OfferComment[];
  currentOfferCommentsState: DataStatus;
  currentOffersNearby: Offers[];
  currentOffersNearbyState: DataStatus;
  submittingState: SubmitState;
} =
{
  currentOffer: BLANK_OFFER_EXTENDED,
  currentOfferState: DataStatus.Unknown,
  currentOfferComments: [],
  currentOfferCommentsState: DataStatus.Unknown,
  currentOffersNearby: [],
  currentOffersNearbyState: DataStatus.Unknown,
  submittingState: SubmitState.Unknown,
};

export const offerReducer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.currentOfferState = DataStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOfferState = DataStatus.Loaded;
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.currentOfferState = DataStatus.Error;
        toast.error('Loading offer error');
      })
      .addCase(fetchOfferCommentsAction.pending, (state) => {
        state.currentOfferCommentsState = DataStatus.Loading;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.currentOfferCommentsState = DataStatus.Loaded;
        state.currentOfferComments = action.payload;
      })
      .addCase(fetchOfferCommentsAction.rejected, (state) => {
        state.currentOfferCommentsState = DataStatus.Error;
        toast.error('Loading offer comments error!');
      })
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
      .addCase(submitCommentAction.pending, (state) => {
        state.submittingState = SubmitState.Loading;
      })
      .addCase(submitCommentAction.fulfilled, (state) => {
        state.submittingState = SubmitState.Loaded;
      })
      .addCase(submitCommentAction.rejected, (state) => {
        state.submittingState = SubmitState.Error;
        toast.error('Submit error!');
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state) => {
        state.currentOffer.isFavorite = true;
      })
      .addCase(removeOfferFromFavoriteAction.fulfilled, (state) => {
        state.currentOffer.isFavorite = false;
      });
  }
});
