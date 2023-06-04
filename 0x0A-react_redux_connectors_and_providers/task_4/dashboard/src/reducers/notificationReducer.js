import { Map, setIn } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_LOADING_STATE,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const notificationReducerInitialState = {
  notifications: Map([]),
  filter: 'DEFAULT',
  loading: false,
};
export const notificationReducer = (
  state = Map(notificationReducerInitialState),
  action
) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const listNotificationsAsObject = notificationsNormalizer(
        action.notifications
      );
      Object.keys(listNotificationsAsObject).map(
        (notificationId) =>
          (listNotificationsAsObject[notificationId]['isRead'] = false)
      );
      return state.set(
        'notifications',
        state.get('notifications').merge(listNotificationsAsObject)
      );
    case MARK_AS_READ:
      return setIn(
        state,
        ['notifications', String(action.index), 'isRead'],
        true
      );

    case SET_TYPE_FILTER:
      const { filter } = action;
      return state.set('filter', filter);

    case SET_LOADING_STATE:
      return state.set('loading', action.loadState);

    default:
      break;
  }
  return Map(notificationReducerInitialState);
};