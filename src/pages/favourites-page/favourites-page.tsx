import Header from '../../components/header/header';
import FavoritesList from '../../components/favourites/favourites-list';
import { useAppSelector } from '../../components/hooks';
import { getFavoriteOffers } from '../../store/favourites-slice/favourites-selector';
function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getFavoriteOffers);
  return (
    <div className="page">
      <Header/>
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
