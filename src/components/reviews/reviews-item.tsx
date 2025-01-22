import { Reviews } from '../../types/types-reviews';
import { getStarsRating } from '../../utils/utils';
import { convertDateToHumanized,convertDateToProperty } from '../../utils/utils';
import { memo } from 'react';

type ReviewsItemProps = {
  reviews: Reviews;
}

function ReviewsItem (props : ReviewsItemProps) : JSX.Element {
  const {reviews} = props;
  const {date, rating, comment, user} = reviews;
  const starsRating = getStarsRating(rating);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: starsRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={convertDateToProperty(date)}>{convertDateToHumanized(date)}</time>
      </div>
    </li>
  );
}

export default memo(ReviewsItem);
