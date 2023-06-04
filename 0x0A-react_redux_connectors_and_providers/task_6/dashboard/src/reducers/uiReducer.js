import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/uiActionTypes';

export const uiReducerInitialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
};

export const uiReducer = (state = Map(uiReducerInitialState), action) => {
  switch (action?.type) {
    case LOGIN:
      return state.set('user', action.user);
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);
    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);
    default:
      break;
  }

  return Map(uiReducerInitialState);
};