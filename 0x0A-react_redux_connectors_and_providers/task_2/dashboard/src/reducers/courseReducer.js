import { Map } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map([]);
export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const listCoursesAsObject = coursesNormalizer(action.payload);
      Object.keys(listCoursesAsObject).map(
        (courseId) => (listCoursesAsObject[courseId].isSelected = false)
      );
      return state.merge(listCoursesAsObject);
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);

    default:
      return initialState.toJS();
  }
};