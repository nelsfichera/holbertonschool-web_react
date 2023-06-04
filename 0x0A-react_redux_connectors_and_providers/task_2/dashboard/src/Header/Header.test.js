import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme/build';
import { logOut, user } from '../App/AppContext';
import { Header } from './Header';
const value = { user, logOut };

export const userObjectTest = { email: 'test@test.com', password: '123456' };
let wrapper;
describe('<Header/> render', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('render Header component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that Header component has a img tag', () => {
    const imgTag = wrapper.find('img');
    expect(imgTag.exists()).toBe(true);
  });
  it('verify that header component has a h1 tag', () => {
    const h1Tag = wrapper.find('h1');
    expect(h1Tag.exists()).toBe(true);
  });
  it('Verify that the logoutSection is not created', () => {
    expect(wrapper.find('logoutSection').exists()).toBe(false);
  });
  it('with a user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created', () => {
    const wrapper = shallow(<Header user={userObjectTest} />);
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });
});