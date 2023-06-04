import { fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';
import { notificationReducer } from '../reducers/notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

const state = fromJS({
  filter: 'DEFAULT',
  notifications: notificationsNormalizer([
    { id: 1, isRead: false, type: 'default', value: 'New course available' },
    { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
  ]),
});

const actionNotifications = [
  { id: 1, isRead: true, type: 'default', value: 'New course available' },
  { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
  { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
];

describe('Selectors', () => {
  it('filterTypeSelected works as expected', () => {
    const result = filterTypeSelected(
      notificationReducer(undefined, { type: 'ANY_DATA' })
    );
    expect(result).toEqual('DEFAULT');
  });
  it('getNotifications returns a list of the message entities within the reducer', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const notificationsReducer = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications,
    }).toJS();
    const result = getNotifications(notificationsReducer);
    expect(result).toEqual(state.toJS().notifications);
  });
  it('getUnreadNotifications return a list of the message entities within the reducer', () => {
    const reducerData = notificationReducer(state, {
      type: MARK_AS_READ,
      index: 1,
    }).toJS();
    const result = getUnreadNotifications(reducerData);
    const expectedData = notificationsNormalizer([
      { id: 1, isRead: true, type: 'default', value: 'New course available' },
    ]);
    expect(result[0]).toEqual(expectedData[1]);
  });
});