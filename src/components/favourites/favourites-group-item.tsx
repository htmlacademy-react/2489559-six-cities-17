import { Offers } from '../../types/types-offers';
import FavirotesItem from './favourites-item';

type FavirotesGroupItemProps = {
  offers: Offers[];
  location: string;
};

function FavirotesItemGroup(props: FavirotesGroupItemProps): JSX.Element {
  const { offers, location } = props;
  return (
    <li className="favorites__locations-items" >
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavirotesItem key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}

export default FavirotesItemGroup;
