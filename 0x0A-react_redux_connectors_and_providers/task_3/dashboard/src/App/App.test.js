import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme/build';
import { fromJS } from 'immutable';
import { logout } from '../actions/uiActionCreators';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { App, mapStateToProps } from './App';
import { user } from './AppContext';
import { listNotifications } from './data';

let wrapper,
  appComponent,
  logOutMock,
  events = {};
const value = {
  user,
  logout,
};
describe('<App /> render', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders App component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that App has 1 Header child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('verify that App has 1 Login child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it('verify that App has 1 Footer child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it('verify that App has 1 Notifications child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });
});

describe('<App/> render when using isLoggedIn prop', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    appComponent = shallow(<App />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should verify that the CourseList component is included', () => {
    appComponent.setState({ user: { isLoggedIn: true } });
    const courseListComponent = appComponent.find(CourseList);
    expect(courseListComponent.length).toEqual(1);
  });
  it('should verify that the Login component is not included', () => {
    appComponent.setState({ user: { isLoggedIn: true } });
    const loginComponent = appComponent.find(Login);
    expect(loginComponent.length).toEqual(0);
  });
});

describe('<App /> handle correctly events', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();

    logOutMock = jest.fn(() => {});
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Should have a logOut function into the rendered component', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const {
      props: { logOut },
    } = wrapper;
    expect(logOut);
  });
  it('Should listen to console log', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const spyLog = jest.spyOn(console, 'log');
    expect(spyLog);
  });
});

describe('<App> handle events that change state', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<App />);
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('verify that markNotificationAsRead works as intended. It deletes a notification with id = 3', () => {
    value.user.isLoggedIn = true;
    const wrapper = shallow(<App />);
    wrapper.setState({ listNotifications });
    wrapper.instance().markNotificationAsRead(3);
    expect(wrapper.state('listNotifications').length).toBe(2);
  });
});

describe('mapStateToProps', () => {
  it('mapStateToProps returns the right object from is user Logged in', () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });
    const result = mapStateToProps(state);
    expect(result).toEqual({ isUserLoggedIn: true });
  });
  it('mapStateToProps returns the right object from display Drawer', () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });
    const result = mapStateToProps(state);
    expect(result).toEqual({ displayDrawer: true });
  });
});