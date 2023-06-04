import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
  } from '../actions/courseActionTypes';
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
  
  describe('courseReducer', () => {
    it('default state returns an empty array', () => {
      expect(courseReducer(undefined, { type: 'ANY_DATA' }).length).toBe(0);
      expect(Array.isArray(courseReducer(undefined, { type: 'ANY_DATA' }))).toBe(
        true
      );
      expect(courseReducer(undefined, { type: 'ANY_DATA' })).toEqual([]);
    });
    it('FETCH_COURSE_SUCCESS returns the data passed', () => {
      const expectedData = [
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
      ];
      expect(
        courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, payload: data })
      ).toEqual(expectedData);
    });
    it('SELECT_COURSE returns the data with the right item updated', () => {
      const expected = {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      };
      const resultReducer = courseReducer(data, {
        type: SELECT_COURSE,
        index: 2,
      });
      const filteredObject = resultReducer.filter((row) => row.id === 2)[0];
      expected({ ...filteredObject, isSelected: true }).toEqual(expected);
    });
    it('UNSELECT_COURSE returns the data with the right item updated', () => {
      const expected = {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      };
      const resultReducer = courseReducer(data, {
        type: UNSELECT_COURSE,
        index: 2,
      });
      const filteredObject = resultReducer.filter((row) => row.id === 2)[0];
      expect({ ...filteredObject, isSelected: false }).toEqual(expected);
    });
  });