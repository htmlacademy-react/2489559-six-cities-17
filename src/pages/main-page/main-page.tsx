import LocationsList from '../../components/locations/locations-list';
import Header from '../../components/header/header';
import Sorting from '../../components/sorting/sorting';
import OffersList from '../../components/cards/offers-list';
import { Offers, City } from '../../types/types-offers';
import Map from '../../components/map/map';

import { useState } from 'react';
import { LOCATIONS } from '../../constants/constants';
import { useAppSelector } from '../../components/hooks';

type MainPageProps = {
  emailAddress: string;
  favoriteCount: number;
}

function MainPage(props : MainPageProps): JSX.Element {
  const { emailAddress, favoriteCount} = props;

  const currentOffers = useAppSelector((state) => state.currentOffers);
  const currentCityTitle = useAppSelector((state) => state.city);
  const currentCity: City = currentOffers[0].city;

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
        <LocationsList locations={LOCATIONS} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay {currentCityTitle}</b>
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
              <OffersList offers = {currentOffers} onOfferMouseEnter={handleOfferMouseEnter} onOfferMouseLeave={handleOfferMouseLeave} />
            </section>
            <div className="cities__right-section">
              <Map city={currentCity} offers={currentOffers} selectedOffer={selectedOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
