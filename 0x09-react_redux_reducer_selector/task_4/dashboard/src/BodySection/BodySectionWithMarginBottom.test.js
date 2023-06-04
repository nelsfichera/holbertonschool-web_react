import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<BodySectionWithMarginBottom /> Tests', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Should render correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists()).toBe(true);
  });
  it('shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test-title">
        <p>test children</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.contains(<div className="bodySection" />));
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find('BodySection').exists()).toBe(true);
    expect(wrapper.find('BodySection').length).toBe(1);
    expect(wrapper.find('BodySection').props().title).toBe('test-title');
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('test children');
  });
});