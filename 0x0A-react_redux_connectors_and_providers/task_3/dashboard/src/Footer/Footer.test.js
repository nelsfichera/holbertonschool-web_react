import { shallow } from 'enzyme';
import { userObjectTest } from '../Header/Header.test';
import { Footer } from './Footer';

let wrapper;
describe('<Footer/> render', () => {
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  it('render Footer component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Footer component must have Copyright text', () => {
    expect(wrapper.text()).toContain('Copyright');
  });
  it('verify that the link is not displayed when the user is logged out within the context', () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find('a').exists()).toBe(false);
  });
  it('verify that the link is displayed when the user is logged in within the context', () => {
    const wrapper = shallow(<Footer user={userObjectTest} />);
    expect(wrapper.find('a').exists()).toBe(true);
  });
});