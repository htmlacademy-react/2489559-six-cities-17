import Header from '../../components/header/header';
import FavoritesList from '../../components/favourites/favourites-list';
import { Offers } from '../../types/types-offers';

type FavoritesPageProps = {
  emailAddress: string;
  favoriteCount: number;
  offers: Offers[];
}
function FavoritesPage(props : FavoritesPageProps): JSX.Element {
  const {emailAddress,favoriteCount,offers} = props;
  return (
    <div className="page">
      <Header
        emailAddress={emailAddress}
        favoriteCount={favoriteCount}
      />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;