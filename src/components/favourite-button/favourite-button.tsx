import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addOfferToFavoriteAction, removeOfferFromFavoriteAction } from '../../store/api-action';
import { FavouriteButtonType, AppRoute, DataStatus, AuthorizationState } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { getFavoriteOfferStatusState } from '../../store/favourites-slice/favourites-selector';
import { getAuthorizationState } from '../../store/authorization-slice/auth-selecror';

type FavoriteButtonProps = {
  isFavorite: boolean;
  favouriteButtonType: FavouriteButtonType;
  id: string;
}
function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { isFavorite, favouriteButtonType, id } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationState);
  const favoriteToggleState = useAppSelector(getFavoriteOfferStatusState);

  const buttonClass = classNames(
    `${favouriteButtonType}__bookmark-button`,
    { 'place-card__bookmark-button--active': isFavorite && favouriteButtonType === FavouriteButtonType.PLACE_CARD },
    { 'offer__bookmark-button--active': isFavorite && favouriteButtonType === FavouriteButtonType.OFFER },
    'button'
  );

  const handleFavoriteButtonClick = () => {
    if (authStatus === AuthorizationState.Auth) {
      dispatch(isFavorite ? removeOfferFromFavoriteAction(id) : addOfferToFavoriteAction(id));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={buttonClass}
      onClick={handleFavoriteButtonClick}
      disabled = {favoriteToggleState === DataStatus.Loading}
    >
      <svg className={`${favouriteButtonType}__bookmark-icon`}
        width={favouriteButtonType === FavouriteButtonType.PLACE_CARD ? 18 : 31}
        height={favouriteButtonType === FavouriteButtonType.PLACE_CARD ? 19 : 33}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
