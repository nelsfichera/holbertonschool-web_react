import { shallow, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from './AppContext';
import { listNotifications } from './data';

let wrapper,
  appComponent,
  logOutMock,
  events = {};
const value = {
  user,
  logOut,
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
    const headerComponent = wrapper.find(Header);
    expect(headerComponent.exists()).toBe(true);
    expect(headerComponent.length).toBe(1);
  });
  it('verify that App has 1 Login child component', () => {
    const loginComponent = wrapper.find(Login);
    expect(loginComponent.exists()).toBe(true);
    expect(loginComponent.length).toBe(1);
  });
  it('verify that App has 1 Footer child component', () => {
    const footerComponent = wrapper.find(Footer);
    expect(footerComponent.exists()).toBe(true);
    expect(footerComponent.length).toBe(1);
  });
  it('verify that App has 1 Notifications child component', () => {
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.exists()).toBe(true);
    expect(notificationsComponent.length).toBe(1);
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
  it('verify that when the keys "control" and "h" are pressed the "logOut" function is called', (done) => {
    const logOutMock = jest.fn(() => void 0);
    shallow(<App />);
    window.alert = logOutMock;
    events.keydown({ keyCode: 72, ctrlKey: true });
    expect(logOutMock).toHaveBeenCalled();
    done();
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
  it('verify after calling handleDisplayDrawer, the state should now be true', () => {
    expect(wrapper.state('displayDrawer')).toEqual(false);
    expect(wrapper.instance().handleDisplayDrawer());
    expect(wrapper.state('displayDrawer')).toEqual(true);
  });
  it('verify that after calling handleHideDrawer, the state is updated to be false', () => {
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
  it('verify that the logIn function updates the state correctly', () => {
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <App />
      </AppContext.Provider>
    );
    wrapper.instance().logIn('user@gmail.com', 'top secret');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
    expect(wrapper.state().user.email).toBe('user@gmail.com');
  });
  it('verify that the logOut function updates the state correctly', () => {
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <App />
      </AppContext.Provider>
    );
    wrapper.instance().logIn('user@gmail.com', 'top secret');
    wrapper.instance().logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    expect(wrapper.state().user.email).toBe('');
  });
  it('verify that markNotificationAsRead works as intended. It deletes a notification with id = 3', () => {
    value.user.isLoggedIn = true;
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <App />
      </AppContext.Provider>
    );
    wrapper.setState({ listNotifications });
    wrapper.instance().markNotificationAsRead(3);
    expect(wrapper.state('listNotifications').length).toBe(2);
  });
});