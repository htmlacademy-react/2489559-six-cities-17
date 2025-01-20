import LocationsList from '../../components/locations/locations-list';
import Header from '../../components/header/header';
import SortingList from '../../components/sorting/sorting-list';
import OffersList from '../../components/offer/offers-list';
import { Offers, City } from '../../types/types-offers';
import Map from '../../components/map/map';
import { useState } from 'react';
import { LOCATIONS, OfferPageType } from '../../constants/constants';
import { useAppSelector } from '../../components/hooks';
import { MouseEvent } from 'react';

function MainPage(): JSX.Element {


  const currentOffers = useAppSelector((state) => state.currentOffers);
  const currentCityTitle = useAppSelector((state) => state.city);
  const currentCity: City = currentOffers[0].city;

  const [selectedOffer, setSelectedOffer] = useState<Offers | null>(null);

  const handleOfferMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    const currentOffer = currentOffers.find((element) => element.id === evt.currentTarget.dataset.id);
    if (!currentOffer) {
      return;
    }
    setSelectedOffer(currentOffer);
  };
  const handleOfferMouseLeave = () => {
    setSelectedOffer(null);
  };
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList locations={LOCATIONS} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay {currentCityTitle}</b>
              <form className="places__sorting" action="#" method="get">
                <SortingList />
              </form>
              <OffersList offers={currentOffers} onOfferMouseEnter={handleOfferMouseEnter} onOfferMouseLeave={handleOfferMouseLeave} pageType={OfferPageType.CITIES} />
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
