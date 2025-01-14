import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';
import { mockNearbyOffers } from './mocks/nearby-offers';
import { store } from './store';
import { Provider } from 'react-redux';
import ErrorMessage from './components/error-message/error-message';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        emailAddress='Oliver.conner@gmail.com'
        favoriteCount={3}
        offers = {mockOffers}
        nearbyOffers = {mockNearbyOffers}
        offerId='123'
      />
    </Provider>
  </React.StrictMode>,
);
