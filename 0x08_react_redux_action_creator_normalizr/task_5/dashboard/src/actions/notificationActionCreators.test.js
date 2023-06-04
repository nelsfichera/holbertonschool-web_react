import {
  markAsRead,
  setNotificationFilter,
} from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

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
});