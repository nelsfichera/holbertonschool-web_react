import { shallow } from 'enzyme';
import Login from './Login';

let wrapper;

describe('<Login/> render', () => {
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
  it('render Login component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Login component has 2 label elements', () => {
    const labels = wrapper.find('label');
    expect(labels.length).toBe(2);
  });
  it('Login component has 2 input elements', () => {
    const inputs = wrapper.find('input');
    expect(inputs.length).toBe(2);
  });
});