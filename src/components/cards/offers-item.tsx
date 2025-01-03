import { Offers } from '../../types/types-offers';
import classNames from 'classnames';
import { getStarsRating, capitalizeFirstLetter } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import { generatePath } from 'react-router-dom';
import { MouseEvent } from 'react';

type OffersItemProps = {
  offers: Offers;
  onPlaceMouseEnter: (evt: MouseEvent<HTMLLIElement>) => void;
  onPlaceMouseLeave: () => void;
}

function OffersItem(props : OffersItemProps): JSX.Element {
  const {offers, onPlaceMouseEnter, onPlaceMouseLeave } = props;
  const { isPremium, previewImage, price, isFavorite, rating, title, type, id } = offers;
  const starsRating = getStarsRating(rating);
  return (
    <article className="cities__card place-card"
      data-id={offers.id}
      onMouseEnter={onPlaceMouseEnter}
      onMouseLeave={onPlaceMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { id })}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames('place-card__bookmark-button', { 'place-card__bookmark-button--active': isFavorite }, 'button', 'type="button"')}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starsRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default OffersItem;
