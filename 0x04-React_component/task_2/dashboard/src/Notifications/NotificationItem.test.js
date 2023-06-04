import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem/> render', () => {
  it('test that NotificationItem render without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });
  it('test that NotificationItem render with dummy props default and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toEqual('<li data-priority="default">test</li>');
    expect(
      wrapper.containsMatchingElement(<li data-priority="default">test</li>)
    ).toEqual(true);
  });
  it('test that NotificationItem render with dummy props html', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.html()).toEqual(
      '<li data-priority="default"><u>test</u></li>'
    );
  });
});

describe('handler tests NotificationItem', () => {
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