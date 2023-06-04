import { normalize, schema } from 'normalizr';
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

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const arrayNotifications = new schema.Array(notification);

export const normalizedNotifications = normalize(
  notifications,
  arrayNotifications
);

export default getAllNotificationsByUser;