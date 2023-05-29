import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import { CourseShape } from './CourseShape';
import  PropTypes  from 'prop-types';

const CourseList = ({listCourses}) => {
  return (
    <div className="courseListContainer">
      <table id="CourseList">
        <thead>
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
  listCourses: []
}

export default CourseList;