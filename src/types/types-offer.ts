export interface OfferBase {
id: string;
title: string;
type: string;
price: number;
isFavorite: boolean;
isPremium: boolean;
rating: number;
description: string;
bedrooms: number;
goods: string[];
images: string[] | null;
maxAdults: number;
}

export interface Host {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: string;
  location: Location;
}

export interface Offer extends OfferBase {
  city: City;
  location: Location;
  host: Host;
}
