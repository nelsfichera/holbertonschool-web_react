import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
  } from '../actions/notificationActionTypes';
  import { notificationReducer } from './notificationReducer';
  
  describe('notifications reducer', () => {
    const initialState = {
      notifications: [],
      filter: '',
    };
    it('default state returns the initial data', () => {
      expect(notificationReducer(undefined, { type: 'ANY_TYPE' })).toEqual(
        initialState
      );
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
      expect(result).toEqual(expectedData);
    });
    it('MARK_AS_READ return state with isRead in true in the object with the correspond id', () => {
      const initialState = {
        notifications: [
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
        ],
        filter: '',
      };
      const result = notificationReducer(initialState, {
        type: MARK_AS_READ,
        index: 1,
      });
      const resultObject = result.notifications.filter(
        (notification) => notification.id === 1
      )[0];
      const expectedData = {
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: true,
      };
      expect(resultObject).toEqual(expectedData);
    });
    it('SET_TYPE_FILTER return the filter with the given payload', () => {
      const initialState = {
        notifications: [
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
        ],
        filter: '',
      };
      const result = notificationReducer(initialState, {
        type: SET_TYPE_FILTER,
        filter: 'URGENT',
      });
      expect(result.filter).toBe('URGENT');
    });
  });