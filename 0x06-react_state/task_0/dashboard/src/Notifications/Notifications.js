import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import { Component, Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import vars from '../utils/styleVars';

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

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id) =>
    console.log(`Notification ${id} has been marked as read`);

  shouldComponentUpdate(nextProps) {
    const updatedDisplayDrawer =
      nextProps.displayDrawer !== this.props.displayDrawer;
    const updatedListNotifications =
      nextProps.listNotifications.length > this.props.listNotifications.length;
    return updatedDisplayDrawer || updatedListNotifications;
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    const containerStyles = displayDrawer === true ? css(styles.container) : '';
    return (
      <section className={containerStyles}>
        {!displayDrawer && (
          <div
            onClick={() => handleDisplayDrawer()}
            className={`${css(styles.menuItem)} menuItem`}
          >
            Your notifications
          </div>
        )}

        {displayDrawer && (
          <div className={css(styles.notifications)}>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.paddingNone)}>
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
                  onClick={() => handleHideDrawer()}
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

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '5px',
    right: '10px',
    '@media (max-width: 900px)': {
      position: 'absolute !important',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'white',
      fontSize: '20px',
    },
  },
  paddingNone: {
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
  notifications: {
    border: `dotted thin ${vars.mainColor}`,
    '@media (max-width: 900px)': {
      position: 'absolute !important',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'white',
      fontSize: '20px',
      border: 'none',
    },
  },
  menuItem: {
    cursor: 'pointer',
    backgroundColor: '#fff8f8',
    textAlign: 'right',
    ':hover': {
      animationName: [vars.opacityFrameChange, vars.bounceFrameChange],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markAsRead: PropTypes.func,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};
export default Notifications;