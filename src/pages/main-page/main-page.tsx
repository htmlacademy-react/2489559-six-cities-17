import OfferPreview from '../../components/offers/offer-preview';
import LocationsList from '../../components/locations/locations';
import Header from '../../components/header/header';
import { mockOffers } from '../../mocks/offers';
import Sorting from '../../components/sorting/sorting';

type MainPageProps = {
  placesToStay: number;
  emailAddress: string;
  favoriteCount: number;
}

function MainPage({ placesToStay, emailAddress, favoriteCount }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header
        emailAddress={emailAddress}
        favoriteCount={favoriteCount}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesToStay} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <Sorting />
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferPreview
                  title={mockOffers[0].title}
                  type={mockOffers[0].type}
                  price={mockOffers[0].price}
                  isFavorite={mockOffers[0].isFavorite}
                  isPremium={mockOffers[0].isPremium}
                  rating={mockOffers[0].rating}
                  previewImage={mockOffers[0].previewImage}
                />

                <OfferPreview
                  title={mockOffers[1].title}
                  type={mockOffers[1].type}
                  price={mockOffers[1].price}
                  isFavorite={mockOffers[1].isFavorite}
                  isPremium={mockOffers[1].isPremium}
                  rating={mockOffers[1].rating}
                  previewImage={mockOffers[1].previewImage}
                />

                <OfferPreview
                  title={mockOffers[2].title}
                  type={mockOffers[2].type}
                  price={mockOffers[2].price}
                  isFavorite={mockOffers[2].isFavorite}
                  isPremium={mockOffers[2].isPremium}
                  rating={mockOffers[2].rating}
                  previewImage={mockOffers[2].previewImage}
                />

                <OfferPreview
                  title={mockOffers[3].title}
                  type={mockOffers[3].type}
                  price={mockOffers[3].price}
                  isFavorite={mockOffers[3].isFavorite}
                  isPremium={mockOffers[3].isPremium}
                  rating={mockOffers[3].rating}
                  previewImage={mockOffers[3].previewImage}
                />

                <OfferPreview
                  title={mockOffers[4].title}
                  type={mockOffers[4].type}
                  price={mockOffers[4].price}
                  isFavorite={mockOffers[4].isFavorite}
                  isPremium={mockOffers[4].isPremium}
                  rating={mockOffers[4].rating}
                  previewImage={mockOffers[4].previewImage}
                />

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
