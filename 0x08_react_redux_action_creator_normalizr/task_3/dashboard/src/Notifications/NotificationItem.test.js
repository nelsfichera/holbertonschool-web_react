import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<NotificationItem/> render', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('test that NotificationItem render without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });
  it('test that NotificationItem render with dummy props default and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(
      wrapper.containsMatchingElement(<li data-priority="default">test</li>)
    ).toEqual(true);
  });
  it('test that NotificationItem render with dummy props html', () => {
    const props = {
      html: { __html: '<u>test</u>' },
      type: 'urgent',
    };
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(
      wrapper.contains(
        <li data-priority="urgent">
          <u>test</u>
        </li>
      )
    );
  });
});

describe('handler tests NotificationItem', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('when simulating a click on the component, the spy is called with the right ID argument', (done) => {
    const wrapper = shallow(
      <NotificationItem type="default" value="test" id={5} />
    );
    wrapper.instance().markAsRead = jest.fn();
    const { markAsRead } = wrapper.instance();
    markAsRead(5);
    expect(markAsRead).toHaveBeenCalled();
    expect(markAsRead).toHaveBeenCalledWith(5);
    markAsRead.mockClear();
    done();
  });
});