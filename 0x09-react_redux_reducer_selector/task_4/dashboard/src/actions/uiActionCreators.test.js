import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  loginRequest,
  logout,
} from './uiActionCreators';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ui Action creators', () => {
  it('Should return the right user and the type LOGIN', () => {
    expect(login('test@gmail.com', 'testPassword123')).toEqual({
      type: LOGIN,
      user: { email: 'test@gmail.com', password: 'testPassword123' },
    });
  });
  it('Should return the type LOGOUT', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });
  it('Should return the type DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });
  it('Should return the type HIDE_NOTIFICATION_DRAWER', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});

describe('Login request', () => {
  afterEach(() => {
    fetch.resetMocks();
  });
  it('verify that if the API returns the right response, the store received two actions LOGIN and LOGIN_SUCCESS', async () => {
    const store = mockStore({});
    fetch.mockResponseOnce('{}');
    const userCredentials = {
      email: 'test@test.com',
      password: 'test',
    };
    return store
      .dispatch(loginRequest(userCredentials.email, userCredentials.password))
      .then(() => {
        const credentials = {
          type: LOGIN,
          user: userCredentials,
        };
        const stateLoginResponse = { type: LOGIN_SUCCESS };
        expect(store.getActions()[0]).toEqual(credentials);
        expect(store.getActions()[1]).toEqual(stateLoginResponse);
      });
  });
  it('verify that if the API fails, the store received two actions LOGIN and LOGIN_FAILURE', async () => {
    const store = mockStore({});

    fetch.mockReject(() => {});
    const userCredentials = {
      email: 'test@test.com',
      password: 'test',
    };
    return store
      .dispatch(loginRequest(userCredentials.email, userCredentials.password))
      .then(() => {
        const credentials = {
          type: LOGIN,
          user: userCredentials,
        };
        const stateLoginResponse = { type: LOGIN_FAILURE };
        expect(store.getActions()[0]).toEqual(credentials);
        expect(store.getActions()[1]).toEqual(stateLoginResponse);
        expect(fetch).toHaveBeenCalledTimes(1);
      });
  });
});