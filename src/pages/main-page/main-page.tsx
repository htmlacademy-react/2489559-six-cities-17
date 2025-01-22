import LocationsList from '../../components/locations/locations-list';
import Header from '../../components/header/header';
import SortingList from '../../components/sorting/sorting-list';
import OffersList from '../../components/offer/offers-list';
import { Offers } from '../../types/types-offers';
import Map from '../../components/map/map';
import { LOCATIONS, OfferPageType } from '../../constants/constants';
import { useAppSelector } from '../../components/hooks';
import { MouseEvent, memo, useState, useCallback } from 'react';
import { getCurrentOffers, getOffersCityTitle } from '../../store/offers-slice/offers-selectors';
import { BLANK_CITY } from '../../constants/constants';
import { City } from '../../types/city/city-type';
import MainEmpty from '../../components/main-empty/main-emty';

function MainPage(): JSX.Element {

  const currentOffers = useAppSelector(getCurrentOffers);
  const currentCityTitle = useAppSelector(getOffersCityTitle);
  const isCurrentOffersEmpty = currentOffers.length === 0;

  const currentCity: City = isCurrentOffersEmpty ? BLANK_CITY : currentOffers[0].city;

  const [selectedOffer, setSelectedOffer] = useState<Offers | null>(null);

  const handleOfferMouseEnter = useCallback((evt: MouseEvent<HTMLElement>) => {
    const currentOffer = currentOffers.find((element) => element.id === evt.currentTarget.dataset.id);
    if (!currentOffer) {
      return;
    }
    setSelectedOffer(currentOffer);
  }, [currentOffers]);
  const handleOfferMouseLeave = () => {
    setSelectedOffer(null);
  };
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList locations={LOCATIONS} />
        {isCurrentOffersEmpty ? <MainEmpty /> : (
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
        )}
      </main>
    </div>
  );
}

export default memo(MainPage);
