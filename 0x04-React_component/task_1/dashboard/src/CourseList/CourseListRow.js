import React from 'react';
import  PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (!isHeader) {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }

  if (textSecondCell)
    return (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );

  return (
    <tr>
      <th colSpan="2">{textFirstCell}</th>
    </tr>
  );
};

CourseListRow.propTypes ={
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default CourseListRow;