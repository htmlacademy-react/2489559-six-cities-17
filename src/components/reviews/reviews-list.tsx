import ReviewsItem from './reviews-item';
import { Reviews } from '../../types/types-reviews';

type ReviewsListProps = {
  reviews: Reviews[];
};

function ReviewsList (props: ReviewsListProps) : JSX.Element {
  const { reviews } = props;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((element) => (
          <ReviewsItem
            key={element.id}
            reviews={element}
          />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
