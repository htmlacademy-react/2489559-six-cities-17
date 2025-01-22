import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationState, DataStatus, NameSpace, SignInState } from '../../constants/constants';
import { UserData } from '../../types/user-data';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { toast } from 'react-toastify';

const initialState: {
  user: UserData | null;
  userState: DataStatus;
  authorizationState: AuthorizationState;
  signingInState: SignInState;
} =
{
  user: null,
  userState: DataStatus.Unknown,
  authorizationState: AuthorizationState.Unknown,
  signingInState: SignInState.Unknown,
};

export const authReducer = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationState = AuthorizationState.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationState = AuthorizationState.NoAuth;
        state.user = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.signingInState = SignInState.SigningIn;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationState = AuthorizationState.Auth;
        state.signingInState = SignInState.SignedIn;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationState = AuthorizationState.NoAuth;
        state.user = null;
        toast.error('Authorization error!');
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationState = AuthorizationState.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.rejected, () => {
        toast.error('Logout error!');
      });
  }
});
