import { SELECT_COURSE } from './actions/courseActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from './actions/uiActionTypes';
import { initialState, uiReducer } from './reducers/uiReducer';

describe('uiReducer', () => {
  it('state returned equals the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });
  it('state returned equals the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE })).toEqual(initialState);
  });
  it(' the state returned when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    console.log(uiReducer({ type: DISPLAY_NOTIFICATION_DRAWER }));
    expect(
      uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })
        .isNotificationDrawerVisible
    ).toEqual(true);
  });
});