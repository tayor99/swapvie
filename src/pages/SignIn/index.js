import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import '../../styles/auth.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="auth">
      <div className="auth__logo">
        <h1>
          <span>S</span> Swapive
        </h1>
      </div>
      <div className="auth__details">
        <h2>Sign up into your account</h2>
        <form>
          <div className="auth__form">
            <label htmlFor="email">
              <AiOutlineMail className="auth__icon" />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="auth__form">
            <label htmlFor="passsword">
              <AiOutlineLock className="auth__icon" />
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="auth__checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Save credentials.</label>
          </div>

          <div className="auth__btn">
            <button>Log in</button>
          </div>
        </form>

        <p className="auth__alt">
          Forgot password?{' '}
          <Link to="/reset" className="auth__link">
            Reset
          </Link>
        </p>
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
