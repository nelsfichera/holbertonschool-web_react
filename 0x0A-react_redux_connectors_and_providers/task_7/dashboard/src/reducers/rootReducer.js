import { Map } from 'immutable';
import { courseReducer, courseReducerInitialState } from './courseReducer';
import {
  notificationReducer,
  notificationReducerInitialState,
} from './notificationReducer';
import { uiReducer, uiReducerInitialState } from './uiReducer';

export const rootReducerInitialState = {
  courses: Map(courseReducerInitialState),
  notifications: Map(notificationReducerInitialState),
  ui: Map(uiReducerInitialState),
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};

export default rootReducer;