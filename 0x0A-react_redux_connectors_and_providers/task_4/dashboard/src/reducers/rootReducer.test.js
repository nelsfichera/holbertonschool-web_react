import { Map } from 'immutable';
import { combineReducers } from 'redux';
import rootReducer from './rootReducer';

describe('Combine store tests', () => {
  it('the root reducers initial state for the following structure has the right structure', () => {
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };
    const combinedReducer = combineReducers(rootReducer);
    const state = combinedReducer(undefined, { type: 'ANY_DATA' });
    Object.keys(state).map((key) => {
      expect(typeof state[key]).toEqual(typeof expectedState[key]);
    });
  });
});