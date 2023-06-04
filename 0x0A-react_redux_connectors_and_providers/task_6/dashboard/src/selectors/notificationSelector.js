export const filterTypeSelected = (state) => state.filter;
export const getNotifications = (state) => state.notifications;
export const getUnreadNotifications = (state) => {
  const notifications = getNotifications(state).toJS();
  const filteredData = Object.values(notifications).filter(
    (notification) => notification.isRead === false
  );
  return filteredData;
};