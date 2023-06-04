import fetch from 'node-fetch';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './uiActionTypes';
export const URL = 'http://localhost:4000/login-success.json';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});
export const logout = () => ({ type: LOGOUT });
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer);
export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer);

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const res = await fetch(URL);
      const json = await res.json();
      return dispatch(loginSuccess());
    } catch (error) {
      return dispatch(loginFailure());
    }
  };
};