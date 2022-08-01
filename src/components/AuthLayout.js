import '../styles/authlayout.css';
import SignUp from '../pages/SignUp';
import CarouselComponent from './CarouselComponent';

const AuthLayout = () => {
  return (
    <div className="authLayout">
      <div className="authLayout__left">
        <SignUp />
      </div>
      <div className="authLayout__right">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default AuthLayout;
