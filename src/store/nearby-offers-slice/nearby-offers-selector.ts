import { DataStatus, NameSpace } from '../../constants/constants';
import { Offers } from '../../types/types-offers';
import { AppState } from '../../types/state';

export const getOffersNearby = (state: AppState): Offers[] => state[NameSpace.OffersNearby].currentOffersNearby;
export const getOffersNearbyState = (state: AppState): DataStatus => state[NameSpace.OffersNearby].currentOffersNearbyState;
