import { Component, Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import vars from '../utils/styleVars';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  /**
   * When the user clicks the submit button, prevent the default action, and set the state of the
   * component to be logged in.
   * @param e - the event object
   */
  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { logIn } = this.props;
    logIn(email, password);
  }

  /**
   * If the length of the email is greater than 0 and the length of the password is greater than 0, then
   * enable the submit button.
   * @param e - the event object
   */
  handleChangeEmail(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      enableSubmit:
        e.target.value.length > 0 && this.state.password.length > 0
          ? true
          : false,
    });
  }

  /**
   * If the length of the value of the input is greater than 0 and the length of the email is greater
   * than 0, then set enableSubmit to true, otherwise set it to false.
   * @param e - the event object
   */
  handleChangePassword(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      enableSubmit:
        e.target.value.length > 0 && this.state.email.length > 0 ? true : false,
    });
  }

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <Fragment>
        <div className={css(styles.body)}>
          <p className={css(styles.font500)}>
            Login to access the full dashboard
          </p>
          <form action="" onSubmit={(e) => this.handleLoginSubmit(e)}>
            <div className={css(styles.inputContainer)}>
              <label htmlFor="email">Email</label>
              <input
                className={css(styles.input)}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => this.handleChangeEmail(e)}
              />
            </div>
            <div className={css(styles.inputContainer)}>
              <label htmlFor="password">Password</label>
              <input
                className={css(styles.input)}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => this.handleChangePassword(e)}
              />
            </div>
            <input
              disabled={!enableSubmit}
              className={css(styles.button)}
              type="submit"
              value="OK"
            />
          </form>
        </div>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: '50vh',
    padding: '3rem',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
  },
  font500: {
    fontWeight: 500,
  },
  input: {
    margin: '0 1rem',
    border: 'thin solid var(--gray-thin-color)',
    borderRadius: '2px',
    padding: '0.2rem',
  },
  inputContainer: {
    display: 'inline-block',
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
  button: {
    border: `thin solid ${vars.grayThinColor}`,
    cursor: 'pointer',
    borderRadius: '2px',
    width: '3rem',
  },
});
export default Login;