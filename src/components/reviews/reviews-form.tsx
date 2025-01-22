import { ChangeEvent, useState, memo, useCallback } from 'react';
import { RATING_OPTIONS, ReviewOption, SubmitState } from '../../constants/constants';
import CommentRatingButton from './review-rating-button';
import { checkReviewInRange } from '../../utils/utils';
import { submitCommentAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector} from '../../components/hooks';
import { getSubmittingState } from '../../store/offer-slice/offer-selector';

type ReviewsFormProps = {
  id: string;
}

function ReviewsForm(props: ReviewsFormProps): JSX.Element {
  const { id } = props;
  const dispatch = useAppDispatch();
  const submitState = useAppSelector(getSubmittingState);

  const [formRating, setFormRating] = useState(0);
  const [formComment, setFormComment] = useState('');

  const comment = formComment;
  const rating = formRating;

  const handleRatingChange = useCallback((value: number): void => setFormRating(value), [setFormRating]);

  const handleCommentChange = (text: string): void => setFormComment(text);

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(submitCommentAction({ comment, rating, id }));
    setFormRating(0);
    setFormComment('');
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {RATING_OPTIONS.map(({ value, title }) => (
          <CommentRatingButton
            key={value}
            value={value}
            title={title}
            onCommentRatingButtonChange={handleRatingChange}
            checked={formRating === value}
          />))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={formComment}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => handleCommentChange(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(formRating && checkReviewInRange(ReviewOption.minLength, ReviewOption.maxLength, formComment)) || submitState === SubmitState.Loading}
        >
          {submitState === SubmitState.Loading ? 'Loading...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default memo(ReviewsForm);
