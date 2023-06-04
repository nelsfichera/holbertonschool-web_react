import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import { AppContext } from '../App/AppContext';
import logo from '../assets/holberton-logo.jpg';
import vars from '../utils/styleVars';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logout } = this.props;
    return (
      <div className={css(styles.headerContainer)}>
        {user && (
          <section id="logoutSection">
            Welcome {user.email}
            <a href="#" onClick={logout}>
              (logOut)
            </a>
          </section>
        )}
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    borderBottom: `medium solid ${vars.mainColor}`,
  },
  logo: {
    width: '12rem',
    height: 'auto',
  },
  title: {
    display: 'inline',
    color: vars.mainColor,
  },
});

Header.contextType = AppContext;

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({ user: state.get('user') });
export const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);