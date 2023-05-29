import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    if (html)
      return (
        <li
          onClick={() => markAsRead(id)}
          data-priority={type}
          dangerouslySetInnerHTML={html}
        ></li>
      );
    return (
      <li onClick={() => markAsRead(id)} data-priority={type}>
        {value}
      </li>
    );
  }
}

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