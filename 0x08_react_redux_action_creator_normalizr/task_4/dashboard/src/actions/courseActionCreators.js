import {
    SELECT_COURSE,
    UNSELECT_COURSE,
  } from './src/actions/courseActionTypes';
  
  const selectCourse = (index) => ({ type: SELECT_COURSE, index });
  const unSelectCourse = (index) => ({ type: UNSELECT_COURSE, index });
  
  export { selectCourse, unSelectCourse };