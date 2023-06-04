import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_LOADING_STATE,
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

export const setLoadingState = (loadState) => ({
  type: SET_LOADING_STATE,
  loadState,
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('./notifications.json')
      .then((res) => res.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((error) => {})
      .finally(() => dispatch(setLoadingState(false)));
  };
};