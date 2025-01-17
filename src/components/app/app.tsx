import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page.tsx/login-page';
import FavoritesPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offers-page/offers-page';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import Loading from '../loading/loading';
import { useAppSelector } from '../hooks';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isLoading = useAppSelector((state) => state.isLoading);
  if (authorizationStatus === AuthorizationStatus.Unknown || isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route path={AppRoute.Login}
            element={
              <PrivateRoute navigateTo={AppRoute.Main} authorizationStatus={AuthorizationStatus.NoAuth}>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute navigateTo={AppRoute.Login} authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer}
            element={<OfferPage/>}
          />
          <Route path={AppRoute.Error}
            element={<PageNotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
