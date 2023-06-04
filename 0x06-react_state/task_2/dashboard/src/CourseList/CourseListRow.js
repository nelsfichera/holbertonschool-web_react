import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (!isHeader) {
    return (
      <tr className={css(styles.rowStyles)}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }

  if (textSecondCell)
    return (
      <tr className={css(styles.rowHeaderStyles)}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );

  return (
    <tr className={css(styles.rowHeaderStyles)}>
      <th colSpan={2}>{textFirstCell}</th>
    </tr>
  );
};

const styles = StyleSheet.create({
  rowHeaderStyles: {
    backgroundColor: '#deb5b545',
  },
  rowStyles: {
    backgroundColor: '#f5f5f5ab',
  },
});

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CourseListRow;