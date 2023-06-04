import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySection.css';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};

export default BodySectionWithMarginBottom;
