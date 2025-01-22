import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingState, changeSortingType } from './action';
import { getCurrentLocationOffers, sortOffers } from '../utils/utils';
import { Offers } from '../types/types-offers';
import { BLANK_OFFER_EXTENDED, DataStatus, LOCATIONS, SortType, SubmitStatus } from '../constants/constants';
import { AuthorizationStatus } from '../constants/constants';
import { UserData } from '../types/user-data';
import { Offer } from '../types/types-offer';
import { checkAuthAction, fetchOfferAction, fetchOfferCommentsAction, fetchOffersAction, fetchOffersNearbyAction, loginAction, logoutAction, submitCommentAction, fetchOffersFavouritesAction } from './api-action';
import { toast } from 'react-toastify';
import { OfferComment } from '../types/types-offer-comment';

const initialState: {
  city: string;
  currentOffers: Offers[];
  currentSortingType: string;
  isSortingOpened: boolean;

  offers: Offers[];
  offersState: DataStatus;

  currentOffer: Offer;
  currentOfferState: DataStatus;

  currentOfferComments: OfferComment[];
  currentOfferCommentsState: DataStatus;

  submitStatus: SubmitStatus;
  currentOffersNearby: Offers[];
  currentOffersNearbyState: DataStatus;

  favoriteOffers: Offers[];
  favoriteOffersState: DataStatus;

  authorizationStatus: AuthorizationStatus;

  user: UserData | null;
  userState: DataStatus;
} =
{
  city: LOCATIONS[0],
  currentOffers: [],
  currentSortingType: SortType.POPULAR,
  isSortingOpened: false,

  offers: [],
  offersState: DataStatus.Unknown,

  currentOffer: BLANK_OFFER_EXTENDED,
  currentOfferState: DataStatus.Unknown,

  currentOfferComments: [],
  currentOfferCommentsState: DataStatus.Unknown,

  submitStatus: SubmitStatus.Unknown,

  currentOffersNearby: [],
  currentOffersNearbyState: DataStatus.Unknown,

  authorizationStatus: AuthorizationStatus.Unknown,

  favoriteOffers: [],
  favoriteOffersState: DataStatus.Unknown,

  user: null,
  userState: DataStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
      state.isSortingOpened = false;
      state.currentOffers = getCurrentLocationOffers(state.offers, state.city);
    })
    .addCase(changeSortingState, (state, action) => {
      const { sortingState } = action.payload;
      state.isSortingOpened = sortingState;
    })
    .addCase(changeSortingType, (state, action) => {
      state.currentSortingType = action.payload;
      state.currentOffers = sortOffers(getCurrentLocationOffers(state.offers, state.city), action.payload);
    })
    // @-- Load Offers --@ \\
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
    // @-- Load Offer --@ \\
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
    // @-- Load Offer Comments --@ \\
    .addCase(fetchOfferCommentsAction.pending, (state) => {
      state.currentOfferCommentsState = DataStatus.Loading;
    })
    .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
      state.currentOfferCommentsState = DataStatus.Loaded;
      state.currentOfferComments = action.payload;
    })
    .addCase(fetchOfferCommentsAction.rejected, (state) => {
      state.currentOfferCommentsState = DataStatus.Error;
      toast.error('Loading offer comments error');
    })
    // @-- Load Offers Nearby --@ \\
    .addCase(fetchOffersNearbyAction.pending, (state) => {
      state.currentOffersNearbyState = DataStatus.Loading;
    })
    .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
      state.currentOffersNearbyState = DataStatus.Loaded;
      state.currentOffersNearby = action.payload;
    })
    .addCase(fetchOffersNearbyAction.rejected, (state) => {
      state.currentOffersNearbyState = DataStatus.Error;
      toast.error('Loading nearby offers error');
    })
    // @-- Favourites --@ \\
    .addCase(fetchOffersFavouritesAction.pending, (state) => {
      state.favoriteOffersState = DataStatus.Loading;
    })
    .addCase(fetchOffersFavouritesAction.fulfilled, (state, action) => {
      state.favoriteOffersState = DataStatus.Loaded;
      state.favoriteOffers = action.payload;
    })
    .addCase(fetchOffersFavouritesAction.rejected, (state) => {
      state.favoriteOffersState = DataStatus.Error;
      toast.error('Loading favorite offers error');
    })
    // @-- Auth --@ \\
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
      toast.error('Authification error');
    })
    // @-- Logout --@ \\
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    })
    .addCase(logoutAction.rejected, () => {
      toast.error('Logout error');
    })
    // @-- Check Auth --@ \\
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    })
    // @-- Submit Comment --@ \\
    .addCase(submitCommentAction.pending, (state) => {
      state.submitStatus = SubmitStatus.Loading;
    })
    .addCase(submitCommentAction.fulfilled, (state) => {
      state.submitStatus = SubmitStatus.Loaded;
    })
    .addCase(submitCommentAction.rejected, (state) => {
      state.submitStatus = SubmitStatus.Error;
      toast.error('Submit comment error');
    });
});

export { reducer };
