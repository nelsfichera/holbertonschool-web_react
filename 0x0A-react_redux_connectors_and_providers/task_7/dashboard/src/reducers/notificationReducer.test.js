import { fromJS, Map } from 'immutable';
import { setLoadingState } from '../actions/notificationActionCreators';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { notificationReducer } from './notificationReducer';

const updatedState = {
  notifications: notificationsNormalizer([
    {
      id: 1,
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      type: 'urgent',
      value: 'New data available',
    },
  ]),
  filter: '',
};
const immutableNormalizedData = fromJS(updatedState);

describe('notifications reducer', () => {
  const initialState = {
    notifications: Map([]),
    filter: 'DEFAULT',
    loading: false,
  };
  it('default state returns the initial data', () => {
    const result = notificationReducer(undefined, { type: 'ANY_TYPE' });
    expect(result).toEqual(Map(initialState));
  });
  it('check the right response using FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        type: 'urgent',
        value: 'New data available',
      },
    ];

    const expectedData = notifications.map((initial) => ({
      ...initial,
      isRead: false,
    }));
    const result = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications,
    });
    expect(result.toJS().notifications).toEqual(
      notificationsNormalizer(expectedData)
    );
  });
  it('MARK_AS_READ return state with isRead in true in the object with the correspond id', () => {
    const result = notificationReducer(immutableNormalizedData, {
      type: MARK_AS_READ,
      index: 1,
    });
    expect(result.getIn(['notifications', '1', 'isRead'])).toBe(true);
  });
  it('SET_TYPE_FILTER return the filter with the given payload', () => {
    const result = notificationReducer(immutableNormalizedData, {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    });
    expect(result.get('filter')).toBe('URGENT');
  });

  it('should return new state with loading === true from setLoadingState action', () => {
    const initialState = Map({
      loading: false,
      filter: 'DEFAULT',
      notifications: {
        entities: {
          notifications: {},
          messages: {},
          users: {},
        },
      },
    });
    const newState = notificationReducer(initialState, setLoadingState(true));
    expect(newState.toJS().loading).toEqual(true);
  });
});