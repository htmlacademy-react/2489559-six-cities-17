export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Error = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum offerPageType {
  CITIES = 'cities',
  NEAR_PLACES = 'near-places',
}

export const MAP_MARKER_DEFAULT = '../img/pin.svg';

export const MAP_MARKER_CURRENT = '../img/pin-active.svg';
