import { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import vars from '../utils/styleVars';

const Login = () => {
  return (
    <Fragment>
      <div className={css(styles.body)}>
        <p className={css(styles.font500)}>
          Login to access the full dashboard
        </p>
        <label htmlFor="email">Email</label>
        <input
          className={css(styles.input)}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className={css(styles.input)}
          type="password"
          name="password"
          id="password"
        />
        <button className={css(styles.button)}>OK</button>
      </div>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '50vh',
    padding: '3rem',
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
  button: {
    border: `thin solid ${vars.grayThinColor}`,
    cursor: 'pointer',
    borderRadius: '2px',
  },
});
export default Login;