import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<BodySection /> Tests', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Should render correctly', () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists()).toBe(true);
  });
  it('shallowing the component should render correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    const h2Element = wrapper.find('h2');
    expect(h2Element.text()).toEqual('test title');
    const pElement = wrapper.find('p');
    expect(pElement.text()).toEqual('test children node');
  });
});