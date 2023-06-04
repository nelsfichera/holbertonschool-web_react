import { Map } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { courseReducer } from './courseReducer';

const data = [
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

const immutableNormalizedData = Map(coursesNormalizer(data));

describe('courseReducer', () => {
  it('default state returns an empty array', () => {
    const result = courseReducer(undefined, { type: 'ANY_DATA' });
    expect(Object.keys(result).length).toBe(0);
    expect(Array.isArray(result)).toBe(false);
    expect(result).toEqual({});
  });
  it('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const expectedData = coursesNormalizer([
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ]);

    const result = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      payload: data,
    });
    expect(result.toJS()).toEqual(expectedData);
  });
  it('SELECT_COURSE returns the data with the right item updated', () => {
    const resultReducer = courseReducer(immutableNormalizedData, {
      type: SELECT_COURSE,
      index: 2,
    }).toJS();
    expect(resultReducer['2']['isSelected']).toBe(true);
  });
  it('UNSELECT_COURSE returns the data with the right item updated', () => {
    const resultReducer = courseReducer(immutableNormalizedData, {
      type: UNSELECT_COURSE,
      index: 2,
    }).toJS();
    expect(resultReducer['2']['isSelected']).toBe(false);
  });
});