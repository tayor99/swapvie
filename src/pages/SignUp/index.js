import { BiUser } from 'react-icons/bi';
import { AiOutlineMail, AiOutlinePhone, AiOutlineLock } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import '../../styles/auth.css';
const SignUp = () => {
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
            <label htmlFor="firstName">
              <BiUser className="auth__icon" />
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
            />
          </div>
          <div className="auth__form">
            <label htmlFor="lastName">
              <BiUser className="auth__icon" />
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
            />
          </div>
          <div className="auth__form">
            <label htmlFor="phoneNumber">
              <AiOutlinePhone className="auth__icon" />
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="phone number"
            />
          </div>
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
          <div className="auth__form">
            <label htmlFor="confirmPassword">
              <AiOutlineLock className="auth__icon" />
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="auth__checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="">
              Send me the <b>Newsletter</b> weekly.
            </label>
          </div>

          <div className="auth__btn">
            <button>Sign up</button>
          </div>
        </form>

        <p className="auth__alt">
          Already have an account?{' '}
          <Link to="/signin" className="auth__link">
            Log in
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
