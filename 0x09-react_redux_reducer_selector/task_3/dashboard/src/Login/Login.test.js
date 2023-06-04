import { shallow, mount } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

let wrapper;

describe('<Login/> render', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('render Login component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Login component has 2 label elements', () => {
    const labels = wrapper.find('label');
    expect(labels.length).toBe(2);
  });
  it('Login component has 3 input elements', () => {
    const inputs = wrapper.find('input');
    expect(inputs.length).toBe(3);
  });
});

describe('<Login> logic states', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('verify that the submit button is disabled by default', () => {
    expect(wrapper.state('enableSubmit')).toBe(false);
    expect(wrapper.contains(<input type="submit" value="OK" disabled />));
  });
  it('verify that after changing the value of the two inputs, the button is enabled', (done) => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', {
      target: { name: 'email', value: 'test@test.com' },
    });
    wrapper
      .find('input#password')
      .simulate('change', { target: { name: 'password', value: 'test' } });

    expect(wrapper.state().enableSubmit).toBe(true);
    done();
  });
});