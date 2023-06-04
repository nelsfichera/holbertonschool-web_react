import React from 'react';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import vars from '../utils/styleVars';

const CourseList = ({ listCourses }) => {
  return (
    <div className="courseListContainer">
      <table id="CourseList" className={css(styles.table)}>
        <thead className={css(styles.borderStyle, styles.textLeft)}>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <tr>
              <td>No course available yet</td>
            </tr>
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  courseList: {
    margin: '3rem auto',
    maxWidth: '90vw',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  borderStyle: {
    border: `thin solid var(${vars.grayThinColor})`,
  },
  textLeft: {
    textAlign: 'left',
  },
});

export default CourseList;