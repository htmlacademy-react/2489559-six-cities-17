import { Offers } from '../../types/types-offers';
import { getFavoriteOffers } from '../../utils/utils';
import FavoritesEmpty from './favourites-empty';
import FavirotesItemGroup from './favourites-group-item';

type FavirotesListGroupProps = {
  offers: Offers[];
};

function FavirotesListGroup(props: FavirotesListGroupProps): JSX.Element {
  const { offers } = props;
  const favoriteOffers = getFavoriteOffers(offers);
  if (!favoriteOffers) {
    return (
      <FavoritesEmpty />
    );
  }
  return (
    <>{
      favoriteOffers.map((element) =>
        <FavirotesItemGroup location={element.name} key={element.name} offers={element.places} />
      )
    }
    </>
  );
}

export default FavirotesListGroup;
