import  PropTypes  from 'prop-types';

const shapeObject = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export const NotificationItemShape = PropTypes.shape(shapeObject);