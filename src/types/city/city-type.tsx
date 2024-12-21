import { Offers } from '../types-offers';

export type City = Pick<Offers['city'], 'name' | 'location'>
