import CardItems from './offers-item';
import { Offers } from '../../types/types-offers';
import { MouseEvent } from 'react';

type OffersListProps = {
  offers: Offers[];
  onOfferMouseEnter: (offer: Offers) => void;
  onOfferMouseLeave: () => void;
}

function OffersList(props: OffersListProps): JSX.Element {
  const { offers, onOfferMouseEnter, onOfferMouseLeave } = props;

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
      {offers.map((element) => (
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
