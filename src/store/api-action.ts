import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../types/state';
import { saveToken, dropToken } from '../service/token';
import { APIRoute } from '../constants/constants';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Offer } from '../types/types-offer';
import { OfferComment } from '../types/types-offer-comment';
import { toast } from 'react-toastify';
import { Offers } from '../types/types-offers';
import { ReviewForm } from '../types/types-review-form';

export const fetchOffersAction = createAsyncThunk<Offers[], undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers', async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers[]>(APIRoute.Offers);
    return data;
  });

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferExtended', async (id, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return data;
  });

export const fetchOffersFavouritesAction = createAsyncThunk<Offers[], undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/fetchOffersFavorite', async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers[]>(APIRoute.Favorite);
    return data;
  });

export const fetchOfferCommentsAction = createAsyncThunk<OfferComment[], string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferExtendedComments', async (id, { extra: api }) => {
    const { data } = await api.get<OfferComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  });

export const fetchOffersNearbyAction = createAsyncThunk<Offers[], string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/fetchOffersNearby', async (id, { extra: api }) => {
    const { data } = await api.get<Offers[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  });

export const addOfferToFavoriteAction = createAsyncThunk<Offer, string, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }>(
    'offers/addOfferToFavorite', async (id, { dispatch, extra: api }) => {
      const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/1`);
      dispatch(fetchOffersFavouritesAction());
      return data;
    });

export const removeOfferFromFavoriteAction = createAsyncThunk<Offer, string, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
  }>(
    'offers/removeOfferFromFavorite', async (id, { dispatch, extra: api }) => {
      const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/0`);
      dispatch(fetchOffersFavouritesAction());
      return data;
    });

export const addOffersToFavoriteAction = createAsyncThunk<Offers[], string, {
      dispatch: AppDispatch;
      state: AppState;
      extra: AxiosInstance;
    }>(
      'offers/addOfferToFavorite', async (id, { dispatch, extra: api }) => {
        const { data } = await api.post<Offers[]>(`${APIRoute.Favorite}/${id}/1`);
        dispatch(fetchOffersFavouritesAction());
        return data;
      });

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/checkAuth', async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  });

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/login', async ({ login: email, password }, { extra: api }) => {
    const { data, data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    return data;
  });

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/logout', async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  });

export const submitCommentAction = createAsyncThunk<void, ReviewForm, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/submitComment', async ({ comment, rating, id }, { dispatch, extra: api }) => {
    try {
      await api.post<ReviewForm>(`${APIRoute.Comments}/${id}`, { comment, rating });
      dispatch(fetchOfferCommentsAction(id));
    } catch (error) {
      toast.error('Post error!');
    }
  });
