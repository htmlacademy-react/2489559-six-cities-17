type CommentRatingButtonProps = {
  value: number;
  title: string;
  onCommentRatingButtonChange: (value: number) => void;
  checked: boolean;
};

function CommentRatingButton(props: CommentRatingButtonProps): JSX.Element {
  const { value, checked, title, onCommentRatingButtonChange } = props;
  return (
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={checked}
        onChange={(evt) => onCommentRatingButtonChange(Number(evt.target.value))}
      />
      <label htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default CommentRatingButton;
