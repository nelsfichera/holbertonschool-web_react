import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut, AppContext } from '../App/AppContext';
const value = { user, logOut };

let wrapper, wrapperMount;
describe('<Header/> render', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
    wrapperMount = mount(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('render Header component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that Header component has a img tag', () => {
    const imgTag = wrapperMount.find('img');
    expect(imgTag.exists()).toBe(true);
  });
  it('verify that header component has a h1 tag', () => {
    const h1Tag = wrapperMount.find('h1');
    expect(h1Tag.exists()).toBe(true);
  });
  it('Verify that the logoutSection is not created', () => {
    expect(wrapperMount.find('logoutSection').exists()).toBe(false);
  });
  it('with a user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created', () => {
    value.user.email = 'test@email.com';
    value.user.password = 'Top secret, never will guess it';
    value.user.isLoggedIn = true;
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.context().user.email).toBe('test@email.com');
    expect(wrapper.context().user.isLoggedIn).toBe(true);
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });
  it('verify that clicking the link call to an spy', () => {
    value.user.email = 'test@email.com';
    value.user.password = 'Top secret, never will guess it';
    value.user.isLoggedIn = true;
    value.logOut = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
    const logOutLink = wrapper.find('a');
    logOutLink.simulate('click');
    expect(value.logOut).toHaveBeenCalled();
  });
});