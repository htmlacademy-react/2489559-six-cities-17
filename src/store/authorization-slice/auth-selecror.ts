import { AuthorizationState, DataStatus, NameSpace, SignInState } from '../../constants/constants';
import { AppState } from '../../types/state';
import { UserData } from '../../types/user-data';

export const getUserData = (state: AppState): UserData | null => state[NameSpace.Auth].user;
export const getUserDataState = (state: AppState): DataStatus => state[NameSpace.Auth].userState;
export const getSigningInState = (state: AppState): SignInState => state[NameSpace.Auth].signingInState;
export const getAuthorizationState = (state: AppState): AuthorizationState => state[NameSpace.Auth].authorizationState;
