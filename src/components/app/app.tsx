import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page.tsx/login-page';
import FavoritesPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offers-page/offers-page';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationState, DataStatus } from '../../constants/constants';
import Loading from '../loading/loading';
import { useAppSelector } from '../hooks';
import { HelmetProvider } from 'react-helmet-async';
import { getAuthorizationState } from '../../store/authorization-slice/auth-selecror';
import { getOffersState } from '../../store/offers-slice/offers-selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationState);
  const offersLoadingState = useAppSelector(getOffersState);
  if (authorizationStatus === AuthorizationState.Unknown || offersLoadingState === DataStatus.Loading) {
    return <Loading />;
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
              <PrivateRoute navigateTo={AppRoute.Main} authorizationState={AuthorizationState.NoAuth}>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute navigateTo={AppRoute.Login} authorizationState={AuthorizationState.Auth}>
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
