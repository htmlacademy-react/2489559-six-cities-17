
import LocationsList from '../../components/locations/locations';
import Header from '../../components/header/header';
import Sorting from '../../components/sorting/sorting';
import OffersList from '../../components/cards/cards-list';
import { Offers } from '../../types/types-offers';
import Map from '../../components/map/map';
import { getOffersCities } from '../../utils/utils';
import { useState } from 'react';

type MainPageProps = {
  offers: Offers[];
  emailAddress: string;
  favoriteCount: number;
}

function MainPage(props : MainPageProps): JSX.Element {
  const {offers, emailAddress, favoriteCount} = props;
  const offersCities = getOffersCities(offers);

  const [selectedOffer, setSelectedOffer] = useState<Offers | null>(null);

  const handleOfferMouseEnter = (offer: Offers) => {
    setSelectedOffer(offer);
  };
  const handleOfferMouseLeave = () => {
    setSelectedOffer(null);
  };
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
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
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
              <OffersList offers = {offers} onOfferMouseEnter={handleOfferMouseEnter} onOfferMouseLeave={handleOfferMouseLeave} />
            </section>
            <div className="cities__right-section">
              <Map city={offersCities[0]} offers={offers} selectedOffer={selectedOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
