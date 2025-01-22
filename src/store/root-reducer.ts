import { combineReducers } from '@reduxjs/toolkit';
import { offersReducer } from './offers-slice/offers-slice.ts';
import { authReducer } from './authorization-slice/auth-slice.ts';
import { offerReducer } from './offer-slice/offer-slice.ts';
import { favoriteOffersReducer } from './favourites-slice/favourites-slice.ts';
import { offersNearbyReducer } from './nearby-offers-slice/nearby-offers-slice.ts';

const rootReducer = combineReducers({
  offers: offersReducer.reducer,
  auth: authReducer.reducer,
  offer: offerReducer.reducer,
  offersNearby: offersNearbyReducer.reducer,
  favorite: favoriteOffersReducer.reducer,
});

export default rootReducer;
