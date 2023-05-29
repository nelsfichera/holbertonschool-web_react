import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

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
});