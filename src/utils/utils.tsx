import { Offers } from '../types/types-offers';

const getStarsRating = (rating: number) => `${20 * rating}%`;

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


export { getStarsRating, getFavoriteOffers };
