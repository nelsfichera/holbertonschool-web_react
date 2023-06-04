import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
  } from '../actions/notificationActionTypes';
  
  const initialState = {
    notifications: [],
    filter: '',
  };
  export const notificationReducer = (state, action) => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        return action.notifications.map((notification) => ({
          ...notification,
          isRead: false,
        }));
      case MARK_AS_READ:
        const { notifications } = state;
        const updatedNotifications = notifications.map((notification) =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : { ...notification }
        );
        return { ...state, notifications: updatedNotifications };
      case SET_TYPE_FILTER:
        const { filter } = action;
        return { ...state, filter };
  
      default:
        return initialState;
    }
  };
  Footer
  