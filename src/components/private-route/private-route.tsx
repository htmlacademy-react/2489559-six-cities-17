import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import { useAppSelector } from '../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
  navigateTo: AppRoute;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const { children, navigateTo, authorizationStatus } = props;

  return (
    authStatus === authorizationStatus
      ? children
      : <Navigate to={navigateTo} />
  );
}

export default PrivateRoute;
