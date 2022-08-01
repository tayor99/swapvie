import { BiUser } from 'react-icons/bi';
import { AiOutlineMail, AiOutlinePhone, AiOutlineLock } from 'react-icons/ai';

import '../../styles/signUp.css';
const SignUp = () => {
  return (
    <div className="signUp">
      <div className="signUp__logo">
        <h1>
          <span>S</span> Swapive
        </h1>
      </div>
      <div className="signUp__details">
        <h2>Sign up into your account</h2>
        <form>
          <div className="signUp__form">
            <label htmlFor="firstName">
              <BiUser className="signUp__icon" />
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
            />
          </div>
          <div className="signUp__form">
            <label htmlFor="lastName">
              <BiUser className="signUp__icon" />
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
            />
          </div>
          <div className="signUp__form">
            <label htmlFor="phoneNumber">
              <AiOutlinePhone className="signUp__icon" />
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="phone number"
            />
          </div>
          <div className="signUp__form">
            <label htmlFor="email">
              <AiOutlineMail className="signUp__icon" />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="signUp__form">
            <label htmlFor="passsword">
              <AiOutlineLock className="signUp__icon" />
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="signUp__form">
            <label htmlFor="confirmPassword">
              <AiOutlineLock className="signUp__icon" />
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="signUp__checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="">
              Send me the <b>Newsletter</b> weekly.
            </label>
          </div>

          <div className="signUp__btn">
            <button>Sign up</button>
          </div>
        </form>

        <p className="signUp__alt">
          Already have an account?<span>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
