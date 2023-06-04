import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import vars from '../utils/styleVars';
import CourseListRow from './CourseListRow';

export const CourseList = ({
  listCourses,
  fetchCourses,
  selectCourse,
  unSelectCourse,
}) => {
  const onChangeRow = (id, checked) => {
    checked ? selectCourse(id) : unSelectCourse(id);
  };
  useEffect(() => {
    (async () => {
      await fetchCourses();
    })();
  }, []);
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
          {
            listCourses.length === 0 ? (
              <tr>
                <td>No course available yet</td>
              </tr>
            ) : null
          }
        </tbody>
      </table>
    </div>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.object,
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

const mapStateToProps = (state) => {
  const coursesList = getListCourses(state);
  return {
    listCourses: coursesList,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);