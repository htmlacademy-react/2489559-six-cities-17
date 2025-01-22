import { DataStatus, NameSpace } from '../../constants/constants';
import { Offers } from '../../types/types-offers';
import { AppState } from '../../types/state';

export const getFavoriteOffers = (state: AppState): Offers[] => state[NameSpace.Favorite].favoriteOffers;
export const getFavoriteOffersState = (state: AppState): DataStatus => state[NameSpace.Favorite].favoriteOffersState;
export const getFavoriteOfferStatusState = (state: AppState): DataStatus => state[NameSpace.Favorite].favoriteOfferStatusState;
