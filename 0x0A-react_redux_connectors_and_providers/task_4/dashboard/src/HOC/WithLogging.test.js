import { WithLogging } from './WithLogging';
import { shallow, mount } from 'enzyme';
import Login from '../Login/Login';

describe('HOC WithLogging', () => {
  it('console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
    console.log = jest.fn();
    const EnhancedComponent = WithLogging(() => (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          esse!
        </p>
      </div>
    ));
    const wrapper = shallow(<EnhancedComponent />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );
  });
  it('console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component', (done) => {
    console.log = jest.fn();
    const EnhancedComponent = WithLogging(Login);
    const wrapper = shallow(<EnhancedComponent />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(
      'Component Login is going to unmount'
    );
    done();
  });
});