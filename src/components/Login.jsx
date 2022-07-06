import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthService } from '../services';

import BaseCard from './BaseCard';
import LoginForm from './LoginForm';

import LOGOIMG from '../assets/images/logo.svg';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AuthService.isLoggedIn() && navigate('/main/profile');
  }, [navigate]);

  return (
    <BaseCard maxWidth='438px'>
      <div className='logo-container'>
        <img className='logo-img' alt='b2bit logo' src={LOGOIMG}></img>
      </div>
      <LoginForm />
    </BaseCard>
  );
};

export default Login;
