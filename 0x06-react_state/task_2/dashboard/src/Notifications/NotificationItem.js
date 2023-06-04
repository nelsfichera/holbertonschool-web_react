import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let classToRender =
      type === 'urgent'
        ? styles.dataPriorityUrgent
        : styles.dataPriorityDefault;
    console.log(type);
    if (html)
      return (
        <li
          onClick={() => markAsRead(id)}
          data-priority={type}
          className={css(classToRender)}
          dangerouslySetInnerHTML={html}
        ></li>
      );
    return (
      <li
        onClick={() => markAsRead(id)}
        data-priority={type}
        className={css(classToRender)}
      >
        {value}
      </li>
    );
  }
}
const styles = StyleSheet.create({
  dataPriorityDefault: {
    color: 'blue',
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: 'thin solid black',
      padding: '10px 8px',
    },
  },
  dataPriorityUrgent: {
    color: 'red',
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: 'thin solid black',
      padding: '10px 8px',
    },
  },
});

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};
export default NotificationItem;