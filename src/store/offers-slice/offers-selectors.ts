import { DataStatus, NameSpace } from '../../constants/constants';
import { Offers } from '../../types/types-offers';
import { AppState } from '../../types/state';

export const getOffers = (state: AppState): Offers[] => state[NameSpace.Offers].offers;
export const getOffersState = (state: AppState): DataStatus => state[NameSpace.Offers].offersState;
export const getCurrentOffers = (state: AppState): Offers[] => state[NameSpace.Offers].currentOffers;

export const getCurrentSortingState = (state: AppState): boolean => state[NameSpace.Offers].isSortingOpened;
export const getCurrentSortingType = (state: AppState): string => state[NameSpace.Offers].currentSortingType;

export const getOffersCityTitle = (state: AppState): string => state[NameSpace.Offers].city;
