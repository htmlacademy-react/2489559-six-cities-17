import OffersItem from './offers-item';
import { Offers } from '../../types/types-offers';
import { MouseEvent } from 'react';
import { OfferPageType } from '../../constants/constants';
import classNames from 'classnames';

type OfferListProps = {
  offers: Offers[] | null;
  pageType: OfferPageType;
  onOfferMouseEnter?: (evt: MouseEvent<HTMLElement>) => void;
  onOfferMouseLeave?: () => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, pageType, onOfferMouseEnter, onOfferMouseLeave } = props;


  return (
    <div className={classNames(
      { 'cities__places-list': pageType === OfferPageType.CITIES },
      { 'near-places__list': pageType === OfferPageType.NEAR_PLACES },
      { 'favorites__list': pageType === OfferPageType.FAVORITES },
      'places__list',
      { 'tabs__content': pageType === OfferPageType.CITIES })}
    >
      {offers && offers.map((element) => (
        <OffersItem
          key={element.id}
          offer={element}
          pageType={pageType}
          onPlaceMouseEnter={onOfferMouseEnter}
          onPlaceMouseLeave={onOfferMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
