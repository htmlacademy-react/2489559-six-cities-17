import classNames from 'classnames';
import { useAppSelector } from '../hooks';
import { SortType } from '../../constants/constants';

type SortingItemProps = {
  onSortingTypeChange: (inputSorting: SortType) => void;
  sortingType: SortType;
}

function SortingItem(props: SortingItemProps): JSX.Element {
  const { onSortingTypeChange, sortingType } = props;
  const currentSorting = useAppSelector((state) => state.currentSortingType);

  return (
    <li className={classNames('places__option', { 'places__option--active': sortingType as string === currentSorting })} tabIndex={0}
      onClick={() => onSortingTypeChange(sortingType)}
    >
      {sortingType}
    </li>
  );
}

export default SortingItem;
