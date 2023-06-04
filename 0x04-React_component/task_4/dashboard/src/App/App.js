import React, { Fragment } from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCtrlKey = this.handleCtrlKey.bind(this);
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
        <div className="container">
          <Notifications listNotifications={listNotifications} />
          <div className="App">
            <Header />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                commodi optio eos totam nihil vitae ad, a inventore debitis est
                corporis iusto cumque distinctio quae delectus libero molestiae
                asperiores reprehenderit atque enim magnam? Repudiandae
                perspiciatis amet recusandae nulla ut eius? Cum deleniti
                explicabo repellat corporis. Laboriosam culpa delectus beatae
                iusto.
              </p>
            </BodySection>
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
export default App;
