import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

let wrapper,
  appComponent,
  logOutMock,
  events = {};

describe('<App /> render', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
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
    appComponent = shallow(<App isLoggedIn={true} />);
  });
  it('should verify that the CourseList component is included', () => {
    const courseListComponent = appComponent.find(CourseList);
    expect(courseListComponent.length).toEqual(1);
  });
  it('should verify that the Login component is not included', () => {
    const loginComponent = appComponent.find(Login);
    expect(loginComponent.length).toEqual(0);
  });
});

describe('<App /> handle correctly events', () => {
  beforeEach(() => {
    logOutMock = jest.fn(() => {});
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
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