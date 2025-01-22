import classNames from 'classnames';
import { useAppSelector, useAppDispatch } from '../hooks';
import { changeSortingState, changeSortingType } from '../../store/offers-slice/offers-slice';
import SortingItem from './sorting-item';
import { SortType } from '../../constants/constants';
import { getCurrentSortingState, getCurrentSortingType } from '../../store/offers-slice/offers-selectors';


function SortingList(): JSX.Element {
  const currentSortingState = useAppSelector(getCurrentSortingState);
  const currentSorting = useAppSelector(getCurrentSortingType);
  const dispatch = useAppDispatch();
  const sortingTypes = Object.values(SortType).map((element) => element);

  const handleSortingOpenClick = () => {
    dispatch(changeSortingState(true));
  };
  const handleSortingTypeClick = (inputSorting: SortType) => {
    dispatch(changeSortingType(inputSorting));
    dispatch(changeSortingState(false));
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={handleSortingOpenClick}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', { 'places__options--opened': currentSortingState })} >
        {sortingTypes.map((element) =>
          (<SortingItem key={element} sortingType={element} onSortingTypeChange={handleSortingTypeClick} />))}
      </ul>
    </form >
  );
}
export default SortingList;
