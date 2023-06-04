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

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New course available',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: getLatestNotification() },
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoggedIn } = this.props;
    console.log(isLoggedIn);
    return (
      <Fragment>
        <div className="container">
          <Notifications listNotifications={listNotifications} />
          <div className="App">
            <Header />
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};
export default App;