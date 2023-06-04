export const filterTypeSelected = (state) => state.filter;
export const getNotifications = (state) => state.notifications;
export const getUnreadNotifications = (state) => {
  let notifications = getNotifications(state).toJS();
  const filteredData = Object.values(notifications.notifications).filter(
    (notification) => notification.isRead === false
  );

  return filteredData;
};