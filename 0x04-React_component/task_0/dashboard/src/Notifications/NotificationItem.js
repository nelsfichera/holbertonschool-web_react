import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  if (html)
    return (
      <li data-priority={type} dangerouslySetInnerHTML={html}></li>
    );
  return <li data-priority={type}>{value}</li>;
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default"
}
export default NotificationItem;