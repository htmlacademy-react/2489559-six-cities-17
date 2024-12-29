import { Offers } from '../types/types-offers';
import { City } from '../types/city/city-type';
import { CityLocation } from '../types/city/city-location-type';
import dayjs from 'dayjs';

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

export { getStarsRating, getFavoriteOffers, capitalizeFirstLetter, getOffersCities, convertDateToHumanized, convertDateToProperty, getCurrentLocationOffers};
