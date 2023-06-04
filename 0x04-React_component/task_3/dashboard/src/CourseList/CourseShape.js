import PropTypes from 'prop-types';

const courseShapeObject = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
};

export const CourseShape = PropTypes.shape(courseShapeObject);