import BaseCard from './BaseCard';
import LoginForm from './LoginForm';

import LOGOIMG from '../assets/images/logo.svg';

const Login = () => {
  return (
    <BaseCard maxWidth='438px'>
      <img className='logo-img' alt='b2bit logo' src={LOGOIMG}></img>
      <LoginForm />
    </BaseCard>
  );
};

export default Login;
