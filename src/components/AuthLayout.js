import '../styles/authlayout.css';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Reset from '../pages/Reset';
import CarouselComponent from './CarouselComponent';

import { Routes, Route } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="authLayout">
      <div className="authLayout__left">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
      <div className="authLayout__right">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default AuthLayout;
