import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(marginStyle.marginBottom)}>
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

const marginStyle = StyleSheet.create({
  marginBottom: '40px',
});

export default BodySectionWithMarginBottom;