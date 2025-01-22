import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationState } from '../../constants/constants';
import { useAppSelector } from '../hooks';
import { getAuthorizationState } from '../../store/authorization-slice/auth-selecror';

type PrivateRouteProps = {
  children: JSX.Element;
  navigateTo: AppRoute;
  authorizationState: AuthorizationState;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationState);
  const { children, navigateTo, authorizationState } = props;

  return (
    authStatus === authorizationState
      ? children
      : <Navigate to={navigateTo} />
  );
}

export default PrivateRoute;
