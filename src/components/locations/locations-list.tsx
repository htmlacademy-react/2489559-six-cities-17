import LocationsItem from './location-item';
import { useAppSelector, useAppDispatch } from '../hooks';
import { MouseEvent, memo, useCallback } from 'react';
import { changeCity, changeSortingType } from '../../store/offers-slice/offers-slice';
import { SortType } from '../../constants/constants';
import { getOffersCityTitle } from '../../store/offers-slice/offers-selectors';

type LocationsListProps = {
  locations: string[];
}

function LocationsList(props: LocationsListProps): JSX.Element {
  const { locations } = props;
  const currentCity = useAppSelector(getOffersCityTitle);
  const dispatch = useAppDispatch();

  const handleCityChange = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    dispatch(changeCity(evt.currentTarget.text));
    dispatch(changeSortingType(SortType.POPULAR));
  }, [dispatch]);
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((element) =>
            (<LocationsItem key={element} title={element} selectedCity={currentCity} onCityChange={handleCityChange}/>))}
        </ul>
      </section>
    </div>
  );
}
export default memo(LocationsList);
