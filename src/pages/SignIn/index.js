import '../../styles/auth.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="auth">
      <div className="auth__details">
        <div className="auth__info">
          <h2>Log in</h2>
          <p>
            Welcome to the Swapive platform, please enter your login credentials
            below to start using the application
          </p>
        </div>
        <form>
          <div className="auth__form">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="auth__form">
            <label htmlFor="passsword">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <Link to="/" className="auth__link login__reset">
            Forgot password?
          </Link>

          <hr className="authForm__line" />

          <div className="login__options">
            <div className="auth__checkbox">
              <div className="checkbox">
                <input type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1">Remember Me</label>
              </div>
            </div>

            <div className="auth__btn">
              <button>Log in</button>
            </div>
          </div>
        </form>

        <p className="auth__alt">
          Don’t have an account?{' '}
          <Link to="/" className="auth__link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
