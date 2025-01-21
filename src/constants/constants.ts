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

export enum APIRoute {
  Offers = '/offers',
  Offer = '/offers/:id',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum OfferPageType {
  CITIES = 'cities',
  FAVORITES = 'favorites',
  NEAR_PLACES = 'near-places',
}

export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum SortType {
  POPULAR = 'Popular',
  PRICE_LOW_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED = 'Top rated first',
}

export enum DataStatus {
  Unknown = 'unknown',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export enum SubmitStatus {
  Unknown = 'unknown',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export enum ReviewOption {
  minLength = 50,
  maxLength = 300,
}

export enum MAX_PLACES_NEARBY {
  MAX_PLACES = 3,
}

export const RATING_OPTIONS = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  }
];

export const BLANK_OFFER_EXTENDED = {
  id: '',
  title: '',
  description: '',
  type: '',
  price: 0,
  images: [
    '',
  ],
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    }
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  goods: [
    '',
  ],
  host: {
    isPro: false,
    name: '',
    avatarUrl: '',
  },
  isPremium: false,
  isFavorite: false,
  rating: 0,
  bedrooms: 0,
  maxAdults: 0,
};

export const MAP_MARKER_DEFAULT = '../img/pin.svg';

export const MAP_MARKER_CURRENT = '../img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;
