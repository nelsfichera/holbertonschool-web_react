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
    const wrapper = shallow(<NotificationItem html={{__html:"<u>test</u>"}} />);
    expect(wrapper.html()).toEqual('<li data-priority="default"><u>test</u></li>');
  });
});
Footer
