import CardItems from './offers-item';
import { Offers } from '../../types/types-offers';
import { MouseEvent } from 'react';
import { SORT_TYPE } from '../../constants/constants';
import { useAppSelector } from '../hooks';
import { sortByPriceFromLowToHigh, sortByPriceFromHighToLow, sortByRatingFromHighToLow } from '../../utils/utils';

type OffersListProps = {
  offers: Offers[];
  onOfferMouseEnter: (offer: Offers) => void;
  onOfferMouseLeave: () => void;
}

function OffersList(props: OffersListProps): JSX.Element {
  const { offers, onOfferMouseEnter, onOfferMouseLeave } = props;

  const currentSorting = useAppSelector((state) => state.currentSortingType);

  let sortedOffers: Offers[] = [];

  switch (currentSorting) {
    case SORT_TYPE.PRICE_LOW_HIGH:
      sortedOffers = sortByPriceFromLowToHigh(offers);
      break;
    case SORT_TYPE.PRICE_HIGH_TO_LOW:
      sortedOffers = sortByPriceFromHighToLow(offers);
      break;
    case SORT_TYPE.TOP_RATED:
      sortedOffers = sortByRatingFromHighToLow(offers);
      break;
    default:
      sortedOffers = offers;
      break;
  }

  const handleOfferItemMouseEnter = (evt: MouseEvent<HTMLLIElement>) => {
    const currentOffer = offers.find((element) => element.id === evt.currentTarget.dataset.id);
    if (!currentOffer) {
      return;
    }
    onOfferMouseEnter(currentOffer);
  };

  const handleOfferItemMouseLeave = () => {
    onOfferMouseLeave();
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((element) => (
        <CardItems
          key={element.id}
          offers={element}
          onPlaceMouseEnter={handleOfferItemMouseEnter}
          onPlaceMouseLeave={handleOfferItemMouseLeave}
        />
      ))}
    </div>
  );
}

export default OffersList;
