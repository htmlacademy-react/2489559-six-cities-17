import { Offers } from '../types/types-offers';

export const mockNearbyOffers: Offers[] = [
  {
    id: '2af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
  },
  {
    id: '3af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: '4af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
  },
];
