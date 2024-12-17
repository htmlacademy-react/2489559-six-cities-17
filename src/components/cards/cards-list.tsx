//import { useState } from 'react';
import CardItems from './cards-item';
import { Offers } from '../../types/types-offers';

type CardsListProps = {
  offers: Offers[];
}

function OffersList(props: CardsListProps): JSX.Element {
  const { offers } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) => (
        <CardItems
          key={element.id}
          offers={element}
        />
      ))}
    </div>
  );
}

export default OffersList;
