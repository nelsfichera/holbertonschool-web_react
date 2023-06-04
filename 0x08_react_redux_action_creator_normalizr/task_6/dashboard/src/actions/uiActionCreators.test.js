import {
    displayNotificationDrawer,
    hideNotificationDrawer,
    login,
    logout,
  } from './uiActionCreators';
  import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN,
    LOGOUT,
  } from './uiActionTypes';
  
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