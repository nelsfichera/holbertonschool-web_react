import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('actions course', () => {
  it('Calling the creator selectCourse with 1 as argument should return: { type: SELECT_COURSE, index: 1 }', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  it('Calling the creator unSelectCourse with 1 as argument should return: { type: UNSELECT_COURSE, index: 1 }', () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
  it('Calling the creator fetchCourses should return a data with the list of courses', () => {
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
    expect(fetchCourses().payload).toEqual(courseList);
  });
});