import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('mapStateToProps returns the right object from is user Logged in', () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });
    const result = mapStateToProps(state);
    expect(result).toEqual({ isUserLoggedIn: true });
  });
  it('mapStateToProps returns the right object from display Drawer', () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });
    const result = mapStateToProps(state);
    expect(result).toEqual({ displayDrawer: true });
  });
});