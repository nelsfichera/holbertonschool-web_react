import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';

export const Footer = ({ user }) => {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user && (
        <p>
          <a href="#">contact us</a>
        </p>
      )}
    </div>
  );
};

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({ user: state.ui.get('user') });

export default connect(mapStateToProps, null)(Footer);