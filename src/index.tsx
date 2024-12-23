import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';
import { mockNearbyOffers } from './mocks/nearby-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      emailAddress='Oliver.conner@gmail.com'
      favoriteCount={3}
      offers = {mockOffers}
      nearbyOffers = {mockNearbyOffers}
      offerId='123'
    />
  </React.StrictMode>,
);
