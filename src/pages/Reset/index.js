import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const Reset = () => {
  return (
    <div className="auth">
      <div className="auth__details">
        <div className="auth__info">
          <h2>Password Recovery</h2>
          <p>
            Please fill in the email you have used to create your jetic account
            and we will send you a link to reset your password
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
          <hr className="authForm__line" />

          <div className="auth__btn reset__btn">
            <button>Reset my password</button>
          </div>
        </form>

        <p className="auth__alt">
          <Link to="/login" className="auth__link">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Reset;
