import { getLatestNotification } from '../utils/utils';

export const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

export const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New course available',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: getLatestNotification() },
  },
];