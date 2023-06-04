import {
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

export const markAsRead = (index) => ({ type: MARK_AS_READ, index });
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter: NotificationTypeFilters[filter],
});

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (index) =>
  dispatch(setNotificationFilter(index));