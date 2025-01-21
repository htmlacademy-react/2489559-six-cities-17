import { Offers } from '../types/types-offers';
import { City } from '../types/city/city-type';
import { CityLocation } from '../types/city/city-location-type';
import dayjs from 'dayjs';
import { SortType } from '../constants/constants';

const getStarsRating = (rating: number) => `${20 * rating}%`;

const capitalizeFirstLetter = (inputString: string): string => inputString.charAt(0).toUpperCase() + inputString.slice(1);

const getFavoriteOffers = (offers: Offers[]) => {
  const favoriteOffers = offers.filter((element) => element.isFavorite);

  if (favoriteOffers.length === 0) {
    return;
  }
  const favoritesOffersByLocation = new Map<string, Offers[]>();

  favoriteOffers.forEach((element) => {

    const offersLocation = element.city.name;

    favoritesOffersByLocation.set(offersLocation, []);

    const locationOffers = favoriteOffers.filter((locationOffer) => locationOffer.city.name === offersLocation);

    locationOffers.forEach((offer) => {
      favoritesOffersByLocation.get(offersLocation)?.push(offer);
    });
  }
  );
  return Array.from(favoritesOffersByLocation).map(([name, places]) => ({name, places}));
};

const getOffersCities = (offers: Offers[]) => {
  const cities = new Map<string, CityLocation>();
  offers.forEach((offer) => {
    cities.set(offer.city.name, offer.city.location);
  });
  return Array.from(cities).map(([name, location]): City => ({ name, location }));
};

const convertDateToProperty = (dateString: string) => dayjs(dateString).format('YYYY-MM-DD');

const convertDateToHumanized = (dateString: string) => dayjs(dateString).format('MMMM D');

const getCurrentLocationOffers = (offers: Offers[], location: string) => offers.filter((offer) => offer.city.name === location);

const checkReviewInRange = (min: number, max: number, value: string) => (value.length >= min) && (value.length <= max);

const getPriceFromLowToHigh = (priceA : Offers, priceB : Offers) => {
  if (priceA.price > priceB.price) {
    return 1;
  } else if (priceA.price < priceB.price) {
    return -1;
  }
  return 0;
};

const getPriceFromHighToLow = (priceA : Offers, priceB : Offers) => {
  if (priceA.price > priceB.price) {
    return -1;
  } else if (priceA.price < priceB.price) {
    return 1;
  }
  return 0;
};

const getRatingFromHighToLow = (ratingA : Offers, ratingB : Offers) => {
  if (ratingA.rating > ratingB.rating) {
    return -1;
  } else if (ratingA.rating < ratingB.rating) {
    return 1;
  }
  return 0;
};

const sortByPriceFromLowToHigh = (offers: Offers[]) => [...offers].sort(getPriceFromLowToHigh);

const sortByPriceFromHighToLow = (offers: Offers[]) => [...offers].sort(getPriceFromHighToLow);

const sortByRatingFromHighToLow = (offers: Offers[]) => [...offers].sort(getRatingFromHighToLow);

const sortOffers = (offers: Offers[], sortingType: SortType): Offers[] => {
  switch (sortingType) {
    case SortType.POPULAR:
      return offers;
    case SortType.PRICE_LOW_HIGH:
      return [...offers].sort(getPriceFromLowToHigh);
    case SortType.PRICE_HIGH_TO_LOW:
      return [...offers].sort(getPriceFromHighToLow);
    case SortType.TOP_RATED:
      return [...offers].sort(getRatingFromHighToLow);
    default:
      return offers;
  }
};


export { getStarsRating, getFavoriteOffers, capitalizeFirstLetter, getOffersCities, convertDateToHumanized, convertDateToProperty, getCurrentLocationOffers, sortByPriceFromLowToHigh, sortByPriceFromHighToLow, sortByRatingFromHighToLow, sortOffers, checkReviewInRange};
