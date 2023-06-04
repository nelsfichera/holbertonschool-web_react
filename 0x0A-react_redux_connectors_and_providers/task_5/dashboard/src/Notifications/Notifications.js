import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import close from '../assets/close-icon.png';
import vars from '../utils/styleVars';
import NotificationItem from './NotificationItem';

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

export class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      markNotificationAsRead,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    const containerStyles = displayDrawer === true ? css(styles.container) : '';

    return (
      <section className={containerStyles}>
        {listNotifications ? <div>Exists</div> : <div>doesnt exists</div>}
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
            {!listNotifications ? (
              <p>No new notification for now</p>
            ) : (
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.paddingNone)}>
                  {listNotifications &&
                    Object.values(listNotifications).map(
                      (notification, index) => (
                        <NotificationItem
                          key={index}
                          id={notification.id}
                          type={notification.type}
                          value={notification.value}
                          html={notification.html}
                          markNotificationAsRead={markNotificationAsRead}
                        />
                      )
                    )}
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
  listNotifications: PropTypes.object,
  markNotificationAsRead: PropTypes.func,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: null,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  fetchNotifications: () => {},
};
const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get('notifications').toJS(),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);