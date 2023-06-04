import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
  } from '../../../../task_1/dashboard/src/actions/courseActionTypes';
  
  const initialState = [];
  export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
        return action.payload.map((course) => ({ ...course, isSelected: false }));
  
      case SELECT_COURSE:
        return state.map((course) =>
          course.id === action.payload
            ? { ...course, isSelected: true }
            : { ...course }
        );
  
      case UNSELECT_COURSE:
        return state.map((course) =>
          course.id === action.payload
            ? { ...course, isSelected: false }
            : { ...course }
        );
  
      default:
        return initialState;
    }
  };