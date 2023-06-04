import {
  SELECT_COURSE,
  UNSELECT_COURSE,
} from './src/actions/courseActionTypes';

const selectCourse = (index) => ({ type: SELECT_COURSE, index });
const unSelectCourse = (index) => ({ type: UNSELECT_COURSE, index });

export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export { selectCourse, unSelectCourse };