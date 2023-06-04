import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checkRow, setCheckRow] = useState(false);

  if (!isHeader) {
    return (
      <tr className={checkRow ? css(styles.rowChecked) : css(styles.rowStyles)}>
        <td>
          <input
            onClick={() => setCheckRow(!checkRow)}
            type="checkbox"
            name=""
            id=""
          />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }

  if (textSecondCell)
    return (
      <tr className={`${css(styles.rowHeaderStyles)}`}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );

  return (
    <tr className={`${css(styles.rowHeaderStyles)} ${css(styles.alignCenter)}`}>
      <th colSpan={2}>{textFirstCell}</th>
    </tr>
  );
};

const styles = StyleSheet.create({
  alignCenter: {
    textAlign: 'center',
  },
  rowHeaderStyles: {
    backgroundColor: '#deb5b545',
  },
  rowStyles: {
    backgroundColor: '#f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CourseListRow;