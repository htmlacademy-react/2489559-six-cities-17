import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page.tsx/login-page';
import FavoritesPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offers-page/offers-page';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../constants/constants';

type AppPageProps = {
  placesToStay: number;
  emailAddress: string;
  favoriteCount: number;
}

function App({ placesToStay, emailAddress, favoriteCount }: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage placesToStay={placesToStay} emailAddress={emailAddress} favoriteCount={favoriteCount}/>}
        />
        <Route path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route path={AppRoute.Favorites}
          element={<FavoritesPage emailAddress={emailAddress} favoriteCount={favoriteCount}/>}
        />
        <Route path={AppRoute.Offer}
          element={<OfferPage emailAddress={emailAddress} favoriteCount={favoriteCount}/>}
        />
        <Route path="*"
          element={<PageNotFound emailAddress={emailAddress} favoriteCount={favoriteCount}/>}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
