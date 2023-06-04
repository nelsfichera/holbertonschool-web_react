import { normalize, schema } from 'normalizr';
import * as notifications from '../notifications.json';

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

const getAllNotificationsByUser = (userId) => {
  const notificationsList = [];

  for (const value of Object.values(
    normalizedNotifications.entities.notifications
  )) {
    if (value.author === userId)
      notificationsList.push(
        normalizedNotifications.entities.messages[value.context]
      );
  }

  return notificationsList;
};

export default getAllNotificationsByUser;