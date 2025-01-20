import { Offer } from '../../types/types-offer';
import classNames from 'classnames';
import { getStarsRating } from '../../utils/utils';
import { capitalizeFirstLetter } from '../../utils/utils';

type OfferInfoProps = {
  offer: Offer;
  goods?: string[];
}

function OfferInfo(props: OfferInfoProps): JSX.Element {
  const { offer, goods } = props;
  const { isPremium, price, isFavorite, rating, title, type, maxAdults, bedrooms } = offer;
  const starsRating = getStarsRating(rating);

  return (
    <>
      {isPremium &&
        <div className="offer__mark">
          <span>Premium</span>
        </div>}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <button className={classNames('offer__bookmark-button', { 'offer__bookmark-button--active': isFavorite }, 'button', 'type="button"')}>
          <svg className="offer__bookmark-icon" width={31} height={33}>
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: starsRating }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {capitalizeFirstLetter(type)}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {goods && goods.map((element) => (
            <li className="offer__inside-item" key={element}>
              {element}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default OfferInfo;
