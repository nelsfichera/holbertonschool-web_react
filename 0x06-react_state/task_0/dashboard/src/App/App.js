import React, { Fragment } from 'react';
import logo from '../assets/holberton-logo.jpg';
import {
  getFullYear,
  getFooterCopy,
  getLatestNotification,
} from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import { listCourses, listNotifications } from './data';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import vars from '../utils/styleVars';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCtrlKey = this.handleCtrlKey.bind(this);
    this.state = { displayDrawer: false };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  /**
   * When the user clicks on the hamburger menu, the drawer will be displayed.
   */
  handleDisplayDrawer() {
    this.setState({ ...this.state, displayDrawer: true });
  }

  /**
   * When the user clicks the button, the drawer will be hidden.
   */
  handleHideDrawer() {
    this.setState({ ...this.state, displayDrawer: false });
  }
  /**
   * If the user presses the 'h' key while holding down the 'ctrl' key, log the user out
   * @param event - The event object
   */
  handleCtrlKey(event) {
    const { logOut } = this.props;

    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      logOut();
    }
  }

  componentDidMount(e) {
    document.addEventListener('keydown', this.handleCtrlKey, false);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <div className={css(styles.container)}>
          <Notifications
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            listNotifications={listNotifications}
          />
          <div className={css(styles.app)}>
            <Header />
          </div>
          <div className={css(styles.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="BodySectionWithMarginBottom">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom>
                <Login title="Log in to continue" />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing Elia. Modi
                commodi optio eos totam nihil vitae ad, a inventore debitis est
                corporis iusto cumque distinctio quae delectus libero molestiae
                asperiores reprehenderit atque enim magnam? Repudiandae
                perspiciatis amet recusandae nulla ut eius? Cum deleniti
                explicabo repellat corporis. Laboriosam culpa delectus beatae
                iusto.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

const styles = StyleSheet.create({
  app: {
    color: vars.mainColor,
  },
  body: {
    minHeight: '100vh',
    marginTop: '10rem',
  },
  container: {
    position: 'relative',
  },
  footer: {
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
  },
});

export default App;