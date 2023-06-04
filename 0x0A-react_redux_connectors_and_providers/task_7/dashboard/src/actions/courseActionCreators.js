import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from './courseActionTypes';

const courseList = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

const selectCourse = (index) => ({ type: SELECT_COURSE, index });
const unSelectCourse = (index) => ({ type: UNSELECT_COURSE, index });

export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export const fetchCourses = () => ({
  type: FETCH_COURSE_SUCCESS,
  payload: courseList,
});

export { selectCourse, unSelectCourse };