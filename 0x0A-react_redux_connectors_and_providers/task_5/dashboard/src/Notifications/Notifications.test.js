import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import { normalizedNotifications } from '../schema/notifications';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import { Notifications } from './Notifications';

let wrapper;

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New course available',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: getLatestNotification() },
  },
];

const changedListNotifications = listNotifications.map((notification) => {
  if (notification.id === 3) return { ...notification, type: 'default' };
  return { ...notification };
});
changedListNotifications.push({
  id: 4,
  type: 'default',
  value: 'test data',
});

describe('<Notifications/> render', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Notifications />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('test that Notifications renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('verify that Notifications renders three list items', () => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={normalizedNotifications}
      />
    );
    const liElements = wrapper.find(NotificationItem);
    expect(liElements.length).toEqual(2);
  });
  it('verify that Notifications renders the text Here is the list of notifications', () => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={normalizedNotifications}
      />
    );
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
  it('check that the menu item is being displayed when displayDrawer is false', () => {
    expect(wrapper.containsMatchingElement(<div>Your notifications</div>)).toBe(
      true
    );
  });
  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    expect(wrapper.find('div.Notifications').length).toBe(0);
  });
});

describe('Test Notification component with the listNotifications prop', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });
  it('when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={normalizedNotifications}
      />
    );
    const liItems = wrapper.find(NotificationItem);
    expect(liItems.length).toBe(2);
  });
  it('when listNotifications is empty the message Here is the list of notifications is not displayed but No new notification for now is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(
      false
    );
    expect(wrapper.contains(<p>No new notification for now</p>)).toBe(true);
  });
});

describe('verify handle events given by props', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const mockFnDisplay = jest.fn(() => {});
    const mockFnHide = jest.fn(() => {});
    const props = {
      displayDrawer: false,
      handleDisplayDrawer: mockFnDisplay,
      handleHideDrawer: mockFnHide,
    };
    wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    wrapper.find('.menuItem').simulate('click');
    expect(mockFnDisplay.mock.calls.length).toBe(1);
  });
  it('verify that clicking on the button calls handleHideDrawer', () => {
    const mockFnDisplay = jest.fn(() => {});
    const mockFnHide = jest.fn(() => {});

    const props = {
      listNotifications: normalizedNotifications,
      displayDrawer: true,
      handleDisplayDrawer: mockFnDisplay,
      handleHideDrawer: mockFnHide,
    };
    wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.find('button').exists()).toBe(true);
    wrapper.find('button').simulate('click');
    expect(mockFnHide.mock.calls.length).toBe(1);
  });
  it('verify that the function fetchNotifications is called when the component is mounted', () => {
    const fetchNotifications = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications fetchNotifications={fetchNotifications} />
    );
    expect(fetchNotifications).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});