import classNames from 'classnames';
import { MouseEvent, memo } from 'react';

type LocationItemProps = {
  title: string;
  selectedCity: string;
  onCityChange : (evt: MouseEvent<HTMLAnchorElement>) => void;
};

function LocationsItem (props : LocationItemProps) : JSX.Element {
  const {title, selectedCity, onCityChange} = props;
  return (
    <li className="locations__item">
      <a className={
        classNames(
          'locations__item-link',
          'tabs__item',
          { 'tabs__item--active': title === selectedCity })
      }
      href="#"
      onClick={onCityChange}
      >
        <span>{title}</span>
      </a>
    </li >
  );
}

export default memo(LocationsItem);
