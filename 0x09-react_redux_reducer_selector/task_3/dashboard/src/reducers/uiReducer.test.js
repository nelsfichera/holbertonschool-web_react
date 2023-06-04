import { SELECT_COURSE } from './actions/courseActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from './actions/uiActionTypes';
import { initialState, uiReducer } from './reducers/uiReducer';

describe('uiReducer', () => {
  it('state returned equals the initial state when no action is passed', () => {
    const resultData = uiReducer(undefined, {});
    expect(resultData).toEqual(initialState);
  });
  it('state returned equals the initial state when the action SELECT_COURSE is passed', () => {
    const resultData = uiReducer(undefined, { type: SELECT_COURSE });
    expect(resultData).toEqual(initialState);
  });
  it(' the state returned when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const resultData = uiReducer(undefined, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(resultData.toJS().isNotificationDrawerVisible).toEqual(true);
  });
});