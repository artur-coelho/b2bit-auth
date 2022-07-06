import BaseCard from './BaseCard';
import LoginForm from './LoginForm';

import LOGOIMG from '../assets/images/logo.svg';

const Login = () => {
  return (
    <BaseCard maxWidth='438px'>
      <div className='logo-container'>
        <img alt='b2bit logo' src={LOGOIMG}></img>
      </div>
      <LoginForm />
    </BaseCard>
  );
};

export default Login;
