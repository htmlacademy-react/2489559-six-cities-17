import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesToStay={312}
      emailAddress='Oliver.conner@gmail.com'
      favoriteCount={3}
    />
  </React.StrictMode>,
);
