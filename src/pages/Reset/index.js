import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const Reset = () => {
  return (
    <div className="auth">
      <div className="auth__logo">
        <h1>
          <span>S</span> Swapive
        </h1>
      </div>
      <div className="auth__details">
        <h2>Reset your password</h2>
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

          <div className="auth__btn">
            <button>Reset</button>
          </div>
        </form>

        <p className="auth__alt">
          Don't have an account?{' '}
          <Link to="/" className="auth__link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Reset;
