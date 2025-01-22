import { DataStatus, NameSpace, SubmitState } from '../../constants/constants';
import { OfferComment } from '../../types/types-offer-comment';
import { Offer } from '../../types/types-offer';
import { Offers } from '../../types/types-offers';
import { AppState } from '../../types/state';

export const getOffer = (state: AppState): Offer => state[NameSpace.Offer].currentOffer;
export const getOfferState = (state: AppState): DataStatus => state[NameSpace.Offer].currentOfferState;

export const getOfferComments = (state: AppState): OfferComment[] => state[NameSpace.Offer].currentOfferComments;
export const getOfferCommentsState = (state: AppState): DataStatus => state[NameSpace.Offer].currentOfferCommentsState;

export const getOffersNearby = (state: AppState): Offers[] => state[NameSpace.Offer].currentOffersNearby;
export const getOffersNearbyState = (state: AppState): DataStatus => state[NameSpace.Offer].currentOffersNearbyState;

export const getSubmittingState = (state: AppState): SubmitState => state[NameSpace.Offer].submittingState;
