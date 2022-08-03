import { Link } from 'react-router-dom';

import '../../styles/auth.css';
const SignUp = () => {
  return (
    <div className="auth">
      <div className="auth__details">
        <h2>
          Creating an account is free of charge and no credit card information
          will be needed
        </h2>
        <form>
          <div className="auth__form">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
            />
          </div>
          <div className="auth__form">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
            />
          </div>
          <div className="auth__form">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="phone number"
            />
          </div>
          <div className="auth__form">
            <label htmlFor="email">Email</label>
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
          <div className="auth__form">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <hr className="authForm__line" />
          <div className="auth__checkbox">
            <div className="checkbox">
              <input type="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1">
                I've read and accept the <span>Terms of Service</span>
              </label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="checkbox2" />
              <label htmlFor="checkbox2">Send me the Newsletter weekly.</label>
            </div>
          </div>

          <div className="auth__btn">
            <button>Create my account</button>
          </div>
        </form>

        <p className="auth__alt">
          Already have an account?{' '}
          <Link to="/login" className="auth__link">
            Log in
          </Link>{' '}
        </p>

        <p className="auth__certification">
          © 2022 Swapive, Inc. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default SignUp;
