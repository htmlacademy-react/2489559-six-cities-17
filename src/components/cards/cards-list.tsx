import { useState } from 'react';
import CardItems from './cards-item';
import { Offers } from '../../types/types-offers';

type CardsListProps = {
  offers: Offers[];
}

function OffersList(props: CardsListProps): JSX.Element {
  const { offers } = props;

  const [, setSelectedPlace] = useState<Offers | null>(null);

  const selectedPlaceMouseEnterHandler = (offer: Offers) => setSelectedPlace(offer);
  const selectedPlaceMouseLeaveHandler = () => setSelectedPlace(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) => (
        <CardItems
          key={element.id}
          offers={element}
          onPlaceMouseEnter={() => selectedPlaceMouseEnterHandler(element)}
          onPlaceMouseLeave={() => selectedPlaceMouseLeaveHandler}
        />
      ))}
    </div>
  );
}

export default OffersList;
