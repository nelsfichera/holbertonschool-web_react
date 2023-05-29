import { shallow } from 'enzyme';
import Footer from './Footer';

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
});