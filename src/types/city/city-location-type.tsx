import { City } from './city-type';

export type CityLocation = Pick<City['location'], 'latitude' | 'longitude' | 'zoom'>;
