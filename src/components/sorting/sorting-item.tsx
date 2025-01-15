import { MouseEvent } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../hooks';

type SortingItemProps = {
  onSortingTypeChange: (evt: MouseEvent<HTMLLIElement>) => void;
  sortingType: string;
}

function SortingItem(props: SortingItemProps): JSX.Element {
  const { onSortingTypeChange, sortingType } = props;
  const currentSorting = useAppSelector((state) => state.currentSortingType);

  return (
    <li className={classNames('places__option', { 'places__option--active': sortingType === currentSorting })} tabIndex={0}
      onClick={onSortingTypeChange}
    >
      {sortingType}
    </li>
  );
}

export default SortingItem;
