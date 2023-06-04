import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import { Component, Fragment } from 'react';

const buttonStyles = {
  display: 'inline',
  position: 'absolute',
  right: '0.3rem',
  top: '0.3rem',
  background: 'none',
  border: 'none',
};

const imgStyles = {
  width: '20px',
  height: '20px',
};

const handleClick = () => console.log('Close button has been clicked');

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id) =>
    console.log(`Notification ${id} has been marked as read`);

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications !== this.props.listNotifications;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <section className="notifications-container">
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((notification, index) => (
                    <NotificationItem
                      key={index}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
                <button
                  onClick={handleClick}
                  style={buttonStyles}
                  aria-label="close"
                >
                  <img style={imgStyles} src={close} alt="close" />
                </button>
              </Fragment>
            )}
          </div>
        )}
      </section>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
export default Notifications;