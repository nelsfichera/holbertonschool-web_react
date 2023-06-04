import * as notifications from '../notifications.json';

const getAllNotificationsByUser = (userId) => {
  const filteredData = [];
  Object.values(notifications).forEach((notification) => {
    if (
      notification &&
      notification.author &&
      notification.author.id === userId
    )
      filteredData.push(notification.context);
  });
  return filteredData;
};

export default getAllNotificationsByUser;