import {
  markAsRead,
  setLoadingState,
  setNotificationFilter,
  setNotifications,
} from './notificationActionCreators';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_LOADING_STATE,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

describe('notification action creators', () => {
  it('markAsRead must return {type: MARK_AS_READ, index: 1}', () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });
  it('Calling the creator with one of the filters from NotificationTypeFilters as an argument should return { type: SET_TYPE_FILTER, filter: "DEFAULT"  }', () => {
    expect(setNotificationFilter('DEFAULT')).toEqual({
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    });
  });
  it('Calling setLoadingState action creator', () => {
    expect(setLoadingState('test')).toEqual({
      type: SET_LOADING_STATE,
      loadState: 'test',
    });
  });
  it('Calling setNotifications action creator', () => {
    expect(setNotifications(['test'])).toEqual({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications: ['test'],
    });
  });
});