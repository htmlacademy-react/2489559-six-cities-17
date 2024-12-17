import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page.tsx/login-page';
import FavoritesPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offers-page/offers-page';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import { Offers } from '../../types/types-offers';

type AppPageProps = {
  emailAddress: string;
  favoriteCount: number;
  offers: Offers[];
}

function App(props : AppPageProps): JSX.Element {
  const { emailAddress, favoriteCount, offers } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage offers = {offers} emailAddress={emailAddress} favoriteCount={favoriteCount}/>}
        />
        <Route path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage emailAddress={emailAddress} favoriteCount={favoriteCount}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer}
          element={<OfferPage emailAddress={emailAddress} favoriteCount={favoriteCount}/>}
        />
        <Route path={AppRoute.Error}
          element={<PageNotFound emailAddress={emailAddress} favoriteCount={favoriteCount}/>}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
