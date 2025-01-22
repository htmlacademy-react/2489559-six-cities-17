import Header from '../../components/header/header';
import Map from '../../components/map/map';
import ReviewsForm from '../../components/reviews/reviews-form';
import ReviewsList from '../../components/reviews/reviews-list';
import OffersList from '../../components/offer/offers-list';
import { useEffect, memo } from 'react';
import { AppRoute, DataStatus, MAX_PLACES_NEARBY, OfferPageType } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { Navigate, useParams } from 'react-router-dom';
import { fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearbyAction } from '../../store/api-action';
import OfferImages from '../../components/offer/offer-images';
import OfferInfo from '../../components/offer/offer-info';
import OfferHostInfo from '../../components/offer/offer-host-info';
import { AuthorizationState } from '../../constants/constants';
import { getOffer, getOfferState, getOfferComments, getOffersNearby} from '../../store/offer-slice/offer-selector';
import { getAuthorizationState } from '../../store/authorization-slice/auth-selecror';
import Loading from '../../components/loading/loading';

function OfferPage(): JSX.Element {
  const currentOffer = useAppSelector(getOffer);
  const currentOfferState = useAppSelector(getOfferState);
  const currentOfferComments = useAppSelector(getOfferComments);
  const currentOfferNearby = useAppSelector(getOffersNearby);
  const offersNearby = currentOfferNearby && currentOfferNearby.slice(0, MAX_PLACES_NEARBY.MAX_PLACES);
  const isAuth = useAppSelector(getAuthorizationState) === AuthorizationState.Auth;

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id && currentOffer.id !== id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchOfferCommentsAction(id));
      dispatch(fetchOffersNearbyAction(id));
    }
  }, [id, currentOffer.id, dispatch]);

  if (currentOfferState === DataStatus.Loading) {
    return <Loading />;
  }
  if (currentOfferState === DataStatus.Error || !id) {
    return <Navigate to={AppRoute.Error} />;

  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferImages images={currentOffer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">

              <OfferInfo offer={currentOffer} goods={currentOffer.goods} />

              <OfferHostInfo offer={currentOffer} />

              <section className="offer__reviews reviews">

                <ReviewsList reviews={currentOfferComments} />

                {isAuth && <ReviewsForm id={currentOffer.id} />}
              </section>
            </div>
          </div>
        </section>
        <Map city={currentOffer.city} offers={offersNearby} mapType={OfferPageType.NEAR_PLACES} offerOpened={currentOffer} />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={offersNearby} pageType={OfferPageType.NEAR_PLACES} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default memo(OfferPage);
