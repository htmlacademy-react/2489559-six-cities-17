import { Offers } from '../../types/types-offers';
import FavirotesListGroup from './favourites-group-list';

type FavirotesListProps = {
  offers: Offers[];
};

function FavoritesList(props: FavirotesListProps): JSX.Element {
  const { offers } = props;
  return (
    <ul className="favorites__list">
      <FavirotesListGroup offers={offers} />
    </ul>
  );
}

export default FavoritesList;
