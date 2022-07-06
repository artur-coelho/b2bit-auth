import { useNavigate } from 'react-router-dom';
import BaseCard from './BaseCard';
import Button from './Button';

import LOGOIMG from '../assets/images/logo.svg';

const SessionExpired = () => {
  const navigate = useNavigate();

  const goToLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <BaseCard>
      <section className='nf-container'>
        <img className='logo-img' alt='b2bit logo' src={LOGOIMG}></img>
        <h1 className='nf-title'>Session Expired :(</h1>
        <p className='nf-text'>Your session has expired, please login again</p>
        <Button text='Go to Login' onClick={goToLogin} />
      </section>
    </BaseCard>
  );
};

export default SessionExpired;
